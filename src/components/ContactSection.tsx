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
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] text-slate-800 relative overflow-hidden border-t border-[#E5DAC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C59]/10 border border-[#0F2C59]/20 text-[#0F2C59] text-xs font-semibold tracking-wider uppercase mb-4">
            <Radio className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>STATION CONTACT &amp; DESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0F2C59]">
            CONNECT WITH <span className="text-[#EA580C]">RADIO ALVA&apos;S</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            We are here for the people of Moodubidire and beyond. Reach out to our broadcasting team, suggest a programme topic, or visit our studio in Vidyagiri.
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Phone Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#E5DAC6] hover:border-[#EA580C]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-[#EA580C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 tracking-wider">Phone Broadcast Line</h3>
              <p className="text-lg font-bold text-[#0F2C59] mt-1">{STATION_CONFIG.phone}</p>
              <p className="text-xs text-slate-500 mt-1">Direct call line for studio discussions &amp; inquiries.</p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex gap-2">
              <a
                href={`tel:${STATION_CONFIG.phone}`}
                className="flex-1 py-2 px-3 rounded-full bg-[#0F2C59] hover:bg-[#1E3A8A] text-white text-xs font-bold text-center transition-colors"
              >
                Click to Call
              </a>
              <button
                type="button"
                onClick={() => handleCopy(STATION_CONFIG.phone, "phone")}
                className="px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copied === "phone" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#E5DAC6] hover:border-emerald-500/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 tracking-wider">WhatsApp Station Desk</h3>
              <p className="text-lg font-bold text-[#0F2C59] mt-1">+91 {STATION_CONFIG.whatsapp}</p>
              <p className="text-xs text-slate-500 mt-1">Send voice notes, listener feedback, or greetings.</p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex gap-2">
              <a
                href={`https://wa.me/91${STATION_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp Desk</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy(STATION_CONFIG.whatsapp, "wa")}
                className="px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors cursor-pointer"
                title="Copy WhatsApp"
              >
                {copied === "wa" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#E5DAC6] hover:border-blue-500/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 tracking-wider">Official Email</h3>
              <p className="text-sm font-bold text-[#0F2C59] mt-1 truncate" title={STATION_CONFIG.email}>
                {STATION_CONFIG.email}
              </p>
              <p className="text-xs text-slate-500 mt-1">Institutional correspondence, proposals &amp; notices.</p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex gap-2">
              <a
                href={`mailto:${STATION_CONFIG.email}`}
                className="flex-1 py-2 px-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F2C59] text-xs font-semibold text-center transition-colors"
              >
                Compose Email
              </a>
              <button
                type="button"
                onClick={() => handleCopy(STATION_CONFIG.email, "email")}
                className="px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors cursor-pointer"
                title="Copy email"
              >
                {copied === "email" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#E5DAC6] hover:border-amber-500/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F5EFEB] border border-[#E5DAC6] text-[#0F2C59] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-[#EA580C]" />
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 tracking-wider">Studio Location</h3>
              <p className="text-sm font-bold text-[#0F2C59] mt-1">Alva&apos;s Education Foundation</p>
              <p className="text-xs text-slate-500 mt-1">Vidyagiri, Moodubidire, Karnataka 574227, India</p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <div className="text-[11px] font-mono text-[#0F2C59] flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Air: 6–9 AM &amp; 5:30–8:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Section: Social Media & Official Channels + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Social Media Links & Institutional Verification */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DAC6] shadow-sm">
              <h3 className="text-lg font-bold text-[#0F2C59] mb-2">Official Station Channels</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Follow our official social platforms for behind-the-scenes studio sessions, Yakshagana highlights, farmer interview clips, and campus discussions.
              </p>

              <div className="space-y-3">
                {/* Instagram Button */}
                <a
                  href={STATION_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-amber-50 hover:from-pink-100 hover:to-amber-100 border border-pink-200 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-xs">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
                        @radio_alvas_88.4fm
                      </div>
                      <div className="text-xs text-slate-500">Instagram Official Profile</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </a>

                {/* YouTube Button */}
                <a
                  href={STATION_CONFIG.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-red-50 hover:bg-red-100/70 border border-red-200 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-xs">
                      <YoutubeIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                        @RadioAlvas884FM
                      </div>
                      <div className="text-xs text-slate-500">YouTube Official Channel</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </a>
              </div>
            </div>

            {/* Institution Badge */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5DAC6] shadow-sm flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 bg-[#F5EFEB] rounded-2xl p-1.5 flex items-center justify-center border border-[#E5DAC6]">
                <Image
                  src="/alvas-org-logo.png"
                  alt="Alva's Education Foundation (R)"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-mono text-[#EA580C] font-semibold">Patron Institution</div>
                <h4 className="text-sm font-bold text-[#0F2C59] leading-tight">Alva&apos;s Education Foundation (R)</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Empowering Moodubidire through education, arts, sports, and community broadcast.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DAC6] shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#0F2C59]">Send Station Message</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect regarding broadcasting inquiries, guest lectures, student participation, or community awareness.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Name <span className="text-[#EA580C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E5DAC6] text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0F2C59] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number or Email <span className="text-[#EA580C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="How we can reach you..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E5DAC6] text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0F2C59] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E5DAC6] text-slate-800 text-sm focus:outline-none focus:border-[#0F2C59] transition-colors"
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
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Message Details <span className="text-[#EA580C]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your thoughts, suggestions, or community notice..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E5DAC6] text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0F2C59] transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] hover:from-[#D9480F] hover:to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-500/25 active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND VIA EMAIL TO STATION</span>
                  </button>
                  <a
                    href={`https://wa.me/91${STATION_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Open in WhatsApp</span>
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
