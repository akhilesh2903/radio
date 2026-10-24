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
  X
} from "lucide-react";
import {
  MORNING_SCHEDULE,
  EVENING_SCHEDULE,
  SCHEDULE_METRICS,
  Programme,
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
    <section id="schedule" className="py-20 lg:py-28 bg-[#F5EFEB] text-slate-800 border-t border-[#E5DAC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C59]/10 border border-[#0F2C59]/20 text-[#0F2C59] font-mono text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Official Station Timetable</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0F2C59] tracking-tight">
            Daily Programme <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#F59E0B]">Schedule</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Broadcasting 6 hours of community-centered radio daily across Moodubidire Taluk on 88.4 MHz. Timing calculated in Asia/Kolkata (IST).
          </p>
        </div>

        {/* Schedule Summary Cards (Exact Figures from Station Brief) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {SCHEDULE_METRICS.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E5DAC6] text-center shadow-xs">
              <div className="text-[11px] font-mono uppercase text-slate-500">{metric.label}</div>
              <div className="text-xl sm:text-2xl font-black text-[#0F2C59] mt-1">{metric.value}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{metric.note}</div>
            </div>
          ))}
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Morning vs Evening Tab Buttons */}
          <div className="flex p-1.5 rounded-full bg-white border border-[#E5DAC6] shadow-sm max-w-md">
            <button
              onClick={() => setActiveTab("morning")}
              type="button"
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-6 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "morning"
                  ? "bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white shadow-md"
                  : "text-slate-600 hover:text-[#0F2C59]"
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Morning Slot (6:00 AM – 9:00 AM)</span>
            </button>

            <button
              onClick={() => setActiveTab("evening")}
              type="button"
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-6 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "evening"
                  ? "bg-gradient-to-r from-[#0F2C59] to-[#1E3A8A] text-white shadow-md"
                  : "text-slate-600 hover:text-[#0F2C59]"
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Evening Slot (5:30 PM – 8:30 PM)</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programmes, guests..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E5DAC6] text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-[#0F2C59] shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#0F2C59] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-[#0F2C59] border border-[#E5DAC6] hover:bg-[#FAF7F2]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programme Rows List */}
        <div className="space-y-3.5">
          {filteredProgrammes.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#E5DAC6] text-slate-500">
              No programmes match your search or filter. Try clearing your filters.
            </div>
          ) : (
            filteredProgrammes.map((prog) => {
              const isCurrentlyPlaying = currentShow?.title === prog.title;

              return (
                <div
                  key={prog.id}
                  onClick={() => setSelectedProgramme(prog)}
                  className={`group p-5 sm:p-6 rounded-2xl transition-all cursor-pointer border ${
                    isCurrentlyPlaying
                      ? "bg-amber-500/10 border-amber-400/80 shadow-md ring-2 ring-amber-400/40"
                      : "bg-white hover:bg-[#FAF7F2] border-[#E5DAC6] hover:border-[#0F2C59]/40 shadow-xs"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Time & Duration Pill */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 ${
                        isCurrentlyPlaying
                          ? "bg-[#EA580C] text-white"
                          : "bg-[#F5EFEB] text-[#0F2C59] border border-[#E5DAC6]"
                      }`}>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{prog.timeSlot}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500">
                        {prog.duration}
                      </span>
                      {isCurrentlyPlaying && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600 text-white font-mono text-[10px] font-bold uppercase animate-pulse">
                          ON AIR NOW
                        </span>
                      )}
                    </div>

                    {/* Programme Title & Description */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-[#0F2C59] group-hover:text-[#EA580C] transition-colors flex items-center gap-2">
                        <span>{prog.title}</span>
                        {prog.isRetelecast && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                            Re-telecast
                          </span>
                        )}
                        {prog.isAirBulletin && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                            AIR
                          </span>
                        )}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-1 mt-1">
                        {prog.content}
                      </p>
                    </div>

                    {/* Host & In-Charge Info */}
                    <div className="flex items-center justify-between lg:justify-end gap-4 text-xs font-mono text-slate-500 shrink-0 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-200">
                      <div>
                        <span className="text-slate-400">Guest: </span>
                        <span className="text-[#0F2C59] font-medium">{prog.resourcePerson}</span>
                      </div>
                      <span className="hidden sm:inline text-slate-300">|</span>
                      <div>
                        <span className="text-slate-400">In-Charge: </span>
                        <span className="text-[#0F2C59] font-medium">{prog.programmeInCharge}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Programme Detail Modal */}
      {selectedProgramme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#E5DAC6] p-6 sm:p-8 shadow-2xl text-slate-800">
            <button
              onClick={() => setSelectedProgramme(null)}
              type="button"
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-[#EA580C] font-bold uppercase tracking-wider">
                {selectedProgramme.timeSlot} &bull; {selectedProgramme.duration}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F2C59] mt-1">
                {selectedProgramme.title}
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#E5DAC6] mb-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedProgramme.content}
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600 mb-6 font-mono">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-400 uppercase">Resource Person / Guest:</span>
                <span className="font-semibold text-[#0F2C59]">{selectedProgramme.resourcePerson}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-400 uppercase">Programme In-Charge:</span>
                <span className="font-semibold text-[#0F2C59]">{selectedProgramme.programmeInCharge}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400 uppercase">Broadcast Slot:</span>
                <span className="font-semibold text-[#EA580C]">{selectedProgramme.slotType.toUpperCase()} (IST)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedProgramme(null)}
              className="w-full py-3 rounded-full bg-[#0F2C59] hover:bg-[#1E3A8A] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
