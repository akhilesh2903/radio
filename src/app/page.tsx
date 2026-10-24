import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import CommunityVoiceSection from "@/components/CommunityVoiceSection";
import AppRedirectionSection from "@/components/AppRedirectionSection";
import RadioGardenSection from "@/components/RadioGardenSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PersistentPlayer from "@/components/PersistentPlayer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-slate-800">
      {/* Top Header with Dual Branding (Radio Logo & Alva's Org Logo) */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Studio Hero Section matching user design */}
        <HeroSection />

        {/* About Radio Alva's 88.4 FM, Vision & Mission */}
        <AboutSection />

        {/* Authentic Fixed Programme Schedule (Morning & Evening Slots) */}
        <ScheduleSection />

        {/* High-Resolution Studio, Presenter & Field Gallery */}
        <GallerySection />

        {/* Community Voice Submission & Grassroots Participation */}
        <CommunityVoiceSection />

        {/* Open Radio Mobile App Section */}
        <AppRedirectionSection />

        {/* Explore on Radio Garden World Map Integration */}
        <RadioGardenSection />

        {/* Verified Station Desk, Contacts & Social Media Channels */}
        <ContactSection />
      </main>

      {/* Royal Navy Footer with Curved Top Arch & Dual Logos */}
      <Footer />

      {/* Persistent Bottom Audio Player with Live Transmission Status */}
      <PersistentPlayer />
    </div>
  );
}
