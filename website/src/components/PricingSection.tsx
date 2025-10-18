"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left visual placeholder */}
        <div className="flex items-start justify-center">
          <div className="relative h-[520px] w-[560px] overflow-hidden rounded-xl ring-1 ring-black/10">
            <Image
              src="/images/cost.jpg"
              alt="Pricing comparison"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        {/* Right content */}
        <div>
          <h3 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl" style={{ fontFamily: "var(--font-libre-baskerville)" }}>
            It Cost literally <span className="text-[#3D3ADB]">€0.00</span>
            <br />
            to start
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            in comparison to competitors it can save your restaurant about
            <br />
            <strong>€1.450 a month</strong>
          </p>

          <div className="mt-6 rounded-xl border border-neutral-200">
            <Accordion type="single" collapsible className="divide-y rounded-xl bg-white">
              <AccordionItem value="p-1" className="px-4">
                <AccordionTrigger className="group justify-between py-4 text-[13px] font-medium [&>svg]:hidden">
                  <span>How are this Prices this low?</span>
                  <span className="ml-2 group-data-[state=open]:hidden"><Plus size={16} /></span>
                  <span className="ml-2 hidden group-data-[state=open]:block"><Minus size={16} /></span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-4 text-xs text-neutral-600">
                    Post on our food feed to get new customers and post about your restaurant
                  </p>
                  <a href="#" className="mb-4 inline-block text-[11px] text-[#3D3ADB] underline">Learn more</a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="p-2" className="px-4">
                <AccordionTrigger className="group justify-between py-4 text-[13px] font-medium [&>svg]:hidden">
                  <span>What if i want to stop it?</span>
                  <span className="ml-2 group-data-[state=open]:hidden"><Plus size={16} /></span>
                  <span className="ml-2 hidden group-data-[state=open]:block"><Minus size={16} /></span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-4 text-xs text-neutral-600">Cancel any time, data stays yours.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="p-3" className="px-4">
                <AccordionTrigger className="group justify-between py-4 text-[13px] font-medium [&>svg]:hidden">
                  <span>How can i start?</span>
                  <span className="ml-2 group-data-[state=open]:hidden"><Plus size={16} /></span>
                  <span className="ml-2 hidden group-data-[state=open]:block"><Minus size={16} /></span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-4 text-xs text-neutral-600">Reach out and we’ll onboard you in days—not weeks.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <form className="mt-6 rounded-xl border border-neutral-200 p-4">
            <label className="block text-sm font-medium text-neutral-800">Let’s get in contact</label>
            <div className="mt-3 flex h-11 items-center overflow-hidden rounded-lg border border-neutral-300 bg-white">
              <input
                type="email"
                placeholder="your email address"
                className="h-full w-full flex-1 bg-transparent px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
              />
              <button type="submit" className="h-full min-w-12 border-l border-neutral-300 bg-white px-3 text-xl text-[#3D3ADB]">→</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


