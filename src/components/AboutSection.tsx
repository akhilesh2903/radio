"use client";

import React from "react";
import Image from "next/image";
import {
  Volume2,
  HeartHandshake,
  Sprout,
  Building2,
  BookOpen,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Radio,
  Users,
  Compass,
} from "lucide-react";
import { ABOUT_DATA, MissionObjective } from "@/data/aboutData";

const iconMap = {
  Volume2: Volume2,
  HeartHandshake: HeartHandshake,
  Sprout: Sprout,
  Building2: Building2,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-[#FAF7F2] text-slate-800 border-t border-[#E5DAC6]/60">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C59]/10 border border-[#0F2C59]/20 text-[#0F2C59] font-mono text-xs font-semibold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Community Radio Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F2C59] tracking-tight">
            About Radio Alva&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#F59E0B]">88.4 FM</span>
          </h2>

          <div className="space-y-1">
            <p className="text-lg sm:text-xl font-bold uppercase text-[#EA580C] tracking-wide">
              {ABOUT_DATA.primaryTagline}
            </p>
            <p className="text-sm sm:text-base text-slate-600 italic font-serif">
              &ldquo;{ABOUT_DATA.secondaryTagline}&rdquo;
            </p>
          </div>
        </div>

        {/* Narrative Split: Story + Studio Mural Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Left Column: Authoritative Editorial Description (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
              <div className="p-6 rounded-2xl bg-white border border-[#E5DAC6] shadow-sm">
                <h3 className="text-xl font-bold text-[#0F2C59] mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
                  The Voice of Coastal Karnataka
                </h3>
                <p className="mb-4">
                  {ABOUT_DATA.descriptionParagraphs[0]}
                </p>
                <p className="text-slate-600 text-sm">
                  {ABOUT_DATA.descriptionParagraphs[1]}
                </p>
              </div>

              {/* Vision Card in soft cream & royal blue */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#F5EFEB] to-white border-2 border-[#E5DAC6] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F2C59] mb-2">
                  <Compass className="w-4 h-4 text-[#EA580C]" />
                  <span>Our Vision</span>
                </div>
                <blockquote className="text-base sm:text-lg font-medium text-[#0F2C59] italic leading-snug">
                  &ldquo;{ABOUT_DATA.vision}&rdquo;
                </blockquote>
                <div className="mt-4 pt-3 border-t border-[#E5DAC6] flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Moodubidire Taluk</span>
                  <span className="text-[#EA580C] font-semibold">Alva&apos;s Education Foundation (R)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Mural Photo & Campus Heritage (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5DAC6] bg-white shadow-md group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/gallery/2026-09-26-16-12-28-811.jpg"
                  alt="Radio Alva's 88.4 FM Studio Acoustic Mural and Presenters Lounge"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#E5DAC6]">
                <div className="text-xs font-bold text-[#0F2C59]">Radio Alva&apos;s 88.4 FM Studio Wall Mural</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  &ldquo;Voice for a Better Tomorrow&rdquo; – Acoustic discussion suite at Vidyagiri campus.
                </div>
              </div>
            </div>

            {/* Quick Facts Pill Strip */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-white border border-[#E5DAC6] shadow-xs">
                <div className="text-lg font-black text-[#0F2C59]">1st</div>
                <div className="text-[11px] text-slate-500">Community Radio in Taluk</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E5DAC6] shadow-xs">
                <div className="text-lg font-black text-[#EA580C]">88.4 MHz</div>
                <div className="text-[11px] text-slate-500">Dial Frequency FM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: The 6 Mission Objectives */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Directives</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59]">
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              The 6 foundational commitments driving every daily broadcast of Radio Alva&apos;s 88.4 FM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_DATA.missionObjectives.map((item: MissionObjective) => {
              const IconComponent = iconMap[item.iconName] || Radio;
              return (
                <div
                  key={item.number}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E5DAC6] hover:border-[#EA580C]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top row: Icon + Number indicator */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#F5EFEB] border border-[#E5DAC6] text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white transition-colors flex items-center justify-center">
                        <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#EA580C] transition-colors">
                        0{item.number}
                      </span>
                    </div>

                    {/* Tag badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F5EFEB] text-[10px] font-mono uppercase tracking-wider text-slate-600 mb-3">
                      {item.tag}
                    </span>

                    {/* Title & Description */}
                    <h4 className="text-lg font-bold text-[#0F2C59] mb-2 group-hover:text-[#EA580C] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Moodubidire Community</span>
                    <span className="group-hover:translate-x-1 transition-transform text-[#EA580C]">
                      &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
