"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Radio, 
  Phone, 
  Mail, 
  MessageSquare, 
  Globe2, 
  Smartphone, 
  Heart, 
  Clock, 
  MapPin, 
  ArrowUp,
  Volume2
} from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { STATION_CONFIG } from "@/data/stationConfig";
import { useAudio } from "@/context/AudioContext";
import { OpenRadioAppButton } from "./AppRedirectionSection";

export default function Footer() {
  const { togglePlay, isPlaying } = useAudio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#FAF7F2] text-slate-300 overflow-hidden pb-24 md:pb-16 pt-8">
      {/* Curved Top Shape Transition from Cream to Deep Navy */}
      <div className="w-full overflow-hidden leading-none select-none">
        <svg
          className="relative block w-full h-12 sm:h-16 lg:h-20 text-[#0F2C59]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Smooth organic curve arching upwards */}
          <path
            d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Main Footer Body in Royal Navy & Cream */}
      <div className="bg-[#0F2C59] pt-8 sm:pt-12 pb-8 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            
            {/* Column 1: Dual Brand Identity & Taglines (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {/* Official Radio Alva's Logo in clean card */}
                <div className="relative h-14 px-3 py-1.5 bg-white/95 rounded-xl shadow-md flex items-center">
                  <Image
                    src="/radiologo-clean.png"
                    alt="Radio Alva's 88.4 FM Logo"
                    width={160}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>

                {/* Elegant Divider */}
                <div className="h-10 w-px bg-white/20" />

                {/* Official Alva's Education Foundation Logo */}
                <div className="relative h-14 px-3 py-1.5 bg-white/95 rounded-xl shadow-md flex items-center">
                  <Image
                    src="/alvas-org-logo.png"
                    alt="Alva's Education Foundation (R) Logo"
                    width={130}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Taglines & Description */}
              <div className="space-y-2">
                <div className="text-sm font-black tracking-widest text-white uppercase font-sans">
                  VOICE FOR A BETTER TOMORROW
                </div>
                <div className="text-xs font-semibold text-amber-300 font-serif italic tracking-wide">
                  &ldquo;Namma Moodubidire, Namma Dhwani&rdquo;
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-md pt-2">
                  Managed by Alva&apos;s Education Foundation (R), Radio Alva&apos;s 88.4 FM is the pioneer community radio station in Moodubidire Taluk, broadcasting in Kannada, Tulu, and regional languages to unite and empower our people.
                </p>
              </div>

              {/* Station badges in cream & gold */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-bold">
                  88.4 MHz FM
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200">
                  Moodubidire Taluk
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  6 Hrs Daily Airtime
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links (2 Cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-bold text-amber-300 uppercase tracking-widest font-mono">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="#hero" className="hover:text-amber-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-amber-300 transition-colors">
                    About Radio Alva&apos;s
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span>Programme Schedule</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono">
                      Daily
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-amber-300 transition-colors">
                    Studio &amp; Field Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#community-voice" className="hover:text-amber-300 transition-colors">
                    Community Voice
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-amber-300 transition-colors">
                    Station Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Listening & Digital (2 Cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-bold text-amber-300 uppercase tracking-widest font-mono">
                Listen &amp; Discover
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-left text-white font-medium"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isPlaying ? "Pause Stream" : "Listen Live Online"}</span>
                  </button>
                </li>
                <li>
                  <a
                    href={STATION_CONFIG.radioGarden}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-slate-200"
                  >
                    <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Radio Garden</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/91${STATION_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-slate-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Line</span>
                  </a>
                </li>
                <li>
                  <div className="pt-2">
                    <OpenRadioAppButton className="w-full justify-center text-[11px] py-2 px-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold" />
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Verified Contact & Social Channels (3 Cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs font-bold text-amber-300 uppercase tracking-widest font-mono">
                Direct Desk
              </h3>
              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${STATION_CONFIG.phone}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>+91 {STATION_CONFIG.phone}</span>
                </a>

                <a
                  href={`mailto:${STATION_CONFIG.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate" title={STATION_CONFIG.email}>
                    {STATION_CONFIG.email}
                  </span>
                </a>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Alva&apos;s Education Foundation, Vidyagiri, Moodubidire 574227</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <div className="text-[11px] font-mono uppercase text-slate-300 mb-2">
                  Follow Station
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href={STATION_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-pink-500/20 hover:text-pink-300 border border-white/15 flex items-center justify-center transition-all"
                    aria-label="Instagram @radio_alvas_88.4fm"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={STATION_CONFIG.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-500/20 hover:text-red-300 border border-white/15 flex items-center justify-center transition-all"
                    aria-label="YouTube @RadioAlvas884FM"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/91${STATION_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/15 flex items-center justify-center transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>

                  <a
                    href={STATION_CONFIG.radioGarden}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/15 flex items-center justify-center transition-all"
                    aria-label="Radio Garden"
                  >
                    <Globe2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Back to Top */}
          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-300 text-center sm:text-left">
              &copy; 2026 <span className="text-white font-semibold">Radio Alva&apos;s 88.4 FM</span>. Managed by{" "}
              <span className="text-white">Alva&apos;s Education Foundation (R)</span>, Moodubidire, Karnataka, India. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <span className="text-amber-300/90 text-[11px] font-mono">
                Frequency: 88.4 MHz FM
              </span>
              <button
                onClick={scrollToTop}
                type="button"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
