"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Smartphone, 
  ExternalLink, 
  Radio, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  Share2, 
  X,
  Apple,
  Play
} from "lucide-react";
import { STATION_CONFIG } from "@/data/stationConfig";

interface AppRedirectionProps {
  variant?: "section" | "button" | "card";
  className?: string;
}

export function OpenRadioAppButton({ className = "" }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If a generic app URL is configured, open it
    if (STATION_CONFIG.appUrl) {
      window.open(STATION_CONFIG.appUrl, "_blank", "noopener,noreferrer");
      return;
    }
    // If Android or iOS app is configured and on corresponding device
    const isAndroid = typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
    const isIOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isAndroid && STATION_CONFIG.androidAppUrl) {
      window.open(STATION_CONFIG.androidAppUrl, "_blank", "noopener,noreferrer");
      return;
    }
    if (isIOS && STATION_CONFIG.iosAppUrl) {
      window.open(STATION_CONFIG.iosAppUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // Otherwise show configuration notice modal (never broken link or fabricated app store)
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer ${className}`}
        aria-label="Open Radio Alva's 88.4 FM Application"
      >
        <Smartphone className="w-4 h-4 shrink-0" />
        <span>OPEN RADIO APP</span>
      </button>

      {showModal && (
        <AppNoticeModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

function AppNoticeModal({ onClose }: { onClose: () => void }) {
  const hasAndroid = Boolean(STATION_CONFIG.androidAppUrl);
  const hasIOS = Boolean(STATION_CONFIG.iosAppUrl);
  const hasAny = Boolean(STATION_CONFIG.appUrl || hasAndroid || hasIOS);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#131722] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black font-black text-lg shadow-lg shadow-amber-500/30">
            88.4
          </div>
          <div>
            <h3 className="text-lg font-bold">Radio Alva&apos;s Mobile App</h3>
            <p className="text-xs text-amber-400 font-mono">Alva&apos;s Education Foundation (R)</p>
          </div>
        </div>

        {hasAny ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Choose your platform below to access the official Radio Alva&apos;s application:
            </p>
            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {STATION_CONFIG.androidAppUrl && (
                <a
                  href={STATION_CONFIG.androidAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                    Android App (Google Play)
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              )}
              {STATION_CONFIG.iosAppUrl && (
                <a
                  href={STATION_CONFIG.iosAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Apple className="w-4 h-4 text-slate-200" />
                    iOS App (App Store)
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              )}
              {STATION_CONFIG.appUrl && (
                <a
                  href={STATION_CONFIG.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-amber-400" />
                    Web Application Portal
                  </span>
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-200 leading-relaxed">
                <p className="font-semibold text-amber-300 mb-1">Application Availability Notice</p>
                The dedicated standalone mobile app for Radio Alva&apos;s 88.4 FM is in final release preparation with the institutional tech team.
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              In the meantime, this official website is <strong>fully responsive</strong> and designed to act as a Progressive Web App (PWA). You can tap <em>&ldquo;Add to Home Screen&rdquo;</em> in your mobile browser for an app-like listening experience.
            </p>

            <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-400 font-mono">
              Over-the-air: 88.4 MHz FM in Moodubidire Taluk
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Continue on Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AppRedirectionSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 bg-[#090d14] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950/30 via-[#151a26] to-[#0f141f] border border-amber-500/20 relative overflow-hidden">
          {/* Decorative ambient radial */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                <Smartphone className="w-3.5 h-3.5" />
                MOBILE CONNECTIVITY
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                TUNE IN ON YOUR SMARTPHONE &bull;{" "}
                <span className="text-amber-400">RADIO ALVA&apos;S</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-light">
                Carry the voice of Moodubidire wherever you travel. Access daily agricultural alerts, student programs, Tulu and Kannada heritage broadcasts, and government welfare awareness on the go.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <OpenRadioAppButton className="py-3 px-6 text-sm" />
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Radio className="w-4 h-4 text-amber-400" />
                  View 6-Hour Daily Schedule
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative p-6 rounded-2xl bg-black/50 border border-white/10 text-center max-w-xs w-full backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-2xl mx-auto mb-4 shadow-lg shadow-amber-500/20">
                  88.4
                </div>
                <h4 className="text-base font-bold text-white">Radio Alva&apos;s Mobile</h4>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  Android &bull; iOS &bull; Progressive Web App
                </p>
                <div className="text-[11px] font-mono text-amber-400/90 bg-amber-500/10 py-1.5 px-3 rounded-lg border border-amber-500/20">
                  Voice For A Better Tomorrow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && <AppNoticeModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
