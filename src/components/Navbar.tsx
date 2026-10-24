"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Radio,
  Calendar,
  Image as ImageIcon,
  Users,
  MessageSquare,
  Play,
  Pause,
  Menu,
  X,
  Clock,
  Globe2,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { STATION_CONFIG } from "@/data/stationConfig";
import { OpenRadioAppButton } from "./AppRedirectionSection";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { isPlaying, isLoading, togglePlay, isBroadcastingHours, currentTimeIST } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["hero", "about", "schedule", "gallery", "community-voice", "contact"];
      const scrollPos = window.scrollY + 220;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About Us", href: "#about", icon: Radio },
    { name: "Programme Schedule", href: "#schedule", icon: Calendar },
    { name: "Studio Gallery", href: "#gallery", icon: ImageIcon },
    { name: "Community Voice", href: "#community-voice", icon: Users },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      
      {/* Top Utility Announcement Ribbon in Warm Cream & Slate */}
      <div className="bg-[#FAF4ED] border-b border-[#E8DFC9]/70 text-xs text-slate-700 py-1.5 px-4 sm:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Frequency & Live Broadcast Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isBroadcastingHours ? "bg-red-400" : "bg-amber-400"
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isBroadcastingHours ? "bg-red-600" : "bg-amber-500"
                }`}
              />
            </span>
            <span className="font-bold uppercase tracking-wider text-[11px] text-[#0F2C59] bg-[#E8DFC9] px-2 py-0.5 rounded-full">
              88.4 MHz FM
            </span>
            <span className="text-slate-400 hidden sm:inline">&bull;</span>
            <span className="text-[11px] text-slate-600 font-medium hidden sm:inline">
              Moodubidire Taluk&apos;s 1st Community Radio
            </span>
            <span className="text-slate-400 hidden md:inline">&bull;</span>
            <div className="hidden md:flex items-center gap-1 text-[11px] font-mono text-slate-600">
              <Clock className="w-3 h-3 text-[#EA580C]" />
              <span>IST: {currentTimeIST}</span>
            </div>
          </div>

          {/* Right: Station Tagline, Radio Garden & WhatsApp */}
          <div className="flex items-center gap-3 text-[11px]">
            <a
              href={STATION_CONFIG.radioGarden}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-slate-600 hover:text-[#0F2C59] transition-colors"
            >
              <Globe2 className="w-3 h-3 text-[#2563EB]" />
              <span>Radio Garden</span>
            </a>
            <span className="text-slate-400 hidden lg:inline">&bull;</span>
            <span className="italic text-amber-800/90 font-serif hidden sm:inline">
              &ldquo;Namma Moodubidire, Namma Dhwani&rdquo;
            </span>
            <span className="text-slate-400 hidden sm:inline">&bull;</span>
            <a
              href={`https://wa.me/91${STATION_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F2C59] hover:text-[#EA580C] font-semibold transition-colors flex items-center gap-1"
            >
              <span>WhatsApp:</span>
              <span className="font-mono">{STATION_CONFIG.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Island Navbar with Ambient Wave Background Art */}
      <div className="relative px-3 sm:px-6 py-2.5 sm:py-3">
        
        {/* Ambient Radio Wave & Transmission Mast Background Art */}
        <div className="absolute inset-x-0 -top-6 h-40 pointer-events-none overflow-hidden -z-10">
          {/* Ambient Warm Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F3] via-[#FAF4ED]/80 to-transparent" />

          {/* Top-Right Transmission Mast with Concentric Broadcast Circles & Dotted Halftone */}
          <div className="absolute -top-3 right-4 sm:right-16 lg:right-28 w-72 h-44 pointer-events-none opacity-85">
            <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Concentric broadcast wave rings */}
              <circle cx="180" cy="50" r="20" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.45" />
              <circle cx="180" cy="50" r="40" stroke="#F97316" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="3 3" />
              <circle cx="180" cy="50" r="65" stroke="#F97316" strokeWidth="1.2" strokeOpacity="0.28" />
              <circle cx="180" cy="50" r="95" stroke="#F97316" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
              <circle cx="180" cy="50" r="130" stroke="#F97316" strokeWidth="0.8" strokeOpacity="0.12" />

              {/* Halftone concentric arc dots */}
              {[25, 45, 65, 85].map((rad, ri) => (
                <g key={ri} opacity={0.35 - ri * 0.06}>
                  {Array.from({ length: 14 }).map((_, di) => {
                    const angle = (di * 12 - 40) * (Math.PI / 180);
                    const x = 180 + rad * Math.cos(angle);
                    const y = 50 + rad * Math.sin(angle);
                    return <circle key={di} cx={x} cy={y} r="1.3" fill="#F97316" />;
                  })}
                </g>
              ))}

              {/* Transmission Mast structure */}
              <circle cx="180" cy="50" r="4" fill="#EA580C" />
              <circle cx="180" cy="50" r="7" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.85" />
              
              {/* Tower lattice legs */}
              <path d="M180 57 L158 160 M180 57 L202 160" stroke="#EA580C" strokeWidth="2" strokeOpacity="0.85" />
              {/* Horizontal braces */}
              <line x1="174" y1="80" x2="186" y2="80" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.75" />
              <line x1="170" y1="105" x2="190" y2="105" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.75" />
              <line x1="165" y1="130" x2="195" y2="130" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.75" />
              <line x1="159" y1="155" x2="201" y2="155" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.75" />
              {/* Cross diagonals */}
              <line x1="174" y1="80" x2="190" y2="105" stroke="#EA580C" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="186" y1="80" x2="170" y2="105" stroke="#EA580C" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="170" y1="105" x2="195" y2="130" stroke="#EA580C" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="190" y1="105" x2="165" y2="130" stroke="#EA580C" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="165" y1="130" x2="201" y2="155" stroke="#EA580C" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="195" y1="130" x2="159" y2="155" stroke="#EA580C" strokeWidth="1.2" strokeOpacity="0.5" />
            </svg>
          </div>

          {/* Flowing Soundwave Curves & Equalizer Bars Skyline */}
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full opacity-65">
            <path
              d="M0 60 Q 150 20, 300 60 T 600 60 T 900 40 T 1200 60"
              fill="none"
              stroke="#FDBA74"
              strokeWidth="2"
              strokeOpacity="0.7"
            />
            <path
              d="M0 70 Q 200 95, 400 65 T 800 75 T 1200 50"
              fill="none"
              stroke="#FB923C"
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
            {/* Undulating audio frequency bars */}
            {Array.from({ length: 55 }).map((_, i) => {
              const x = i * 22 + 10;
              const height = 14 + Math.sin(i * 0.35) * 12 + (i > 32 && i < 48 ? 16 : 0);
              return (
                <rect
                  key={i}
                  x={x}
                  y={105 - height}
                  width="3"
                  height={height}
                  rx="1.5"
                  fill="#FB923C"
                  fillOpacity={0.25 + (i % 3) * 0.08}
                />
              );
            })}
          </svg>
        </div>

        {/* Floating Pill Container */}
        <nav
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2.5 lg:gap-4 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border border-orange-100/90 shadow-[0_12px_40px_rgba(234,88,12,0.12)]"
              : "bg-white/92 backdrop-blur-lg border border-orange-100/80 shadow-[0_10px_35px_rgba(234,88,12,0.08)]"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Identity Area: First Alva's Logo, then Radio Logo (Large & Visible) */}
          <Link href="#hero" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            {/* 1. Alva's Education Foundation Official Emblem */}
            <div className="relative h-10 sm:h-12 w-auto flex items-center">
              <Image
                src="/alvas-org-logo.png"
                alt="Alva's Education Foundation Emblem"
                width={100}
                height={48}
                priority
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>

            {/* Subtle Divider */}
            <div className="h-7 sm:h-8 w-px bg-slate-200/90 hidden xs:block" />

            {/* 2. Radio Alva's 88.4 FM Official Logo (Large & Visible) */}
            <div className="relative h-11 sm:h-13 lg:h-14 w-28 sm:w-36 lg:w-44 flex items-center justify-center overflow-hidden">
              <div className="relative w-44 sm:w-56 lg:w-64 h-44 sm:h-56 lg:h-38 shrink-0 flex items-center justify-center">
                <Image
                  src="/radiologo.png"
                  alt="Radio Alva's 88.4 FM Logo"
                  fill
                  priority
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          </Link>

          {/* Thin Vertical Divider */}
          <div className="h-8 w-px bg-slate-200/90 mx-1 hidden lg:block" />

          {/* Desktop Navigation Links with Icons Above Labels */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`flex flex-col items-center justify-center transition-all duration-200 ${
                    isActive
                      ? "px-3.5 py-1.5 rounded-2xl bg-[#FFF4ED] border border-[#FED7AA]/60 shadow-xs"
                      : "px-2.5 xl:px-3 py-1.5 rounded-xl hover:bg-slate-50 group"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive
                        ? "text-[#EA580C]"
                        : "text-slate-700 group-hover:text-[#EA580C] group-hover:scale-110"
                    }`}
                  />
                  <span
                    className={`text-[10px] xl:text-[11px] font-semibold leading-tight whitespace-nowrap mt-0.5 transition-colors ${
                      isActive
                        ? "font-bold text-[#EA580C]"
                        : "text-slate-700 group-hover:text-[#EA580C]"
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] mt-0.5" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Thin Vertical Divider */}
          <div className="h-8 w-px bg-slate-200/90 mx-1 hidden lg:block" />

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Open Radio App Button */}
            <OpenRadioAppButton className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-slate-300 text-[11px] font-bold py-2 sm:py-2.5 px-3.5 sm:px-4 shadow-xs" />

            {/* Listen Live Button with Circular Play Badge and Animated Equalizer */}
            <button
              onClick={togglePlay}
              type="button"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#FF5E14] via-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_6px_22px_rgba(234,88,12,0.42)] hover:scale-105 active:scale-95 cursor-pointer group"
              aria-label={isPlaying ? "Pause Radio Broadcast" : "Listen Live Online"}
            >
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0 group-hover:rotate-6 transition-transform">
                {isLoading ? (
                  <span className="inline-block w-3 h-3 border-2 border-[#EA580C] border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-3 h-3 fill-[#EA580C] text-[#EA580C]" />
                ) : (
                  <Play className="w-3 h-3 fill-[#EA580C] text-[#EA580C] ml-0.5" />
                )}
              </span>
              <span>{isPlaying ? "ON AIR" : "LISTEN LIVE"}</span>

              {/* Animated Waveform Equalizer */}
              <div className="flex items-end gap-0.5 h-3.5 pl-0.5">
                <span
                  className={`w-0.5 rounded-full bg-white transition-all ${
                    isPlaying ? "h-3 animate-[soundwave_0.8s_ease-in-out_infinite]" : "h-1.5"
                  }`}
                />
                <span
                  className={`w-0.5 rounded-full bg-white transition-all ${
                    isPlaying ? "h-3.5 animate-[soundwave_1.1s_ease-in-out_infinite]" : "h-3"
                  }`}
                />
                <span
                  className={`w-0.5 rounded-full bg-white transition-all ${
                    isPlaying ? "h-2.5 animate-[soundwave_0.6s_ease-in-out_infinite]" : "h-2"
                  }`}
                />
                <span
                  className={`w-0.5 rounded-full bg-white transition-all ${
                    isPlaying ? "h-3 animate-[soundwave_0.9s_ease-in-out_infinite]" : "h-1.5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu & Quick Listen Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={togglePlay}
              type="button"
              className="p-2 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white shadow-md active:scale-95"
              aria-label="Listen Live"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-full bg-[#FAF4ED] hover:bg-slate-200 text-slate-800 transition-colors border border-slate-300/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] mx-4 p-5 bg-white/98 backdrop-blur-2xl rounded-3xl border border-[#E5DAC6] shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Image
                src="/alvas-org-logo.png"
                alt="Alva's Logo"
                width={70}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <div className="h-6 w-px bg-slate-300" />
              <Image
                src="/radiologo.png"
                alt="Radio Alva's Logo"
                width={90}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="text-[11px] font-mono text-slate-500">{currentTimeIST} IST</span>
          </div>

          <div className="py-3 space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#FFF4ED] text-[#EA580C] font-bold"
                      : "text-slate-800 hover:bg-[#FAF7F2] hover:text-[#0F2C59]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#EA580C]" : "text-slate-500"}`} />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <OpenRadioAppButton className="w-full justify-center py-2.5 bg-white text-slate-800 border border-slate-300" />
            <a
              href={`tel:${STATION_CONFIG.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FAF4ED] text-slate-700 font-semibold text-xs transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#EA580C]" />
              <span>Call Station Line: {STATION_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
