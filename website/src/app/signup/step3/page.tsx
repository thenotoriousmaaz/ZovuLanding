"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupStep3() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-6 px-4 py-10 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="h-[720px] w-full rounded-xl bg-neutral-200" />
        </div>

        <section className="mx-auto w-full max-w-md">
          <div className="bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-3xl font-extrabold text-transparent" style={{ letterSpacing: ".02em" }}>ZOVU OS</div>
          <div className="mt-1 text-2xl text-neutral-900">Let’s get your products in the system</div>

          <div className="mt-8">
            <div className="text-sm font-semibold">Import Products</div>
            <p className="mt-1 text-xs text-neutral-600">upload a PDF, picture or spreadsheet with your menu to import it in ZOVU</p>
            <div className="mt-3 h-14 w-full rounded-xl border border-[#3D3ADB] bg-white px-4 text-sm text-neutral-700 shadow-sm">Import Products +</div>
          </div>

          <Button asChild className="mt-6 h-12 w-full rounded-md bg-[#3D3ADB] text-white hover:bg-[#3D3ADB]">
            <Link href="/signup/step4">NEXT STEP</Link>
          </Button>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-[#3D3ADB]" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
          </div>
        </section>
      </div>
    </main>
  );
}


