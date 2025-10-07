"use client";

import Image from "next/image";
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
    <section aria-label="Featured categories" className="w-full bg-white py-14 text-neutral-900">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-semibold">What sets ZOVU apart</h2>
        <p className="mt-1 text-center text-sm text-neutral-500">Always-on highlights from our platform</p>
      </div>

      <div className="relative mt-6 overflow-hidden">
        <div
          className="marquee flex w-[200%] items-stretch"
          style={{ animationDuration: `${speedMs}ms` }}
        >
          {loopItems.map((item, idx) => (
            <article
              key={`${item.title}-${idx}`}
              className="mx-2 flex w-[280px] shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageSrc}
                alt={item.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-3">
                <h3 className="text-[15px] font-semibold">{item.title}</h3>
                {item.subtitle ? (
                  <p className="mt-1 text-xs text-neutral-500">{item.subtitle}</p>
                ) : null}
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


