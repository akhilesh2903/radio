"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Headphones,
  Mic2,
  Sliders,
  Box,
  X
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import Radio3DCanvas from "./Radio3DCanvas";
import { STATION_CONFIG } from "@/data/stationConfig";

const CATEGORY_PILLARS = [
  { name: "COMMUNITY", filterKey: "Achievers & Community" },
  { name: "CULTURE", filterKey: "Yakshagana & Culture" },
  { name: "EDUCATION", filterKey: "Students & Youth" },
  { name: "AGRICULTURE", filterKey: "Agriculture" },
  { name: "HEALTH", filterKey: "Health & Wellness" },
  { name: "LOCAL VOICES", filterKey: "all" },
];

export default function HeroSection() {
  const { isPlaying, isLoading, togglePlay, currentShow, isBroadcastingHours, currentTimeIST } = useAudio();
  const [show3DModal, setShow3DModal] = useState(false);

  return (
    <section id="hero" className="relative pt-4 pb-16 md:py-16 bg-[#FAF7F2] text-slate-800 overflow-hidden">
      {/* Soft Ambient Cream, Warm Gray & Navy Atmospheric Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#EFE5D3]/60 via-[#E8DFC9]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#EA580C]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges & Transmission Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2C59] text-white font-mono text-xs font-semibold shadow-sm">
              <Radio className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
              <span>88.4 MHz FM</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5DAC6] text-slate-700 text-xs font-medium shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Moodubidire, Karnataka</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/25 text-[#1E3A8A] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
              <span>Taluk&apos;s 1st Community Radio</span>
            </span>
          </div>

          {/* Interactive 3D Visualizer Trigger */}
          <button
            type="button"
            onClick={() => setShow3DModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F5EFEB] border border-[#E5DAC6] text-slate-700 hover:text-[#0F2C59] text-xs font-semibold transition-all shadow-sm group"
          >
            <Box className="w-3.5 h-3.5 text-[#EA580C] group-hover:rotate-12 transition-transform" />
            <span>Interactive 3D Radio &amp; Studio Prop</span>
          </button>
        </div>

        {/* Central Masterpiece: The Cinematic Studio & Campus Panorama */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5DAC6] bg-black shadow-[0_20px_60px_rgba(15,44,89,0.18)]">
          {/* Main Visual Image matching user's uploaded design */}
          <div className="relative aspect-[16/9] min-h-[500px] sm:min-h-[560px] md:min-h-[620px] w-full">
            <Image
              src="/images/hero-studio-cinematic.png"
              alt="Radio Alva's 88.4 FM - Voice for a Better Tomorrow, Namma Moodubidire, Namma Dhwani"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Subtle Gradient Vignette to frame interactive content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Top Left Glowing 'ON AIR' Sign Highlight */}
            <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-red-600/90 text-white font-mono font-bold text-xs tracking-wider uppercase shadow-lg shadow-red-600/40 border border-red-400">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>ON AIR</span>
            </div>

            {/* Top Right Live Frequency Tower Beacon */}
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/40 text-amber-400 font-mono text-xs font-semibold">
              <Signal className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              <span>Transmitting: 88.4 MHz</span>
            </div>

            {/* Right Sidebar Category Pillars Overlay */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 hidden md:flex flex-col items-end text-right z-10">
              <div className="border-r-2 border-amber-500/80 pr-3.5 space-y-2.5">
                {CATEGORY_PILLARS.map((cat) => (
                  <a
                    key={cat.name}
                    href="#schedule"
                    className="block text-[11px] lg:text-xs font-bold tracking-wider text-white/85 hover:text-amber-400 transition-colors uppercase drop-shadow-md hover:translate-x-[-2px] transform transition-transform"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Center-Bottom Direct Interactive Action Deck */}
            <div className="absolute bottom-6 sm:bottom-10 inset-x-4 sm:inset-x-8 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
              {/* Left: Live Programme Status Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-white max-w-md w-full sm:w-auto shadow-2xl">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    type="button"
                    className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#EA580C] to-[#F59E0B] hover:from-[#D9480F] hover:to-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 transition-transform active:scale-95 cursor-pointer"
                    aria-label={isPlaying ? "Pause broadcast" : "Play live radio"}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                        {isBroadcastingHours ? "Live Schedule IST" : "Station Scheduled"}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white truncate drop-shadow">
                      {currentShow ? currentShow.title : "Community Broadcast"}
                    </h4>
                    <p className="text-xs text-slate-300 truncate">
                      {currentShow ? `${currentShow.timeSlot} • ${currentShow.programmeInCharge}` : "Moodubidire • 88.4 MHz FM"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Master CTAs matching image */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={togglePlay}
                  type="button"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F59E0B] to-[#EA580C] hover:from-[#D9480F] hover:to-[#EA580C] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-orange-500/35 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{isPlaying ? "ON AIR NOW" : "LISTEN LIVE"}</span>
                </button>

                <Link
                  href="#schedule"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/30 hover:border-amber-400 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md group"
                >
                  <span>EXPLORE OUR PROGRAMMES</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Editorial Highlights Row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#E5DAC6] shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center shrink-0">
              <Mic2 className="w-5 h-5 text-[#0F2C59]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F2C59]">Professional Studio Facilities</div>
              <div className="text-[11px] text-slate-500">Behringer C-1 microphones, soundproof booths & digital consoles</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E5DAC6] shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0">
              <Signal className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F2C59]">88.4 MHz FM Transmission</div>
              <div className="text-[11px] text-slate-500">6 hours daily on-air: 6–9 AM morning & 5:30–8:30 PM evening</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E5DAC6] shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F2C59]">Tulu, Kannada & Vernacular Lore</div>
              <div className="text-[11px] text-slate-500">Yakshagana, Bennida Baduku agriculture, youth and health awareness</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Radio & Studio Prop Modal */}
      {show3DModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#111622] rounded-3xl border border-white/10 p-6 text-white shadow-2xl">
            <button
              onClick={() => setShow3DModal(false)}
              type="button"
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close 3D viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                Radio Alva&apos;s Studio Equipment
              </span>
              <h3 className="text-xl font-bold text-white">Interactive 3D Visualizer & Studio Prop</h3>
              <p className="text-xs text-slate-400">
                Rotate and interact with the 3D procedural station radio or view the physical vintage gramophone studio prop.
              </p>
            </div>

            <div className="h-[460px] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
              <Radio3DCanvas />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
