"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FifthScreen() {
    return (
        <section className="mx-auto w-full max-w-[1600px] px-10 py-32">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="flex items-start justify-start md:-ml-6 lg:-ml-10">
					<Card className="relative h-[680px] w-[640px] overflow-hidden rounded-2xl">
						<Image src="/images/customers.jpg" alt="Customer app" fill className="object-cover object-right" />
                    </Card>
                </div>
                <div>
                    <div className="text-sm text-neutral-500">{`(Our Customer App)`}</div>
                    <h3 className="mt-2 text-5xl font-medium md:text-6xl">
                        We Will get you
                        <br />
                        <span className="bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-transparent">New Customers</span>
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">
                        The ZOVU Diner App, built into our OS, grows visibility and repeat
                        visits—so you see more guests, more often.
                    </p>
                    <a href="#" className="mt-3 inline-block text-sm text-[#3D3ADB] underline">Learn about Our App</a>

                    <Accordion type="single" collapsible className="mt-8 divide-y rounded-xl bg-white">
                        <AccordionItem value="item-1" className="px-4">
                            <AccordionTrigger className="group justify-between py-5 text-sm font-medium [&>svg]:hidden">
                                <span>Showing your Restaurant</span>
                                <span className="ml-2 group-data-[state=open]:hidden"><Plus size={16} /></span>
                                <span className="ml-2 hidden group-data-[state=open]:block"><Minus size={16} /></span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="pb-4 text-sm text-neutral-600">
                                    Post on our food feed to get new customers and post
                                    about your restaurant
                                </p>
                                <a href="#" className="mb-4 inline-block text-sm text-[#3D3ADB] underline">Learn more</a>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="px-4">
                            <AccordionTrigger className="group justify-between py-5 text-sm font-medium [&>svg]:hidden">
                                <span>Using ZOVU Points</span>
                                <span className="ml-2 group-data-[state=open]:hidden"><Plus size={16} /></span>
                                <span className="ml-2 hidden group-data-[state=open]:block"><Minus size={16} /></span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="pb-4 text-sm text-neutral-600">Rewards to drive repeat visits.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="px-4">
                            <AccordionTrigger className="group justify-between py-5 text-sm font-medium [&>svg]:hidden">
                                <span>Food Feed</span>
                                <span className="ml-2 group-data-[state=open]:hidden"><Plus size={16} /></span>
                                <span className="ml-2 hidden group-data-[state=open]:block"><Minus size={16} /></span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="pb-4 text-sm text-neutral-600">Engage with hungry customers near you.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}


