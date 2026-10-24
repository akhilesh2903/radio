"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mic2, 
  Send, 
  MessageSquare, 
  Sparkles, 
  HeartHandshake, 
  Users, 
  GraduationCap, 
  Wheat, 
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { STATION_CONFIG } from "@/data/stationConfig";

interface SuggestionCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  programmeMatch: string;
  defaultNote: string;
}

const CATEGORIES: SuggestionCategory[] = [
  {
    id: "agriculture",
    title: "Agricultural Story / Experience",
    subtitle: "Share organic farming techniques, local crops, or village farmer experiences.",
    icon: Wheat,
    programmeMatch: "Bennida Baduku (7:00 AM & 7:00 PM)",
    defaultNote: "Namaskara Radio Alva's, I would like to share an agricultural story/topic from our locality:",
  },
  {
    id: "achiever",
    title: "Nominate a Local Achiever",
    subtitle: "Recognize grassroots changemakers, artisans, social workers, or mentors.",
    icon: Users,
    programmeMatch: "Feature Programme (7:30 AM & 5:30 PM)",
    defaultNote: "Namaskara Radio Alva's, I want to nominate a local achiever for your Feature Programme:",
  },
  {
    id: "youth",
    title: "Student Talent & Campus Life",
    subtitle: "Youth essays, poetry, college initiatives, innovative projects, or music.",
    icon: GraduationCap,
    programmeMatch: "Students Corner (8:30 AM & 7:30 PM)",
    defaultNote: "Hello Radio Alva's, as a student from Moodubidire, I would like to contribute:",
  },
  {
    id: "culture",
    title: "Folk, Tulu & Heritage Lore",
    subtitle: "Paddanas, Yakshagana memories, regional proverbs, and vernacular traditions.",
    icon: Sparkles,
    programmeMatch: "Yakshagana (8:00 PM) & Culture Hours",
    defaultNote: "Solmelu Radio Alva's, I have a cultural/traditional story about our coastal heritage:",
  },
];

export default function CommunityVoiceSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("agriculture");
  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const activeCategory = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Build pre-filled WhatsApp message for verified station WhatsApp number
    const waText = encodeURIComponent(
      `*Radio Alva's 88.4 FM - Community Voice Submission*\n` +
      `------------------------------------\n` +
      `*Name:* ${name}\n` +
      `*Locality / Village:* ${locality || "Moodubidire"}\n` +
      `*Category:* ${activeCategory.title}\n` +
      `*Relevant Slot:* ${activeCategory.programmeMatch}\n\n` +
      `*Message / Idea:*\n${message}\n\n` +
      `_Sent via Radio Alva's Official Community Portal_`
    );

    const waUrl = `https://wa.me/91${STATION_CONFIG.whatsapp}?text=${waText}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="community-voice" className="relative py-24 bg-gradient-to-b from-[#0b0f17] via-[#111622] to-[#0c1018] text-white overflow-hidden border-t border-white/5">
      {/* Background visual accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Callout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Mic2 className="w-3.5 h-3.5 text-amber-400" />
            COMMUNITY PARTICIPATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
            YOUR VOICE. YOUR COMMUNITY. <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              YOUR RADIO.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Have a story, an idea or a message to share? Join Radio Alva&apos;s and help shape the conversations that matter to Moodubidire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Category Picker & Station Mission Context */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Select What You Want To Share
            </h3>

            <div className="space-y-3">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      if (!message || message.startsWith("Namaskara") || message.startsWith("Hello") || message.startsWith("Solmelu")) {
                        setMessage(cat.defaultNote);
                      }
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? "bg-amber-500/15 border-amber-500/50 shadow-lg shadow-amber-500/10"
                        : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                      isSelected ? "bg-amber-500 text-black font-bold" : "bg-white/10 text-slate-300"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-base font-semibold ${isSelected ? "text-white" : "text-slate-200"}`}>
                          {cat.title}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-black font-bold shrink-0">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {cat.subtitle}
                      </p>
                      <div className="mt-2 text-[11px] text-amber-400/90 font-mono">
                        Broadcast match: {cat.programmeMatch}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Authentic Studio Note Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 mt-6 flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Broadcast Policy:</span> Every submission is reviewed by our station coordinators (Archith Jain Samse & Shainitha R.S.) for upcoming morning and evening slots.
              </div>
            </div>
          </div>

          {/* Right: Interactive Submission Box with WhatsApp Integration */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black">
                    88.4
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Voice of Moodubidire Portal</h4>
                    <p className="text-xs text-slate-400">Direct transmission to Station Desk &bull; Moodubidire</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Desk Active
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You for Connecting!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message draft has been routed to Radio Alva&apos;s WhatsApp broadcast desk at <strong>+91 {STATION_CONFIG.whatsapp}</strong>. Our programming team will review it for upcoming shows.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setMessage("");
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                    >
                      Submit Another Topic
                    </button>
                    <a
                      href="#contact"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black text-xs font-bold transition-all shadow-md"
                    >
                      View All Contact Options
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Bhat, Ashwitha..."
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Locality / Village / College
                      </label>
                      <input
                        type="text"
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)}
                        placeholder="e.g. Vidyagiri, Moodubidire, Belvai..."
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex justify-between items-center">
                      <span>Your Story, Idea or Announcement <span className="text-amber-400">*</span></span>
                      <span className="text-[11px] text-slate-400">Kannada, Tulu, or English welcome</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={activeCategory.defaultNote}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between gap-3 text-xs text-amber-300">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 shrink-0 text-amber-400" />
                      Submissions open directly in WhatsApp to station phone: <strong>{STATION_CONFIG.whatsapp}</strong>
                    </span>
                    <span className="hidden sm:inline font-mono text-[10px] bg-amber-400/20 px-2 py-0.5 rounded">
                      Instant Delivery
                    </span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/25 active:scale-[0.99] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      SEND TO RADIO ALVA&apos;S DESK
                    </button>
                    <a
                      href={`tel:${STATION_CONFIG.phone}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors shrink-0"
                    >
                      <PhoneCall className="w-4 h-4 text-amber-400" />
                      Call {STATION_CONFIG.phone}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
