"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";

function Trigger({ children }: { children: React.ReactNode }) {
    return (
        <AccordionTrigger className="group justify-between py-4 text-[13px] font-medium [&>svg]:hidden">
            <span>{children}</span>
            <span className="ml-2 group-data-[state=open]:hidden">
                <Plus size={16} />
            </span>
            <span className="ml-2 hidden group-data-[state=open]:block">
                <Minus size={16} />
            </span>
        </AccordionTrigger>
    );
}

export default function ThirdScreen() {
    return (
        <section className="mx-auto w-full max-w-[1400px] px-8 py-32 min-h-[110vh]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {/* Left column: heading + small link + accordion */}
                <div>
                    <div className="text-xs text-neutral-500">{`{Point Of Sales}`}</div>
                    <h3 className="mt-2 text-4xl font-medium leading-tight md:text-5xl">
                        Some of our <span className="bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-transparent">features</span>
                        <br /> that makes us the best
                    </h3>
                    <a href="#" className="mt-3 inline-block text-[11px] text-[#3D3ADB] underline">
                        Check out our Pos Solution
                    </a>

                    <Accordion type="single" collapsible className="mt-8 divide-y rounded-xl bg-white">
                        <AccordionItem value="item-1" className="px-4">
                            <Trigger>One Centralized OS</Trigger>
                            <AccordionContent>
                                <p className="pb-4 text-xs text-neutral-600">
                                    See who reserved online/ offline, no need for a 3th party system saving you money
                                </p>
                                <a href="#" className="mb-4 inline-block text-[11px] text-[#3D3ADB] underline">Learn more</a>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="px-4">
                            <Trigger>Reservations in your POS</Trigger>
                            <AccordionContent>
                                <p className="pb-4 text-xs text-neutral-600">Manage reservations seamlessly inside your POS.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="px-4">
                            <Trigger>Data Overload</Trigger>
                            <AccordionContent>
                                <p className="pb-4 text-xs text-neutral-600">Insights without the noise, summarized for action.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="px-4">
                            <Trigger>Ease of use</Trigger>
                            <AccordionContent>
                                <p className="pb-4 text-xs text-neutral-600">Simple flows, faster onboarding, fewer taps.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* Right column: blurred background with centered preview card */}
                <div className="relative min-h-[60vh]">
                    <div className="absolute inset-0 rounded-xl bg-[url('/images/pos-bg.jpg')] bg-cover bg-center opacity-60" />
                    <div className="relative z-10 flex h-full items-center justify-center p-6">
                        <Card className="h-[320px] w-[520px] rounded-xl bg-black">
                            {/* Placeholder for video/screenshot */}
                            <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.9))]" />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}


