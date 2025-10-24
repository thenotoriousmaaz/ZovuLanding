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
  // Duplicate items once to create a single, seamless track (50% shift)
  const loopItems = React.useMemo(() => [...items, ...items], [items]);

  return (
    <section aria-label="Designed for every Style of Restaurants" className="w-full bg-white py-20 text-neutral-900">
      <div className="mx-auto max-w-[1600px] px-10">
        <h2
          className="text-center text-4xl font-bold text-neutral-900 sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-libre-baskerville)" }}
        >
          Designed for every Style of Restaurants
        </h2>
        <p className="mt-2 text-center text-base text-neutral-500">No sector is left out</p>
      </div>

      <div className="relative mt-8 h-[520px] overflow-hidden">
        <div className="marquee flex h-full w-[200%] items-stretch" style={{ animationDuration: `${speedMs}ms` }}>
          {loopItems.map((item, idx) => (
            <article key={`${item.title}-${idx}`} className="mx-4 relative h-full w-[380px] shrink-0 overflow-hidden rounded-none shadow-[0_16px_40px_rgba(0,0,0,0.2)] ring-1 ring-black/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.imageSrc} alt={item.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <h3 className="px-4 text-center text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


