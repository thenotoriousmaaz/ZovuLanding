"use client";

import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function FourthScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: "One OS for Everything",
            color: "bg-blue-100"
        },
        {
            title: "Reservations in your POS",
            color: "bg-purple-100"
        },
        {
            title: "Data that drives action",
            color: "bg-pink-100"
        }
    ];

    const scroll = (direction: "left" | "right") => {
        if (direction === "left" && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (direction === "right" && currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section className="mx-auto w-full max-w-[1600px] px-10 py-20">
            {/* Header */}
            <div className="mb-16">
                <h3 className="text-5xl font-medium md:text-6xl">
                    <span className="bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-transparent">
                        Unlock your Restaurant Potential
                    </span>
                    <Sparkles className="ml-3 inline-block h-10 w-10 text-[#3D3ADB]" />
                </h3>
                <p className="mt-2 text-base text-neutral-500">Our unic features and making it one connected OS set us apart</p>
            </div>

            {/* Carousel Container */}
            <div className="relative flex items-center justify-center">
                {/* Left Scroll Button */}
                <button
                    onClick={() => scroll("left")}
                    disabled={currentIndex === 0}
                    className="absolute left-0 z-20 p-2 text-neutral-400 hover:text-neutral-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Cards Carousel */}
                <div className="w-full overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 24}px))`
                        }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full"
                            >
                                <div className="flex rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{ minHeight: "500px" }}>
                                    {/* Left Content */}
                                    <div className="flex flex-col justify-center p-8 w-1/2 bg-white">
                                        <h4 className="text-xl md:text-2xl font-semibold text-neutral-900">
                                            {card.title}
                                        </h4>
                                        <a
                                            href="#"
                                            className="mt-6 inline-block text-sm font-medium text-[#3D3ADB] hover:underline w-fit"
                                        >
                                            Learn More
                                        </a>
                                    </div>

                                    {/* Right Placeholder */}
                                    <div className={`w-1/2 ${card.color}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Scroll Button */}
                <button
                    onClick={() => scroll("right")}
                    disabled={currentIndex === cards.length - 1}
                    className="absolute right-0 z-20 p-2 text-neutral-400 hover:text-neutral-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
}


