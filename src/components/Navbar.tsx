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
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { STATION_CONFIG } from "@/data/stationConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPlaying, isLoading, togglePlay, status, isBroadcastingHours, currentTimeIST } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    { name: "Programme Schedule", href: "#schedule" },
    { name: "Studio Gallery", href: "#gallery" },
    { name: "Community Voice", href: "#voice" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top broadcasting alert strip */}
      <div className="bg-gradient-to-r from-neutral-950 via-zinc-900 to-neutral-950 border-b border-white/5 text-xs text-zinc-300 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isBroadcastingHours ? "bg-red-400" : "bg-amber-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isBroadcastingHours ? "bg-red-500" : "bg-amber-500"}`}></span>
            </span>
            <span className="font-semibold uppercase tracking-wider text-[11px] text-amber-400">
              88.4 MHz FM
            </span>
            <span className="text-zinc-500 hidden sm:inline">•</span>
            <span className="text-zinc-400 hidden sm:inline">
              Moodubidire Taluk&apos;s 1st Community Radio
            </span>
            <span className="text-zinc-500 hidden md:inline">•</span>
            <span className="text-zinc-400 font-mono hidden md:inline flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-500 inline" /> IST: {currentTimeIST || "Live"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://radio.garden/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-zinc-400"
              title="Explore Radio Garden"
            >
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Radio Garden</span>
            </a>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400 italic font-medium hidden lg:inline">
              &quot;Namma Moodubidire, Namma Dhwani&quot;
            </span>
            <span className="text-zinc-700 hidden lg:inline">|</span>
            <a
              href={`https://wa.me/91${STATION_CONFIG.whatsapp}?text=Hello%20Radio%20Alva%27s%2088.4%20FM`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              WhatsApp: {STATION_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0c10]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-2.5"
            : "bg-gradient-to-b from-[#0b0c10]/90 to-transparent py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Dual Institutional Logos */}
          <Link href="#hero" className="flex items-center gap-3 sm:gap-4 group">
            {/* Radio Alva's Logo */}
            <div className="relative h-11 w-28 sm:h-13 sm:w-34 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/radiologo.png"
                alt="Radio Alva's 88.4 FM Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Separator Line */}
            <div className="h-8 w-[1px] bg-white/20 hidden sm:block"></div>

            {/* Alva's Foundation Logo */}
            <div className="relative h-10 w-24 sm:h-12 sm:w-28 transition-transform duration-200 group-hover:scale-105 hidden sm:block">
              <Image
                src="/alvas-org-logo.png"
                alt="Alva's Education Foundation (R) Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* App Redirection Link / Button */}
            <a
              href="#app-download"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all duration-200"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>OPEN APP</span>
            </a>

            {/* Listen Live CTA Button */}
            <button
              onClick={togglePlay}
              className={`relative group overflow-hidden flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all duration-300 ${
                isPlaying
                  ? "bg-red-600 hover:bg-red-700 text-white shadow-red-900/40"
                  : "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-neutral-950 font-extrabold shadow-amber-500/25"
              }`}
              aria-label="Toggle Live Radio Stream"
            >
              {/* Animated Live Indicator Beacon */}
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isPlaying ? "bg-white" : "bg-neutral-950"
                  }`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    isPlaying ? "bg-white" : "bg-neutral-950"
                  }`}
                ></span>
              </span>

              {isLoading ? (
                <span className="flex items-center gap-1.5">
                  <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full" />
                  <span>TUNING...</span>
                </span>
              ) : isPlaying ? (
                <span className="flex items-center gap-1.5">
                  <Pause className="w-4 h-4 fill-current" />
                  <span>PAUSE LIVE</span>
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Play className="w-4 h-4 fill-current" />
                  <span>LISTEN LIVE</span>
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            {/* Alva's Logo in mobile drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="relative h-9 w-24">
                <Image
                  src="/alvas-org-logo.png"
                  alt="Alva's Education Foundation (R) Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-amber-400 block font-semibold">88.4 MHz FM</span>
                <span className="text-[10px] text-zinc-400 block">Taluk&apos;s 1st Community Radio</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="#app-download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-colors"
              >
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>OPEN RADIO APP</span>
              </a>

              <a
                href="https://radio.garden/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-semibold text-sm border border-emerald-500/30 transition-colors"
              >
                <Globe2 className="w-4 h-4 text-emerald-400" />
                <span>EXPLORE ON RADIO GARDEN</span>
              </a>

              <div className="text-center text-xs text-zinc-500 pt-2 font-mono">
                Managed by Alva&apos;s Education Foundation (R)
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
