"use client";

export default function FourthScreen() {
    return (
        <section className="mx-auto w-full max-w-[1400px] px-8 py-16 min-h-screen">
            <div className="mb-10">
                <h3 className="text-4xl font-medium md:text-5xl"><span className="bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-transparent">Unlock your Restaurant Potential</span></h3>
                <p className="mt-2 text-sm text-neutral-500">Our unic features and making it one connected OS set us apart</p>
            </div>

            {/* Three-column layout matching the reference: left copy, large center device, right copy */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.4fr_1fr]">
                {/* Left feature */}
                <div className="order-2 text-center md:order-1 md:text-left">
                    <h4 className="text-base font-medium text-neutral-900">One OS for Everything</h4>
                    <a href="#" className="mt-3 inline-block text-[11px] text-[#3D3ADB] underline">Learn More</a>
                </div>

                {/* Center device (SVG tablet) */}
                <div className="order-1 md:order-2">
                    <div className="relative mx-auto w-full max-w-[900px] rotate-[12deg]">
                        <svg viewBox="0 0 900 560" className="h-auto w-full drop-shadow-[0_50px_140px_rgba(0,0,0,0.35)]">
                            <rect x="20" y="20" width="860" height="520" rx="40" fill="#111319" />
                            <rect x="60" y="60" width="780" height="440" rx="28" fill="#ffffff" />
                            <defs>
                                <radialGradient id="vignette" cx="50%" cy="45%" r="65%">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                                    <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
                                </radialGradient>
                            </defs>
                            <rect x="60" y="60" width="780" height="440" rx="28" fill="url(#vignette)" />
                            <circle cx="450" cy="42" r="6" fill="#2b2f3a" />
                            <rect x="20" y="20" width="860" height="520" rx="40" fill="none" stroke="#2a2f3a" strokeWidth="3" />
                        </svg>
                    </div>
                </div>

                {/* Right feature */}
                <div className="order-3 text-center md:text-right">
                    <h4 className="text-base font-medium text-neutral-900">Reservations in your POS</h4>
                    <a href="#" className="mt-3 inline-block text-[11px] text-[#3D3ADB] underline">Learn More</a>
                </div>
            </div>

            {/* Optional third info under the device */}
            <div className="mt-10 text-center">
                <h5 className="text-sm font-medium text-neutral-900">Data that drives action</h5>
                <a href="#" className="mt-2 inline-block text-[11px] text-[#3D3ADB] underline">Learn More</a>
            </div>
        </section>
    );
}


