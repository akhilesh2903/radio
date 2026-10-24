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

export function OpenRadioAppButton({ className = "" }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (STATION_CONFIG.appUrl) {
      window.open(STATION_CONFIG.appUrl, "_blank", "noopener,noreferrer");
      return;
    }
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

    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer ${className}`}
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white border border-[#E5DAC6] rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F2C59] to-[#1E3A8A] flex items-center justify-center text-white font-black text-lg shadow-md">
            88.4
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0F2C59]">Radio Alva&apos;s Mobile App</h3>
            <p className="text-xs text-[#EA580C] font-mono">Alva&apos;s Education Foundation (R)</p>
          </div>
        </div>

        {hasAny ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Choose your platform below to access the official Radio Alva&apos;s application:
            </p>
            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {STATION_CONFIG.androidAppUrl && (
                <a
                  href={STATION_CONFIG.androidAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F5EFEB] hover:bg-white border border-[#E5DAC6] text-sm font-semibold transition-all"
                >
                  <span className="flex items-center gap-2 text-[#0F2C59]">
                    <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
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
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F5EFEB] hover:bg-white border border-[#E5DAC6] text-sm font-semibold transition-all"
                >
                  <span className="flex items-center gap-2 text-[#0F2C59]">
                    <Apple className="w-4 h-4 text-slate-800" />
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
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100/60 border border-amber-200 text-[#0F2C59] text-sm font-semibold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#EA580C]" />
                    Web Application Portal
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#EA580C]" />
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <p className="font-bold text-[#0F2C59] mb-1">Application Availability Notice</p>
                The dedicated standalone mobile app for Radio Alva&apos;s 88.4 FM is in final release preparation with the institutional tech team.
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              In the meantime, this official website is <strong>fully responsive</strong> and designed to act as a Progressive Web App (PWA). You can tap <em>&ldquo;Add to Home Screen&rdquo;</em> in your mobile browser for an app-like listening experience.
            </p>

            <div className="p-3 rounded-xl bg-[#F5EFEB] border border-[#E5DAC6] text-[11px] text-slate-600 font-mono">
              Over-the-air: 88.4 MHz FM across Moodubidire Taluk
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-full bg-[#0F2C59] hover:bg-[#1E3A8A] text-white font-bold text-xs tracking-wider uppercase transition-colors"
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
    <section className="py-16 bg-[#FAF7F2] border-t border-[#E5DAC6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0F2C59] via-[#153466] to-[#1E3A8A] text-white relative overflow-hidden shadow-xl border border-[#0F2C59]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                <Smartphone className="w-3.5 h-3.5" />
                MOBILE CONNECTIVITY
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                TUNE IN ON YOUR SMARTPHONE &bull;{" "}
                <span className="text-amber-400">RADIO ALVA&apos;S</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed font-light">
                Carry the voice of Moodubidire wherever you travel. Access daily agricultural alerts, student programs, Tulu and Kannada heritage broadcasts, and government welfare awareness on the go.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <OpenRadioAppButton className="py-3 px-6 text-sm bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white hover:from-[#D9480F] hover:to-[#EA580C]" />
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Radio className="w-4 h-4 text-amber-400" />
                  View 6-Hour Daily Schedule
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center max-w-xs w-full shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#F59E0B] flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-lg shadow-orange-500/30">
                  88.4
                </div>
                <h4 className="text-base font-bold text-white">Radio Alva&apos;s Mobile</h4>
                <p className="text-xs text-slate-300 mt-1 mb-4">
                  Android &bull; iOS &bull; Progressive Web App
                </p>
                <div className="text-[11px] font-mono text-amber-300 bg-black/30 py-1.5 px-3 rounded-lg border border-amber-400/30">
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
