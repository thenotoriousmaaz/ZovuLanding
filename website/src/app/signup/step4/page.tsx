"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupStep4() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-6 px-4 py-10 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="h-[720px] w-full rounded-xl bg-neutral-200" />
        </div>

        <section className="mx-auto w-full max-w-md">
          <div className="bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-3xl font-extrabold text-transparent" style={{ letterSpacing: ".02em" }}>ZOVU OS</div>
          <div className="mt-1 text-2xl text-neutral-900">Set Up your Hardware</div>

          <div className="mt-6 space-y-6">
            <div>
              <div className="text-sm font-semibold">Set up kitchen</div>
              <p className="mt-1 text-xs text-neutral-600">Click set up kitchen to enable your Kitchen Display and/or Printer</p>
              <div className="mt-3 rounded-xl bg-[#3D3ADB] px-4 py-3 text-white">Kitchen #1</div>
              <div className="mt-2 h-14 rounded-xl border border-[#3D3ADB] bg-white px-4 text-sm leading-[3.5rem]">Set up Kitchen</div>
            </div>

            <div>
              <div className="text-sm font-semibold">Set up Bar</div>
              <p className="mt-1 text-xs text-neutral-600">Click set up a printer for the bar</p>
              <div className="mt-2 h-14 rounded-xl border border-[#3D3ADB] bg-white px-4 text-sm leading-[3.5rem]">Set up Bar</div>
            </div>
          </div>

          <Button asChild className="mt-8 h-12 w-full rounded-md bg-[#3D3ADB] text-white hover:bg-[#3D3ADB]">
            <Link href="/">FINISH</Link>
          </Button>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-[#3D3ADB]" />
          </div>
        </section>
      </div>
    </main>
  );
}


