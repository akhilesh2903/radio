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
    <section id="gallery" className="py-20 lg:py-28 bg-[#090a0f] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Studio Facilities &amp; Production Spaces</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Broadcast Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Gallery</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Step inside Radio Alva&apos;s 88.4 FM at Moodubidire: authentic acoustic recording booths, curved discussion consoles, Behringer microphones, and community reception spaces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isSpan2 = idx === 0 || idx === 3; // Editorial variation
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-amber-500/50 shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  isSpan2 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 border border-white/10">
                      {item.category.toUpperCase()}
                    </span>

                    <button
                      className="p-2 rounded-lg bg-black/50 text-white/80 group-hover:text-white group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors"
                      aria-label="Expand image"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-base sm:text-lg group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-300 text-xs line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-zinc-950 border border-white/10">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-zinc-900/50">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                  Radio Alva&apos;s 88.4 FM • {activeItem.category}
                </span>
                <h3 className="text-white font-bold text-lg sm:text-xl">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative w-full flex-1 min-h-[350px] sm:min-h-[500px] bg-black flex items-center justify-center">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Description Footer */}
            <div className="p-4 sm:p-6 bg-zinc-900/80 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-zinc-300">
              <p className="max-w-3xl leading-relaxed">{activeItem.description}</p>
              <span className="font-mono text-zinc-500 whitespace-nowrap">Moodubidire Taluk</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
