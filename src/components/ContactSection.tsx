"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send, 
  Radio, 
  ExternalLink, 
  CheckCircle2,
  Share2,
  Building2
} from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { STATION_CONFIG } from "@/data/stationConfig";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "General Feedback / Community Inquiry",
    message: ""
  });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Radio Alva's 88.4 FM] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Contact/Phone: ${formData.contact}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Sent via Radio Alva's Official Website`
    );
    window.location.href = `mailto:${STATION_CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#080c13] text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Radio className="w-3.5 h-3.5" />
            STATION CONTACT & DESK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            CONNECT WITH <span className="text-amber-400">RADIO ALVA&apos;S</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            We are here for the people of Moodubidire and beyond. Reach out to our broadcasting team, suggest a programme topic, or visit our studio in Vidyagiri.
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Phone Broadcast Line</h3>
              <p className="text-lg font-bold text-white mt-1">{STATION_CONFIG.phone}</p>
              <p className="text-xs text-slate-400 mt-1">Direct call line for studio discussions & inquiries.</p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex gap-2">
              <a
                href={`tel:${STATION_CONFIG.phone}`}
                className="flex-1 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold text-center transition-colors"
              >
                Click to Call
              </a>
              <button
                type="button"
                onClick={() => handleCopy(STATION_CONFIG.phone, "phone")}
                className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors"
                title="Copy phone"
              >
                {copied === "phone" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">WhatsApp Station Desk</h3>
              <p className="text-lg font-bold text-white mt-1">+91 {STATION_CONFIG.whatsapp}</p>
              <p className="text-xs text-slate-400 mt-1">Send voice notes, listener feedback, or greetings.</p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex gap-2">
              <a
                href={`https://wa.me/91${STATION_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold text-center transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp Desk</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy(STATION_CONFIG.whatsapp, "wa")}
                className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors"
                title="Copy WhatsApp"
              >
                {copied === "wa" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Official Email</h3>
              <p className="text-sm font-bold text-white mt-1 truncate" title={STATION_CONFIG.email}>
                {STATION_CONFIG.email}
              </p>
              <p className="text-xs text-slate-400 mt-1">Institutional correspondence, proposals & notices.</p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex gap-2">
              <a
                href={`mailto:${STATION_CONFIG.email}`}
                className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold text-center transition-colors"
              >
                Compose Email
              </a>
              <button
                type="button"
                onClick={() => handleCopy(STATION_CONFIG.email, "email")}
                className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors"
                title="Copy email"
              >
                {copied === "email" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Studio Location</h3>
              <p className="text-sm font-bold text-white mt-1">Alva&apos;s Education Foundation</p>
              <p className="text-xs text-slate-400 mt-1">Vidyagiri, Moodubidire, Karnataka 574227, India</p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <div className="text-[11px] font-mono text-amber-400/90 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Air times: 6–9 AM & 5:30–8:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Section: Social Media & Official Channels + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Social Media Links & Institutional Verification */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">Official Station Channels</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Follow our official social platforms for behind-the-scenes studio sessions, Yakshagana highlights, farmer interview clips, and campus discussions.
              </p>

              <div className="space-y-3">
                {/* Instagram Button */}
                <a
                  href={STATION_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 hover:from-pink-500/20 hover:to-amber-500/20 border border-pink-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                        @radio_alvas_88.4fm
                      </div>
                      <div className="text-xs text-slate-400">Instagram Official Profile</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* YouTube Button */}
                <a
                  href={STATION_CONFIG.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/30">
                      <YoutubeIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                        @RadioAlvas884FM
                      </div>
                      <div className="text-xs text-slate-400">YouTube Official Channel</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Institution Badge */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 bg-white/5 rounded-xl p-1.5 flex items-center justify-center">
                <Image
                  src="/alvas-org-logo.png"
                  alt="Alva's Education Foundation (R)"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-mono text-amber-400">Patron Institution</div>
                <h4 className="text-sm font-bold text-white leading-tight">Alva&apos;s Education Foundation (R)</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Empowering Moodubidire through education, arts, sports, and community broadcast.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white">Send Station Message</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect regarding broadcasting inquiries, guest lectures, student participation, or community awareness.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone Number or Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="How we can reach you..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="General Feedback / Community Inquiry">General Feedback / Community Inquiry</option>
                    <option value="Agricultural Programme (Bennida Baduku)">Agricultural Programme (Bennida Baduku)</option>
                    <option value="Local Achiever Feature Nomination">Local Achiever Feature Nomination</option>
                    <option value="Student Corner & Campus Voice">Student Corner & Campus Voice</option>
                    <option value="Health & Wellness Expert Slot">Health & Wellness Expert Slot</option>
                    <option value="Folk, Yakshagana & Cultural Heritage">Folk, Yakshagana & Cultural Heritage</option>
                    <option value="Institutional & Educational Inquiry">Institutional & Educational Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message Details <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your thoughts, suggestions, or community notice..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    SEND VIA EMAIL TO STATION
                  </button>
                  <a
                    href={`https://wa.me/91${STATION_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    Open in WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
