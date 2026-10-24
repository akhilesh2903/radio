"use client";

import React from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Calendar,
  Radio,
  Sparkles,
  MapPin,
  Clock,
  Volume2,
  Signal,
  ArrowRight,
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import Radio3DCanvas from "./Radio3DCanvas";
import { STATION_CONFIG } from "@/data/stationConfig";

export default function HeroSection() {
  const { isPlaying, isLoading, togglePlay, currentShow, upcomingShow, isBroadcastingHours, currentTimeIST } = useAudio();

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 lg:py-20 min-h-[90vh] flex items-center">
      {/* Background Cinematic Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      
      {/* Studio Waveform Grid Background Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,53,15,0.18),rgba(255,255,255,0))] -z-20" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Station Identity & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Station Status Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs font-semibold tracking-wider uppercase">
                <Radio className="w-3.5 h-3.5 animate-pulse text-orange-400" />
                <span>88.4 MHz FM</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Moodubidire, Karnataka</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Taluk&apos;s 1st Community Radio</span>
              </span>
            </div>

            {/* Main Station Title & Taglines */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                Radio Alva&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500">88.4 FM</span>
              </h1>

              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-amber-400 font-sans">
                  VOICE FOR A BETTER TOMORROW
                </p>
                <p className="text-base sm:text-lg font-medium text-zinc-400 italic font-serif">
                  &ldquo;Namma Moodubidire, Namma Dhwani&rdquo;
                </p>
              </div>
            </div>

            {/* Supplying Description Paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Moodubidire is home to many voices, languages, traditions and ideas. Radio Alva&apos;s 88.4 FM is a community platform for sharing them.
            </p>

            {/* On-Air Live Deck Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-xl max-w-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isBroadcastingHours ? "bg-red-400" : "bg-amber-400"}`}></span>
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isBroadcastingHours ? "bg-red-500" : "bg-amber-500"}`}></span>
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">
                      {isBroadcastingHours ? "ON AIR IN MOODUBIDIRE (IST)" : "NEXT SCHEDULED BROADCAST"}
                    </span>
                  </div>

                  <h3 className="text-white text-base sm:text-lg font-bold">
                    {currentShow ? currentShow.title : (upcomingShow?.title || "Community Broadcast")}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-1 font-mono text-amber-400">
                      <Clock className="w-3.5 h-3.5" />
                      {currentShow ? currentShow.timeSlot : (upcomingShow?.timeSlot || "6:00 AM – 9:00 AM")}
                    </span>
                    <span>•</span>
                    <span>
                      {currentShow ? `In-Charge: ${currentShow.programmeInCharge}` : (upcomingShow ? `Next: ${upcomingShow.programmeInCharge}` : "Alva's Studio")}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Managed By</span>
                  <span className="text-xs font-semibold text-zinc-300 text-right">Alva&apos;s Education Foundation (R)</span>
                </div>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={togglePlay}
                className={`flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 ${
                  isPlaying
                    ? "bg-red-600 hover:bg-red-700 text-white shadow-red-900/50"
                    : "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-neutral-950 font-black shadow-amber-500/30"
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full" />
                    <span>CONNECTING...</span>
                  </>
                ) : isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 fill-current" />
                    <span>PAUSE LIVE STREAM</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current" />
                    <span>LISTEN LIVE</span>
                  </>
                )}
              </button>

              <Link
                href="#schedule"
                className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-500/50 transition-all duration-200"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>EXPLORE OUR PROGRAMMES</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </Link>
            </div>

            {/* Real Audio Streaming Note */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
              <Signal className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Transmitting live across Moodubidire Taluk on 88.4 MHz • Online audio streaming interface</span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Radio Visual Experience (5 Cols) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 p-2 shadow-2xl flex items-center justify-center">
              
              {/* Radial Accent Rings */}
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none" />

              <Radio3DCanvas isPlaying={isPlaying} />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
