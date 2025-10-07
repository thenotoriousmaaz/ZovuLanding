"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface SlideItem {
    id: string;
    element: React.ReactNode;
}

export default function AutoCarousel({ items, intervalMs = 3500, className = "" }: { items: SlideItem[]; intervalMs?: number; className?: string }) {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<number | null>(null);

    const next = () => setIndex((i) => (i + 1) % items.length);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

    useEffect(() => {
        if (items.length <= 1) return;
        timerRef.current && window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(next, intervalMs);
        return () => {
            if (timerRef.current) window.clearTimeout(timerRef.current);
        };
    }, [index, intervalMs, items.length]);

    const prevIndex = (index - 1 + items.length) % items.length;
    const nextIndex = (index + 1) % items.length;

    return (
        <div className={`relative overflow-visible ${className}`}>
            {/* three-up layout: prev (left), current (center), next (right) */}
            <div className="relative h-full w-full">
                {/* Center */}
                <motion.div
                    key={`center-${items[index]?.id}`}
                    initial={{ opacity: 0, x: 20, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-1/2 top-1/2 z-20 h-full w-[72%] -translate-x-1/2 -translate-y-1/2"
                >
                    {items[index]?.element}
                </motion.div>

                {/* Left (previous) */}
                <motion.div
                    key={`left-${items[prevIndex]?.id}`}
                    initial={{ opacity: 0, x: -80, scale: 0.9 }}
                    animate={{ opacity: 0.65, x: 0, scale: 0.94 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-[2%] top-1/2 z-10 h-[86%] w-[38%] -translate-y-1/2"
                >
                    {items[prevIndex]?.element}
                </motion.div>

                {/* Right (next) */}
                <motion.div
                    key={`right-${items[nextIndex]?.id}`}
                    initial={{ opacity: 0, x: 80, scale: 0.9 }}
                    animate={{ opacity: 0.65, x: 0, scale: 0.94 }}
                    transition={{ duration: 0.35 }}
                    className="absolute right-[2%] top-1/2 z-10 h-[86%] w-[38%] -translate-y-1/2"
                >
                    {items[nextIndex]?.element}
                </motion.div>
            </div>

            {/* Arrows only (no dots) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <button className="pointer-events-auto rounded bg-white/80 px-2 py-1 text-xs" onClick={prev} aria-label="Previous">‹</button>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <button className="pointer-events-auto rounded bg-white/80 px-2 py-1 text-xs" onClick={next} aria-label="Next">›</button>
            </div>
        </div>
    );
}


