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
    <footer className="bg-[#05080e] text-slate-400 border-t border-white/10 relative overflow-hidden pb-24 md:pb-16">
      {/* Visual audio wave frequency decorative line at the very top of footer */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent relative">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Dual Brand Identity & Taglines (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Official Radio Alva's Logo */}
              <div className="relative h-14 w-auto flex items-center">
                <Image
                  src="/radiologo.png"
                  alt="Radio Alva's 88.4 FM Logo"
                  width={180}
                  height={56}
                  className="h-12 w-auto object-contain drop-shadow"
                />
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-white/15" />

              {/* Official Alva's Education Foundation Logo */}
              <div className="relative h-14 w-auto flex items-center">
                <Image
                  src="/alvas-org-logo.png"
                  alt="Alva's Education Foundation (R) Logo"
                  width={140}
                  height={56}
                  className="h-12 w-auto object-contain brightness-95"
                />
              </div>
            </div>

            {/* Taglines & Description */}
            <div className="space-y-2">
              <div className="text-sm font-black tracking-widest text-white uppercase font-sans">
                VOICE FOR A BETTER TOMORROW
              </div>
              <div className="text-xs font-semibold text-amber-400 font-sans tracking-wide">
                Namma Moodubidire, Namma Dhwani
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md pt-2">
                Managed by Alva&apos;s Education Foundation (R), Radio Alva&apos;s 88.4 FM is the pioneer community radio station in Moodubidire Taluk, broadcasting in Kannada, Tulu, and regional languages to unite and empower our people.
              </p>
            </div>

            {/* Station badges */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300">
                88.4 MHz FM
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                Moodubidire Taluk
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                6 Hrs Daily Airtime
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-400 transition-colors">
                  About Radio Alva&apos;s
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Programme Schedule</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 font-mono">
                    Daily
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-amber-400 transition-colors">
                  Studio & Field Gallery
                </Link>
              </li>
              <li>
                <Link href="#community-voice" className="hover:text-amber-400 transition-colors">
                  Community Voice
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-400 transition-colors">
                  Station Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Listening & Digital (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Listen & Discover
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  type="button"
                  onClick={togglePlay}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left text-white font-medium"
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
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
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
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Line</span>
                </a>
              </li>
              <li>
                <div className="pt-2">
                  <OpenRadioAppButton className="w-full justify-center text-[11px] py-2 px-3" />
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Social Channels (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
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

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Alva&apos;s Education Foundation, Vidyagiri, Moodubidire 574227</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                Follow Station
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={STATION_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-500/20 hover:text-pink-400 border border-white/10 hover:border-pink-500/40 flex items-center justify-center transition-all"
                  aria-label="Instagram @radio_alvas_88.4fm"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={STATION_CONFIG.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 border border-white/10 hover:border-red-500/40 flex items-center justify-center transition-all"
                  aria-label="YouTube @RadioAlvas884FM"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/91${STATION_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>

                <a
                  href={STATION_CONFIG.radioGarden}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center transition-all"
                  aria-label="Radio Garden"
                >
                  <Globe2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            &copy; 2026 <span className="text-white font-semibold">Radio Alva&apos;s 88.4 FM</span>. Managed by{" "}
            <span className="text-white">Alva&apos;s Education Foundation (R)</span>, Moodubidire, Karnataka, India. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px] font-mono">
              Frequency: 88.4 MHz FM
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
