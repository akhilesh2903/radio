"use client";

import React, { useState } from "react";
import {
  Sun,
  Moon,
  Clock,
  User,
  Radio,
  Search,
  Filter,
  Sparkles,
  CheckCircle2,
  Share2,
  Calendar,
  Layers,
  Repeat,
  Info,
} from "lucide-react";
import {
  MORNING_SCHEDULE,
  EVENING_SCHEDULE,
  SCHEDULE_METRICS,
  Programme,
  timeToMinutes,
} from "@/data/scheduleData";
import { useAudio } from "@/context/AudioContext";

export default function ScheduleSection() {
  const [activeTab, setActiveTab] = useState<"morning" | "evening">("morning");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);

  const { currentShow, currentTimeIST } = useAudio();

  const currentSlotProgrammes = activeTab === "morning" ? MORNING_SCHEDULE : EVENING_SCHEDULE;

  const filteredProgrammes = currentSlotProgrammes.filter((prog) => {
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.resourcePerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.programmeInCharge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      prog.category === selectedCategory ||
      (selectedCategory === "retelecast" && prog.isRetelecast) ||
      (selectedCategory === "air" && prog.isAirBulletin);

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", label: "All Programmes" },
    { id: "agriculture", label: "Agriculture" },
    { id: "health", label: "Health & Wellness" },
    { id: "youth", label: "Students & Youth" },
    { id: "culture", label: "Yakshagana & Culture" },
    { id: "achievers", label: "Achievers & Community" },
    { id: "retelecast", label: "Re-telecasts" },
  ];

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Official Fixed Broadcast Timetable</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Daily Programme <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Schedule</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Broadcasting 6 hours of community-centered radio daily across Moodubidire Taluk on 88.4 MHz. Timing calculated in Asia/Kolkata (IST).
          </p>
        </div>

        {/* Schedule Summary Figures (As supplied in Station Summary) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {SCHEDULE_METRICS.map((metric, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 text-center space-y-1 hover:border-amber-500/30 transition-colors"
            >
              <span className="text-[11px] font-mono uppercase text-zinc-400 block font-medium">
                {metric.label}
              </span>
              <span className="text-lg sm:text-xl font-bold text-white block">
                {metric.value}
              </span>
              <span className="text-[10px] text-amber-400/90 font-mono block">
                {metric.note}
              </span>
            </div>
          ))}
        </div>

        {/* Filter and Slot Tab Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Morning & Evening Slot Tabs */}
          <div className="flex items-center p-1.5 rounded-2xl bg-zinc-900 border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setActiveTab("morning")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                activeTab === "morning"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Morning Slot (6:00 AM – 9:00 AM)</span>
            </button>

            <button
              onClick={() => setActiveTab("evening")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                activeTab === "evening"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Evening Slot (5:30 PM – 8:30 PM)</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programmes, guests..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-white text-neutral-950 shadow-sm"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programme Timeline Cards */}
        <div className="space-y-4">
          {filteredProgrammes.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-2xl bg-zinc-900/30 border border-white/5 text-zinc-400">
              No programmes match your filter. Try clearing your search.
            </div>
          ) : (
            filteredProgrammes.map((prog) => {
              const isCurrentlyOnAir = currentShow?.id === prog.id;

              return (
                <div
                  key={prog.id}
                  onClick={() => setSelectedProgramme(prog)}
                  className={`group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isCurrentlyOnAir
                      ? "bg-orange-950/20 border-orange-500/60 shadow-lg shadow-orange-500/10 ring-1 ring-orange-500/30"
                      : "bg-zinc-900/60 hover:bg-zinc-900/90 border-white/10 hover:border-amber-500/30"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    
                    {/* Time Slot & Badges */}
                    <div className="flex flex-wrap items-center gap-3 lg:w-72 flex-shrink-0">
                      <div className="flex items-center gap-2 text-white font-mono font-bold text-sm sm:text-base">
                        <Clock className="w-4 h-4 text-amber-400" />
                        <span>{prog.timeSlot}</span>
                      </div>

                      {isCurrentlyOnAir && (
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-mono text-[10px] font-bold uppercase tracking-wider border border-red-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                          ON AIR NOW
                        </span>
                      )}

                      {prog.isRetelecast && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-semibold border border-blue-500/20">
                          <Repeat className="w-3 h-3" /> Re-telecast
                        </span>
                      )}

                      {prog.isAirBulletin && (
                        <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-mono text-[10px] font-semibold border border-purple-500/20">
                          AIR Relay
                        </span>
                      )}
                    </div>

                    {/* Programme Title & Brief Description */}
                    <div className="flex-1 space-y-1">
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {prog.title}
                      </h4>
                      <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {prog.content}
                      </p>
                    </div>

                    {/* Personnel Details */}
                    <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-2 lg:w-64 text-xs text-zinc-400 border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-zinc-500">Duration:</span>
                        <span className="text-amber-400 font-mono font-semibold">{prog.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate max-w-full">
                        <span className="text-zinc-500">In-Charge:</span>
                        <span className="text-zinc-200 truncate">{prog.programmeInCharge}</span>
                      </div>
                      {prog.resourcePerson !== "Not specified" && (
                        <div className="flex items-center gap-1.5 truncate max-w-full">
                          <span className="text-zinc-500">Guest:</span>
                          <span className="text-emerald-400 truncate">{prog.resourcePerson}</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Programme Detail Dialog Modal */}
      {selectedProgramme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider block">
                  {selectedProgramme.timeSlot} • {selectedProgramme.duration}
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-bold">
                  {selectedProgramme.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProgramme(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 space-y-3 text-sm">
              <p className="text-zinc-200 leading-relaxed">
                {selectedProgramme.content}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
                <div>
                  <span className="text-zinc-500 block mb-0.5">Resource Person / Guest:</span>
                  <span className="text-white font-medium block">{selectedProgramme.resourcePerson}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-0.5">Programme In-Charge:</span>
                  <span className="text-white font-medium block">{selectedProgramme.programmeInCharge}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 pt-2">
              <span>Slot: {selectedProgramme.slotType.toUpperCase()} (IST)</span>
              <span>Radio Alva&apos;s 88.4 FM</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
