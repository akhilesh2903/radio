"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Radio,
  Signal,
  Clock,
  ChevronUp,
  ChevronDown,
  Info,
  ExternalLink,
  X,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { STATION_CONFIG } from "@/data/stationConfig";

export default function PersistentPlayer() {
  const {
    isPlaying,
    isLoading,
    isMuted,
    volume,
    status,
    errorMessage,
    hasStreamConfigured,
    currentShow,
    upcomingShow,
    currentTimeIST,
    isBroadcastingHours,
    togglePlay,
    setVolume,
    toggleMute,
    isPlayerExpanded,
    setIsPlayerExpanded,
  } = useAudio();

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  return (
    <>
      {/* Stream Unavailable / Status Modal (shown if user clicks play without stream or wants info) */}
      {isPlayerExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl p-6 space-y-5">
            <button
              onClick={() => setIsPlayerExpanded(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Broadcast Stream Status</h3>
                <p className="text-xs text-zinc-400 font-mono">Radio Alva&apos;s 88.4 FM Moodubidire</p>
              </div>
            </div>

            {/* Status Message */}
            {!hasStreamConfigured ? (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Live streaming will be available soon.</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Radio Alva&apos;s 88.4 FM is actively transmitting over-the-air across Moodubidire Taluk and neighboring regions on <strong>88.4 MHz FM</strong>. The official internet live stream server is being provisioned and will go live shortly.
                </p>
              </div>
            ) : status === "error" ? (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Connection Issue</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {errorMessage || "Unable to reach the live broadcast stream. Please verify your connection or try again shortly."}
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Signal className="w-4 h-4 flex-shrink-0" />
                  <span>Live Stream Connected</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Streaming audio from Radio Alva&apos;s master broadcast console.
                </p>
              </div>
            )}

            {/* Over-the-air transmission details */}
            <div className="space-y-2 text-xs border-t border-white/10 pt-4">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-zinc-400">Frequency:</span>
                <span className="text-white font-mono font-semibold">88.4 MHz FM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-zinc-400">Coverage:</span>
                <span className="text-zinc-200">Moodubidire Taluk & Surroundings</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-zinc-400">Broadcasting Hours:</span>
                <span className="text-zinc-200">6:00 AM – 9:00 AM &amp; 5:30 PM – 8:30 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Current Local IST:</span>
                <span className="text-amber-400 font-mono font-semibold">{currentTimeIST}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsPlayerExpanded(false)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Audio Player Bar */}
      <aside
        aria-label="Audio Player"
        className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.7)] px-4 py-2.5 sm:py-3"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Left: Station Identity & Current Show */}
          <div className="flex items-center gap-3 min-w-0 max-w-[45%] sm:max-w-md">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-xl overflow-hidden bg-neutral-900 border border-white/10 flex-shrink-0 flex items-center justify-center p-1">
              <Image
                src="/radiologo.png"
                alt="Radio Alva's"
                width={44}
                height={44}
                className="object-contain"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-red-600/20 backdrop-blur-[1px] flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                </div>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
                  88.4 FM
                </span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-[10px] text-zinc-400 hidden sm:inline truncate">
                  {isBroadcastingHours ? "On Air IST" : "Scheduled Slot"}
                </span>
              </div>
              <h4 className="text-white text-xs sm:text-sm font-semibold truncate leading-tight">
                {currentShow ? currentShow.title : (upcomingShow?.title || "Radio Alva's 88.4 FM")}
              </h4>
              <p className="text-[10px] sm:text-xs text-zinc-400 truncate">
                {currentShow ? `${currentShow.timeSlot} • ${currentShow.programmeInCharge}` : `Next: ${upcomingShow?.title || "Community Voice"}`}
              </p>
            </div>
          </div>

          {/* Center: Playback Controls */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <button
              onClick={togglePlay}
              className={`p-3 sm:p-3.5 rounded-full transition-all duration-200 transform active:scale-95 shadow-lg ${
                isPlaying
                  ? "bg-red-600 hover:bg-red-700 text-white shadow-red-900/40"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 font-black shadow-amber-500/30"
              }`}
              aria-label={isPlaying ? "Pause Live Broadcast" : "Play Live Broadcast"}
            >
              {isLoading ? (
                <span className="animate-spin inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              )}
            </button>

            {/* Stylized Audio Wave Visualizer Bars */}
            <div className="hidden md:flex items-center gap-1 h-6 px-3 rounded-lg bg-neutral-900/60 border border-white/5">
              {[0.4, 0.9, 0.6, 1.0, 0.7, 0.3, 0.8, 0.5].map((scale, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying ? "bg-amber-400" : "bg-zinc-700"
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(20, scale * 100)}%` : "25%",
                    animation: isPlaying ? `pulse 0.8s ease-in-out infinite alternate ${i * 0.1}s` : "none",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Volume & Info Controls */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Volume Control */}
            <div className="relative hidden sm:flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-red-400" />
                ) : volume < 0.5 ? (
                  <Volume1 className="w-4 h-4 text-zinc-300" />
                ) : (
                  <Volume2 className="w-4 h-4 text-zinc-300" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 lg:w-24 h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                aria-label="Volume Slider"
              />
            </div>

            {/* Info / Stream Details Button */}
            <button
              onClick={() => setIsPlayerExpanded(true)}
              className="p-2 rounded-lg text-zinc-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
              title="Stream Transmission Details"
              aria-label="Stream Transmission Details"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

        </div>
      </aside>
    </>
  );
}
