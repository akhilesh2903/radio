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
import { ABOUT_DATA } from "@/data/aboutData";

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
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#090a0f] via-zinc-950 to-[#0d0e14]">
      {/* Decorative ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5" />
            <span>Community Radio Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Radio Alva&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">88.4 FM</span>
          </h2>

          <div className="space-y-1">
            <p className="text-lg sm:text-xl font-bold uppercase text-amber-400 tracking-wide">
              {ABOUT_DATA.primaryTagline}
            </p>
            <p className="text-sm sm:text-base text-zinc-400 italic">
              &ldquo;{ABOUT_DATA.secondaryTagline}&rdquo;
            </p>
          </div>
        </div>

        {/* Narrative Split: Story + Studio Mural Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Left Column: Authentic Community Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md space-y-5">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                The Voice of Coastal Karnataka
              </h3>

              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
                {ABOUT_DATA.descriptionParagraphs[0]}
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {ABOUT_DATA.descriptionParagraphs[1]}
              </p>

              {/* Three Institutional Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-amber-400 font-mono font-bold text-xs uppercase block">Pioneering</span>
                  <span className="text-white font-semibold text-sm block">1st in Moodubidire</span>
                  <span className="text-zinc-400 text-xs block">Taluk community broadcaster</span>
                </div>
                <div className="space-y-1">
                  <span className="text-amber-400 font-mono font-bold text-xs uppercase block">Linguistic Pride</span>
                  <span className="text-white font-semibold text-sm block">Tulu &amp; Kannada</span>
                  <span className="text-zinc-400 text-xs block">Preserving regional tongues</span>
                </div>
                <div className="space-y-1">
                  <span className="text-amber-400 font-mono font-bold text-xs uppercase block">Governance</span>
                  <span className="text-white font-semibold text-sm block">Alva&apos;s Foundation</span>
                  <span className="text-zinc-400 text-xs block">Educational excellence</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-950/40 via-zinc-900/80 to-zinc-900/60 border border-amber-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Our Vision</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-white italic leading-relaxed">
                &ldquo;{ABOUT_DATA.vision}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right Column: Studio Mural Photo Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/gallery/2026-09-26-16-12-28-811.jpg"
                  alt="Official Radio Alva's 88.4 FM Wall Mural"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-6">
                <span className="text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  Broadcasting Studio HQ
                </span>
                <h4 className="text-white text-lg font-bold">The Authentic Mural</h4>
                <p className="text-zinc-300 text-xs mt-1">
                  Radio Alva&apos;s 88.4 FM wall mural welcoming community guests, artists, and students in Moodubidire.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Our Mission: 6 Objectives Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Mission
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Six core pillars driving our daily community radio programming, field interviews, and broadcasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_DATA.missionObjectives.map((obj) => {
              const IconComponent = iconMap[obj.iconName] || Volume2;
              return (
                <div
                  key={obj.number}
                  className="relative group p-6 sm:p-7 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-amber-400 transition-colors">
                      0{obj.number}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-zinc-400 mb-2">
                    {obj.tag}
                  </span>

                  <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {obj.title}
                  </h4>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
