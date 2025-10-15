"use client";

import AutoCarousel from "@/components/AutoCarousel";
import { Card } from "@/components/ui/card";

const slides = [
    {
        id: "one",
        element: (
            <Card className="mx-auto h-[400px] max-w-5xl rounded-2xl p-8">
                <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h4 className="text-2xl font-medium">One OS for Everything</h4>
                        <p className="mt-2 text-sm text-neutral-600">Connect POS, reservations, menus, and analytics in a single flow.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="h-56 w-80 rounded-xl bg-neutral-200" />
                    </div>
                </div>
            </Card>
        ),
    },
    {
        id: "two",
        element: (
            <Card className="mx-auto h-[400px] max-w-5xl rounded-2xl p-8">
                <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h4 className="text-2xl font-medium">Reservations in your POS</h4>
                        <p className="mt-2 text-sm text-neutral-600">Accept, seat, and manage tables without switching tools.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="h-56 w-80 rounded-xl bg-neutral-200" />
                    </div>
                </div>
            </Card>
        ),
    },
    {
        id: "three",
        element: (
            <Card className="mx-auto h-[400px] max-w-5xl rounded-2xl p-8">
                <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h4 className="text-2xl font-medium">Data that drives action</h4>
                        <p className="mt-2 text-sm text-neutral-600">Clear insights so your team knows exactly what to do next.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="h-56 w-80 rounded-xl bg-neutral-200" />
                    </div>
                </div>
            </Card>
        ),
    },
];

export default function FourthScreen() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-12 min-h-screen">
            <div className="mb-6">
                <h3 className="text-3xl font-medium"><span className="bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-transparent">Unlock your Restaurant Potential</span></h3>
                <p className="mt-1 text-xs text-neutral-500">Our unic features and making it one connected OS set us apart</p>
            </div>
            <AutoCarousel items={slides} intervalMs={3500} className="h-[calc(100vh-180px)]" />
        </section>
    );
}


