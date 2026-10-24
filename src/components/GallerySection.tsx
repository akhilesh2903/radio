"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  Maximize2,
  X,
  Layers,
  Sparkles,
  Radio,
  Sliders,
  Eye,
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "equipment", label: "Audio Gear & Microphones" },
    { id: "studio", label: "Broadcast Consoles" },
    { id: "recording", label: "Recording Suites" },
    { id: "lounge", label: "Reception & Murals" },
  ];

  const filteredItems = selectedCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF7F2] text-slate-800 relative overflow-hidden border-t border-[#E5DAC6]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C59]/10 border border-[#0F2C59]/20 text-[#0F2C59] font-mono text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Studio Facilities &amp; Production Spaces</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0F2C59] tracking-tight">
            Broadcast Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#F59E0B]">Gallery</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Step inside Radio Alva&apos;s 88.4 FM at Moodubidire: authentic acoustic recording booths, curved discussion consoles, Behringer microphones, and community reception spaces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#0F2C59] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-[#0F2C59] border border-[#E5DAC6] hover:bg-[#F5EFEB]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5DAC6] shadow-sm hover:shadow-xl hover:border-[#EA580C]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono uppercase font-bold text-[#0F2C59] shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-full bg-black/60 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5">
                <h4 className="text-base font-bold text-[#0F2C59] group-hover:text-[#EA580C] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border border-[#E5DAC6] shadow-2xl"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#EA580C] font-bold">
                  Radio Alva&apos;s 88.4 FM &bull; {activeItem.category.toUpperCase()}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2C59]">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                type="button"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] max-h-[65vh] w-full bg-slate-900">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 90vw, 1200px"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-slate-200">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeItem.description}
              </p>
              <div className="mt-2 text-[11px] font-mono text-slate-500">
                Location: Alva&apos;s Education Foundation (R), Moodubidire, Karnataka, India
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
