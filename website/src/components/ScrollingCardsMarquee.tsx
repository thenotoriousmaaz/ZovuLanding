"use client";

import React from "react";

type CardItem = {
  title: string;
  subtitle?: string;
  imageSrc: string;
};

interface ScrollingCardsMarqueeProps {
  items: CardItem[];
  speedMs?: number; // total duration for one full loop
}

export default function ScrollingCardsMarquee({ items, speedMs = 25000 }: ScrollingCardsMarqueeProps) {
  // Duplicate items to enable seamless looping
  const loopItems = React.useMemo(() => [...items, ...items], [items]);

  return (
    <section aria-label="Designed for every Style of Restaurants" className="w-full bg-white py-16 text-neutral-900">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-center text-3xl font-bold text-neutral-900 sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-libre-baskerville)" }}
        >
          Designed for every Style of Restaurants
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-500">No sector is left out</p>
      </div>

      <div className="relative mt-6 overflow-hidden">
        <div
          className="marquee flex w-[200%] items-stretch"
          style={{ animationDuration: `${speedMs}ms` }}
        >
          {loopItems.map((item, idx) => (
            <article
              key={`${item.title}-${idx}`}
              className="mx-3 relative w-[320px] h-[440px] shrink-0 overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.2)] ring-1 ring-black/10"
            >
              {/* Full-image card */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageSrc}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              {/* subtle dark overlay to ensure contrast */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Centered white title */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <h3 className="px-4 text-center text-xl font-semibold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        {/* Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}


