"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Radio,
  Play,
  Pause,
  Menu,
  X,
  Smartphone,
  Globe2,
  Volume2,
  Clock,
  Sparkles,
  PhoneCall,
  Calendar,
  Image as ImageIcon,
  Mic2,
  ChevronRight
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { STATION_CONFIG } from "@/data/stationConfig";
import { OpenRadioAppButton } from "./AppRedirectionSection";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPlaying, isLoading, togglePlay, status, isBroadcastingHours, currentTimeIST } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Programme Schedule", href: "#schedule", highlight: true },
    { name: "Studio Gallery", href: "#gallery" },
    { name: "Community Voice", href: "#community-voice" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Announcement Ribbon in Warm Cream & Slate */}
      <div className="bg-[#F5EFEB] border-b border-[#E5DAC6] text-xs text-slate-700 py-1.5 px-4 sm:px-8 transition-colors">
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
              <Clock className="w-3 h-3 text-[#2563EB]" />
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
              className="text-[#0F2C59] hover:text-[#2563EB] font-semibold transition-colors flex items-center gap-1"
            >
              <span>WhatsApp:</span>
              <span className="font-mono">{STATION_CONFIG.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Unique Floating Island / Pill Navbar */}
      <div className="px-3 sm:px-6 py-2.5">
        <nav
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_36px_rgba(15,44,89,0.12)]"
              : "bg-white/85 backdrop-blur-md border border-[#E8DFC9]/90 shadow-[0_8px_24px_rgba(15,44,89,0.06)]"
          }`}
          aria-label="Main Navigation"
        >
          {/* Dual Institutional Branding */}
          <Link href="#hero" className="flex items-center gap-3 sm:gap-4 shrink-0 group">
            {/* Radio Alva's Logo */}
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <Image
                src="/radiologo.png"
                alt="Radio Alva's 88.4 FM Logo"
                width={140}
                height={48}
                priority
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>

            {/* Elegant Divider */}
            <div className="h-8 w-px bg-slate-300/80" />

            {/* Alva's Education Foundation Logo */}
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <Image
                src="/alvas-org-logo.png"
                alt="Alva's Education Foundation Emblem"
                width={110}
                height={48}
                priority
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Pill Style) */}
          <div className="hidden lg:flex items-center gap-1 bg-[#F5EFEB]/70 p-1.5 rounded-full border border-[#E5DAC6]/60">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  link.highlight
                    ? "text-[#0F2C59] hover:bg-white hover:shadow-sm flex items-center gap-1.5"
                    : "text-slate-700 hover:text-[#0F2C59] hover:bg-white/80"
                }`}
              >
                {link.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                )}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Open Radio App Button */}
            <OpenRadioAppButton className="text-[11px] py-2 px-3.5 bg-gradient-to-r from-[#0F2C59] to-[#1E3A8A] text-white hover:from-[#1E3A8A] hover:to-[#2563EB] border border-[#0F2C59]/20 shadow-sm" />

            {/* Listen Live Button with Equalizer Bars */}
            <button
              onClick={togglePlay}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#D9480F] hover:to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-500/25 active:scale-95 cursor-pointer"
              aria-label={isPlaying ? "Pause Radio Broadcast" : "Listen Live Online"}
            >
              {isLoading ? (
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
              <span>{isPlaying ? "ON AIR" : "LISTEN LIVE"}</span>

              {/* Mini Animated Waveform Equalizer */}
              <div className="flex items-end gap-0.5 h-3.5 pl-0.5">
                <span
                  className={`w-0.5 bg-white rounded-full transition-all ${
                    isPlaying ? "h-3 animate-[soundwave_0.8s_ease-in-out_infinite]" : "h-1"
                  }`}
                />
                <span
                  className={`w-0.5 bg-white rounded-full transition-all ${
                    isPlaying ? "h-3.5 animate-[soundwave_1.1s_ease-in-out_infinite]" : "h-2"
                  }`}
                />
                <span
                  className={`w-0.5 bg-white rounded-full transition-all ${
                    isPlaying ? "h-2 animate-[soundwave_0.6s_ease-in-out_infinite]" : "h-1"
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
              className="p-2.5 rounded-full bg-[#F5EFEB] hover:bg-slate-200 text-slate-800 transition-colors border border-slate-300/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] mx-4 p-6 bg-white/98 backdrop-blur-2xl rounded-3xl border border-[#E5DAC6] shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-bold text-[#0F2C59] uppercase tracking-wider">
                Radio Alva&apos;s 88.4 FM
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">{currentTimeIST} IST</span>
          </div>

          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF7F2] text-sm font-semibold text-slate-800 hover:text-[#0F2C59] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <OpenRadioAppButton className="w-full justify-center py-3 bg-[#0F2C59] text-white" />
            <a
              href={`tel:${STATION_CONFIG.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F5EFEB] text-slate-700 font-semibold text-xs transition-colors"
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
