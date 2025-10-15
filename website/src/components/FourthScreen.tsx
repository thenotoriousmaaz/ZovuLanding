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

                {/* Center device mock */}
                <div className="order-1 md:order-2">
                    <div className="relative mx-auto aspect-[16/10] w-full max-w-[820px] rotate-[10deg] rounded-[28px] bg-neutral-900 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
                        {/* inner screen gloss */}
                        <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),rgba(0,0,0,0.9))]" />
                        <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
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


