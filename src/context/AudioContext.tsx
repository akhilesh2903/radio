"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { STATION_CONFIG } from "@/data/stationConfig";
import { getLiveProgrammeStatus, Programme } from "@/data/scheduleData";

interface AudioContextType {
  isPlaying: boolean;
  isLoading: boolean;
  isMuted: boolean;
  volume: number;
  streamUrl: string;
  hasStreamConfigured: boolean;
  status: "idle" | "connecting" | "playing" | "error" | "unavailable";
  errorMessage: string | null;
  currentShow: Programme | null;
  upcomingShow: Programme | null;
  currentTimeIST: string;
  isBroadcastingHours: boolean;
  togglePlay: () => void;
  setVolume: (val: number) => void;
  toggleMute: () => void;
  isPlayerExpanded: boolean;
  setIsPlayerExpanded: (expanded: boolean) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.85);
  const [status, setStatus] = useState<"idle" | "connecting" | "playing" | "error" | "unavailable">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);

  // Live schedule state
  const [currentShow, setCurrentShow] = useState<Programme | null>(null);
  const [upcomingShow, setUpcomingShow] = useState<Programme | null>(null);
  const [currentTimeIST, setCurrentTimeIST] = useState<string>("");
  const [isBroadcastingHours, setIsBroadcastingHours] = useState(false);

  const streamUrl = STATION_CONFIG.streamUrl;
  const hasStreamConfigured = Boolean(streamUrl && streamUrl.trim().length > 0);

  // Update schedule status on interval
  const updateSchedule = useCallback(() => {
    const liveStatus = getLiveProgrammeStatus();
    setCurrentShow(liveStatus.currentShow);
    setUpcomingShow(liveStatus.upcomingShow);
    setCurrentTimeIST(liveStatus.currentTimeIST);
    setIsBroadcastingHours(liveStatus.isBroadcastingHours);
  }, []);

  useEffect(() => {
    updateSchedule();
    const interval = setInterval(updateSchedule, 30000); // every 30s
    return () => clearInterval(interval);
  }, [updateSchedule]);

  // Audio element setup
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio();
    audio.preload = "none";
    audioRef.current = audio;

    const handleWaiting = () => {
      setIsLoading(true);
      setStatus("connecting");
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      setStatus("playing");
      setErrorMessage(null);
    };

    const handlePause = () => {
      setIsPlaying(false);
      if (status !== "error") setStatus("idle");
    };

    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      setStatus("error");
      setErrorMessage("Live stream connection interrupted or server is currently offline.");
    };

    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Media Session API integration
  useEffect(() => {
    if (typeof window !== "undefined" && "mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentShow ? currentShow.title : "Radio Alva's 88.4 FM",
        artist: "Alva's Education Foundation (R)",
        album: "Voice for a Better Tomorrow • 88.4 MHz",
        artwork: [
          { src: "/radiologo.png", sizes: "512x512", type: "image/png" },
        ],
      });

      navigator.mediaSession.setActionHandler("play", () => {
        togglePlay();
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        togglePlay();
      });
      navigator.mediaSession.setActionHandler("stop", () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      });
    }
  }, [currentShow]);

  const setVolume = (val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
      if (clamped > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const togglePlay = () => {
    if (!hasStreamConfigured) {
      setStatus("unavailable");
      setErrorMessage("Live streaming will be available soon.");
      setIsPlayerExpanded(true);
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setStatus("idle");
    } else {
      setIsLoading(true);
      setStatus("connecting");
      setErrorMessage(null);

      // Re-assign src with cache-busting to bypass frozen live buffer
      if (!audio.src || audio.src !== streamUrl) {
        audio.src = streamUrl;
      }
      audio.load();

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
            setStatus("playing");
          })
          .catch((err) => {
            console.error("Audio playback error:", err);
            setIsLoading(false);
            setIsPlaying(false);
            setStatus("error");
            setErrorMessage(
              err.name === "NotAllowedError"
                ? "Playback was prevented by browser policy. Click Play to listen."
                : "Unable to connect to live audio server at this time."
            );
          });
      }
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isLoading,
        isMuted,
        volume,
        streamUrl,
        hasStreamConfigured,
        status,
        errorMessage,
        currentShow,
        upcomingShow,
        currentTimeIST,
        isBroadcastingHours,
        togglePlay,
        setVolume,
        toggleMute,
        isPlayerExpanded,
        setIsPlayerExpanded,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
