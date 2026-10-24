"use client";

import React from "react";
import { Globe2, ExternalLink, Radio, Compass, MapPin } from "lucide-react";
import { STATION_CONFIG } from "@/data/stationConfig";

export function ExploreRadioGardenButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={STATION_CONFIG.radioGarden}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-semibold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] ${className}`}
      aria-label="Explore world stations on Radio Garden (opens external site)"
    >
      <Globe2 className="w-4 h-4 text-emerald-400" />
      <span>EXPLORE ON RADIO GARDEN</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
    </a>
  );
}

export default function RadioGardenSection() {
  return (
    <section className="py-16 bg-[#0a0e16] border-t border-white/5 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0f1723] via-[#0d141e] to-[#080d15] border border-emerald-500/20 overflow-hidden shadow-2xl">
          {/* Top subtle glow bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-400/50 to-emerald-500/0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Globe visual / Interactive card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative p-6 rounded-2xl bg-black/40 border border-emerald-500/20 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Compass className="w-4 h-4 animate-spin [animation-duration:12s]" />
                    <span>Global Radio Atlas</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    External Discovery
                  </span>
                </div>

                {/* Conceptual stylized globe coordinate visual */}
                <div className="relative h-44 rounded-xl bg-gradient-to-b from-[#06141a] to-[#04090e] border border-white/5 flex flex-col items-center justify-center p-4 overflow-hidden group">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-20 h-20 rounded-full border border-emerald-500/40 border-dashed animate-spin [animation-duration:20s] flex items-center justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Globe2 className="w-7 h-7 text-emerald-400" />
                    </div>
                    {/* Moodubidire pin coordinate */}
                    <div className="absolute -top-1 right-2 flex items-center gap-1 bg-amber-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                      <MapPin className="w-2.5 h-2.5" />
                      13.07° N
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 font-medium text-center relative z-10">
                    Moodubidire, Karnataka, India
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono text-center">
                    Coordinates: 13.0694° N, 74.9961° E
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 leading-relaxed">
                  <span className="text-emerald-400 font-semibold">Note:</span> Clicking the button below opens the official Radio Garden global directory (
                  <code className="text-slate-300">radio.garden</code>) in a new browser tab.
                </div>
              </div>
            </div>

            {/* Narrative & Action */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                <Globe2 className="w-3.5 h-3.5" />
                GLOBAL BROADCAST HORIZONS
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight font-sans">
                DISCOVER COMMUNITY BROADCASTS ON{" "}
                <span className="text-emerald-400">RADIO GARDEN</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Radio Garden is the renowned 3D interactive satellite globe that allows listeners worldwide to spin the Earth and tune in to thousands of live community and local broadcasts.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                As the pioneer community station in Moodubidire Taluk, Radio Alva&apos;s 88.4 FM celebrates the unique coastal culture of Karnataka—connecting diaspora listeners, students, and culture enthusiasts worldwide with the indigenous wisdom of our region.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={STATION_CONFIG.radioGarden}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                >
                  <Globe2 className="w-4 h-4" />
                  <span>EXPLORE ON RADIO GARDEN</span>
                  <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Radio className="w-4 h-4 text-emerald-400" />
                  Station Inquiries
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
