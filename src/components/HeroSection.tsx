"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  ArrowRight,
  X,
  Mic2,
  Signal,
  Sparkles,
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import Radio3DCanvas from "./Radio3DCanvas";

const CATEGORY_PILLARS = [
  { name: "COMMUNITY", filterKey: "achievers" },
  { name: "CULTURE", filterKey: "culture" },
  { name: "EDUCATION", filterKey: "youth" },
  { name: "AGRICULTURE", filterKey: "agriculture" },
  { name: "HEALTH", filterKey: "health" },
  { name: "LOCAL VOICES", filterKey: "all" },
];

export default function HeroSection() {
  const { isPlaying, isLoading, togglePlay } = useAudio();
  const [show3DModal, setShow3DModal] = useState(false);

  return (
    <section id="hero" className="relative pt-0 pb-10 lg:py-8 bg-[#FAF7F2] text-slate-800 overflow-hidden">
      {/* Ambient warm background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-[#EFE5D3]/70 via-[#E8DFC9]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />


      {/* ======================================================== */}
      {/* FULL-WIDTH MASTER STUDIO HERO STAGE (MOBILE RESPONSIVE) */}
      {/* ======================================================== */}
      <div className="relative w-full overflow-hidden border-y-2 border-[#E5DAC6] bg-black shadow-[0_25px_80px_rgba(15,44,89,0.18)]">
        
        {/* Panoramic Uploaded Broadcast Studio Backdrop */}
        <div className="relative w-full min-h-[500px] sm:h-[540px] md:h-[580px] lg:h-[620px] flex items-center justify-center overflow-hidden">
          <Image
            src="/heroimage.png"
            alt="Radio Alva's 88.4 FM Broadcast Studio"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Cinematic Vignette for High Contrast Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/35 pointer-events-none" />

          {/* Subtle Condenser Microphone Windscreen Badge Overlay */}
          <div className="absolute top-[44%] left-[17%] sm:left-[19%] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block z-10">
            <div className="flex flex-col items-center justify-center p-1 rounded-md bg-black/40 backdrop-blur-xs border border-amber-400/20 shadow-lg">
             
              <span className="text-[7px] text-amber-300 font-bold tracking-tighter mt-0.5 uppercase drop-shadow">
               
              </span>
            </div>
          </div>

          {/* Right Category Pillar Column with Golden Line (Desktop only) */}
          <div className="absolute top-[48%] right-4 sm:right-7 lg:right-10 -translate-y-1/2 hidden md:flex items-center z-20">
            <div className="border-r-2 border-amber-500 pr-3 sm:pr-4 space-y-2 text-right">
              {CATEGORY_PILLARS.map((cat) => (
                <Link
                  key={cat.name}
                  href="#schedule"
                  className="block text-[11px] lg:text-xs font-bold tracking-wider text-slate-100 hover:text-amber-400 uppercase transition-all drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] hover:-translate-x-1"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/* CENTER STAGE: CODED REAL TYPOGRAPHY & LIVE SOUNDWAVE      */}
          {/* ======================================================== */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-8 text-center z-20 pointer-events-none pb-2 sm:pb-4">
            <div className="max-w-2xl sm:max-w-3xl pointer-events-auto flex flex-col items-center w-full">
              
              {/* Line 1: RADIO ALVA'S */}
              <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-0.5 sm:mb-1">
                {/* RADI with custom O containing golden microphone & broadcast waves */}
                <div className="flex items-center text-white font-black tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  <span>RADI</span>
                  <span className="relative inline-flex items-center justify-center mx-1 sm:mx-1.5 align-middle">
                    <span className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 sm:border-3 border-amber-400 bg-gradient-to-b from-amber-400/35 to-amber-600/20 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.6)]">
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" fillOpacity="0.3" />
                        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                        <line x1="12" y1="18" x2="12" y2="22" />
                        <line x1="8" y1="22" x2="16" y2="22" />
                        <path d="M7 5a6 6 0 0 1 10 0" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M5 3a9 9 0 0 1 14 0" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </span>
                  </span>
                </div>

                {/* ALVA'S in rich 3D gold chrome typography */}
                <div className="font-black tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  ALVA&apos;S
                </div>
              </div>

              {/* Line 2: 88.4 FM with dynamic glowing horizontal soundwave */}
              <div className="relative w-full max-w-xl sm:max-w-2xl flex items-center justify-center my-0">
                {/* Dynamic Glowing Horizontal Audio Waveform */}
                <div className="absolute -inset-x-4 sm:-inset-x-12 top-1/2 -translate-y-1/2 h-14 sm:h-20 flex items-center justify-between opacity-85 pointer-events-none -z-10 overflow-hidden">
                  {[8, 14, 22, 16, 28, 42, 32, 54, 70, 52, 80, 95, 76, 88, 100, 84, 100, 88, 76, 95, 80, 52, 70, 54, 32, 42, 28, 16, 22, 14, 8].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 sm:w-1.5 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-amber-200 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)] animate-pulse"
                      style={{
                        height: `${h * 0.7}px`,
                        animationDelay: `${(i % 10) * 0.1}s`,
                        animationDuration: isPlaying ? "0.6s" : "1.4s",
                      }}
                    />
                  ))}
                </div>

                {/* 88.4 FM Typography */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-normal text-white uppercase drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)] font-sans">
                  88.4 FM
                </h1>
              </div>

              {/* Line 3: -- VOICE FOR A BETTER TOMORROW -- */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.28em] text-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mt-0.5 sm:mt-1">
                <span className="h-[1.5px] w-5 sm:w-14 bg-gradient-to-r from-transparent to-amber-400" />
                <span>VOICE FOR A BETTER TOMORROW</span>
                <span className="h-[1.5px] w-5 sm:w-14 bg-gradient-to-l from-transparent to-amber-400" />
              </div>

              {/* Line 4: Calligraphic Secondary Tagline */}
              <div className="font-cursive text-xl sm:text-3xl md:text-4xl lg:text-[42px] text-amber-300 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] my-0.5 sm:my-1">
                Namma Moodubidire, Namma Dhwani
              </div>

              {/* Line 5: Supporting Description */}
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-200/90 max-w-sm sm:max-w-lg mx-auto leading-relaxed font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] px-2">
                Moodubidire is home to many voices, languages, traditions and ideas.
                <span className="block sm:inline"> Radio Alva&apos;s 88.4 FM is a community platform for sharing them.</span>
              </p>

              {/* Line 6: Master Interactive CTA Buttons (Mobile Responsive) */}
              <div className="pt-2.5 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto px-4">
                {/* Primary: LISTEN LIVE with circular white play badge */}
                <button
                  onClick={togglePlay}
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FF5E14] via-[#F59E0B] to-[#FF5E14] hover:from-[#EA580C] hover:to-[#EA580C] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_6px_25px_rgba(255,94,20,0.5)] hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0 group-hover:rotate-6 transition-transform">
                    {isLoading ? (
                      <span className="inline-block w-3.5 h-3.5 border-2 border-[#FF5E14] border-t-transparent rounded-full animate-spin" />
                    ) : isPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-[#FF5E14] text-[#FF5E14]" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-[#FF5E14] text-[#FF5E14] ml-0.5" />
                    )}
                  </span>
                  <span>{isPlaying ? "ON AIR NOW" : "LISTEN LIVE"}</span>
                </button>

                {/* Secondary: EXPLORE OUR PROGRAMMES with white/glass border */}
                <Link
                  href="#schedule"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/60 hover:border-amber-400 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg group"
                >
                  <span>EXPLORE OUR PROGRAMMES</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Supporting Editorial Highlights Row in Light Theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-7 sm:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#E5DAC6] shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center shrink-0">
              <Mic2 className="w-5 h-5 text-[#0F2C59]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F2C59]">Professional Studio Facilities</div>
              <div className="text-[11px] text-slate-500">Behringer C-1 microphones, soundproof booths &amp; digital consoles</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E5DAC6] shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0">
              <Signal className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F2C59]">88.4 MHz FM Transmission</div>
              <div className="text-[11px] text-slate-500">6 hours daily on-air: 6–9 AM morning &amp; 5:30–8:30 PM evening</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E5DAC6] shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F2C59]">Tulu, Kannada &amp; Vernacular Lore</div>
              <div className="text-[11px] text-slate-500">Yakshagana, Bennida Baduku agriculture, youth and health awareness</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Radio & Studio Prop Modal */}
      {show3DModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-[#E5DAC6] p-6 text-slate-800 shadow-2xl">
            <button
              onClick={() => setShow3DModal(false)}
              type="button"
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close 3D viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-[#EA580C] font-bold uppercase tracking-wider">
                Radio Alva&apos;s Studio Equipment
              </span>
              <h3 className="text-xl font-bold text-[#0F2C59]">Interactive 3D Visualizer &amp; Studio Prop</h3>
              <p className="text-xs text-slate-500">
                Rotate and interact with the 3D procedural station radio or view the physical vintage gramophone studio prop.
              </p>
            </div>

            <div className="h-[460px] rounded-2xl overflow-hidden bg-black border border-slate-200">
              <Radio3DCanvas />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
