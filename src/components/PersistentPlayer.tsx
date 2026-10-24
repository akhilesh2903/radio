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
      {/* Stream Unavailable / Status Modal */}
      {isPlayerExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white border border-[#E5DAC6] rounded-3xl shadow-2xl p-6 sm:p-8 space-y-5 text-slate-800">
            <button
              onClick={() => setIsPlayerExpanded(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-[#0F2C59] hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center">
                <Radio className="w-6 h-6 text-[#EA580C]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F2C59]">Broadcast Stream Status</h3>
                <p className="text-xs text-slate-500 font-mono">Radio Alva&apos;s 88.4 FM Moodubidire</p>
              </div>
            </div>

            {/* Honest Broadcast Disclosure matching Section 8 requirement */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <div className="flex items-center gap-2 font-bold mb-1.5 text-[#0F2C59]">
                <AlertCircle className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Live streaming will be available soon.</span>
              </div>
              <p className="text-slate-600">
                Radio Alva&apos;s 88.4 FM is actively transmitting over-the-air across Moodubidire Taluk and neighboring regions on <strong>88.4 MHz FM</strong>. The official internet live stream server is being provisioned and will go live shortly.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-600 border-t border-slate-100 pt-3">
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Frequency:</span>
                <span className="text-[#0F2C59] font-bold">88.4 MHz FM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Coverage:</span>
                <span className="text-[#0F2C59] font-semibold">Moodubidire Taluk &amp; Surroundings</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Broadcasting Hours:</span>
                <span className="text-[#0F2C59] font-semibold">6:00 AM – 9:00 AM &amp; 5:30 PM – 8:30 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Current Local IST:</span>
                <span className="text-[#EA580C] font-semibold">{currentTimeIST}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsPlayerExpanded(false)}
                className="w-full py-3 rounded-full bg-[#0F2C59] hover:bg-[#1E3A8A] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Audio Player Bar in Frosted Light Cream / White */}
      <aside
        aria-label="Audio Player"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E5DAC6] shadow-[0_-8px_30px_rgba(15,44,89,0.12)] px-4 py-2.5 sm:py-3"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Left: Station Identity & Current Show */}
          <div className="flex items-center gap-3 min-w-0 max-w-[48%] sm:max-w-md">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#E5DAC6] shrink-0 flex items-center justify-center p-1 shadow-xs">
              <Image
                src="/radiologo-clean.png"
                alt="Radio Alva's"
                width={48}
                height={48}
                className="object-contain"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-red-600/10 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                </div>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase text-[#EA580C] tracking-wider">
                  88.4 FM
                </span>
                <span className="text-slate-300 hidden sm:inline">&bull;</span>
                <span className="text-[10px] text-slate-500 hidden sm:inline truncate">
                  {isBroadcastingHours ? "On Air IST" : "Scheduled Slot"}
                </span>
              </div>
              <h4 className="text-[#0F2C59] text-xs sm:text-sm font-bold truncate leading-tight">
                {currentShow ? currentShow.title : (upcomingShow?.title || "Radio Alva's 88.4 FM")}
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate">
                {currentShow ? `${currentShow.timeSlot} • ${currentShow.programmeInCharge}` : `Next: ${upcomingShow?.title || "Community Voice"}`}
              </p>
            </div>
          </div>

          {/* Center: Playback Controls */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={togglePlay}
              className={`p-3 sm:p-3.5 rounded-full transition-all duration-200 transform active:scale-95 shadow-md cursor-pointer ${
                isPlaying
                  ? "bg-red-600 hover:bg-red-700 text-white shadow-red-600/30"
                  : "bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#D9480F] hover:to-[#EA580C] text-white shadow-orange-500/30 font-black"
              }`}
              aria-label={isPlaying ? "Pause Live Broadcast" : "Play Live Broadcast"}
            >
              {isLoading ? (
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Stylized Audio Wave Visualizer Bars */}
            <div className="hidden md:flex items-center gap-1 h-6 px-3 rounded-xl bg-[#F5EFEB] border border-[#E5DAC6]">
              {[0.4, 0.9, 0.6, 1.0, 0.7, 0.3, 0.8, 0.5].map((scale, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying ? "bg-[#EA580C]" : "bg-slate-300"
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
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Volume Control */}
            <div className="relative hidden sm:flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-xl text-slate-500 hover:text-[#0F2C59] hover:bg-slate-100 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-red-500" />
                ) : volume < 0.5 ? (
                  <Volume1 className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 lg:w-20 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#EA580C]"
                aria-label="Volume slider"
              />
            </div>

            {/* Stream Info Trigger */}
            <button
              onClick={() => setIsPlayerExpanded(true)}
              className="p-2 rounded-xl text-slate-500 hover:text-[#0F2C59] hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Broadcast details"
              title="Broadcast details"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
