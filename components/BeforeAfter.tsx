"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const { beforeAfter } = siteConfig;

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className="py-16 md:py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
            {beforeAfter.sectionTagline}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            {beforeAfter.sectionHeading}
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            {beforeAfter.sectionDescription}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize group"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img
                src={beforeAfter.afterImage}
                alt="After treatment: healthy, aligned teeth"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute bottom-4 right-4 bg-navy/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-md pointer-events-none">
                After
              </div>
            </div>

            {/* Before Image (Overlay clipped by slider) */}
            <div
              className="absolute inset-0 border-r-2 border-white pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={beforeAfter.beforeImage}
                alt="Before treatment"
                className="w-full h-full object-cover absolute top-0 left-0 max-w-none w-[100vw] sm:w-[896px]"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center" }}
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-left bg-cover pointer-events-none"
                style={{ backgroundImage: `url('${beforeAfter.beforeImage}')` }}
              ></div>
              
              <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-md pointer-events-none">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white/50 cursor-ew-resize group-hover:bg-teal transition-colors"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
                  <path d="M18 8L22 12L18 16" />
                  <path d="M6 8L2 12L6 16" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted mt-6">
            {beforeAfter.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
