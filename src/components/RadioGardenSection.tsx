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
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] shadow-sm ${className}`}
      aria-label="Explore world stations on Radio Garden (opens external site)"
    >
      <Globe2 className="w-4 h-4 text-emerald-200" />
      <span>EXPLORE ON RADIO GARDEN</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
    </a>
  );
}

export default function RadioGardenSection() {
  return (
    <section className="py-16 bg-[#F5EFEB] border-t border-[#E5DAC6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-white border border-[#E5DAC6] overflow-hidden shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Globe visual / Interactive card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative p-6 rounded-2xl bg-[#0F2C59] text-white border border-[#1E3A8A] shadow-md">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Compass className="w-4 h-4 animate-spin [animation-duration:12s]" />
                    <span>Global Radio Atlas</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                    External Discovery
                  </span>
                </div>

                {/* Conceptual stylized globe coordinate visual */}
                <div className="relative h-44 rounded-xl bg-[#081830] border border-white/10 flex flex-col items-center justify-center p-4 overflow-hidden group">
                  <div className="w-20 h-20 rounded-full border border-emerald-400/40 border-dashed animate-spin [animation-duration:20s] flex items-center justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Globe2 className="w-7 h-7 text-emerald-400" />
                    </div>
                    {/* Moodubidire pin coordinate */}
                    <div className="absolute -top-1 right-2 flex items-center gap-1 bg-[#EA580C] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                      <MapPin className="w-2.5 h-2.5" />
                      13.07° N
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-200 font-semibold text-center relative z-10">
                    Moodubidire, Karnataka, India
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono text-center">
                    Coordinates: 13.0694° N, 74.9961° E
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-300 leading-relaxed">
                  <span className="text-emerald-400 font-semibold">Note:</span> Clicking below opens the official Radio Garden global directory (
                  <code className="text-amber-300">radio.garden</code>) in a secure new tab.
                </div>
              </div>
            </div>

            {/* Narrative & Action */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
                <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>GLOBAL BROADCAST HORIZONS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2C59] uppercase tracking-tight font-sans">
                DISCOVER COMMUNITY BROADCASTS ON{" "}
                <span className="text-emerald-600">RADIO GARDEN</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                Radio Garden is the renowned 3D interactive satellite globe that allows listeners worldwide to spin the Earth and tune in to thousands of live community and local broadcasts.
              </p>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                As the pioneer community station in Moodubidire Taluk, Radio Alva&apos;s 88.4 FM celebrates the unique coastal culture of Karnataka—connecting diaspora listeners, students, and culture enthusiasts worldwide with the indigenous wisdom of our region.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={STATION_CONFIG.radioGarden}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/25 active:scale-95 cursor-pointer"
                >
                  <Globe2 className="w-4 h-4 text-emerald-200" />
                  <span>EXPLORE ON RADIO GARDEN</span>
                  <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-[#E5DAC6] text-slate-800 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Radio className="w-4 h-4 text-[#EA580C]" />
                  <span>Station Inquiries</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
