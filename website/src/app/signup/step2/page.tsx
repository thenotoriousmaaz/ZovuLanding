"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupStep2() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-6 px-4 py-10 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="h-[720px] w-full rounded-xl bg-neutral-200" />
        </div>

        <section className="mx-auto w-full max-w-md">
          <div className="bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-3xl font-extrabold text-transparent" style={{ letterSpacing: ".02em" }}>ZOVU OS</div>
          <div className="mt-1 text-2xl text-neutral-900">Let’s get to know you and your company</div>

          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <Label htmlFor="first">First Name</Label>
                <Input id="first" className="mt-1 h-12 rounded-md border-[#3D3ADB]" />
              </div>
              <div>
                <Label htmlFor="last">Last Name</Label>
                <Input id="last" className="mt-1 h-12 rounded-md border-[#3D3ADB]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <Label htmlFor="company">Company name</Label>
                <Input id="company" className="mt-1 h-12 rounded-md border-[#3D3ADB]" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" className="mt-1 h-12 rounded-md border-[#3D3ADB]" />
              </div>
            </div>

            <div className="mt-4 text-sm font-medium text-neutral-700">Jurisdiction Information</div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <Label htmlFor="companyNumber">Company Number</Label>
                <Input id="companyNumber" className="mt-1 h-12 rounded-md border-[#3D3ADB]" />
              </div>
              <div>
                <Label htmlFor="statutory">Statutory name</Label>
                <Input id="statutory" className="mt-1 h-12 rounded-md border-[#3D3ADB]" />
              </div>
            </div>
            <div>
              <Label htmlFor="legal">Legal Form</Label>
              <Input id="legal" className="mt-1 h-12 rounded-md border-[#3D3ADB]" />
            </div>

            <label className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
              <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" />
              <span>I have read and accept ZOVU&apos;s Terms and Conditions</span>
            </label>

            <Button asChild className="mt-4 h-12 w-full rounded-md bg-[#3D3ADB] text-white hover:bg-[#3D3ADB]">
              <Link href="/signup/step3">NEXT STEP</Link>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
              <span className="h-2 w-2 rounded-full bg-[#3D3ADB]" />
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}


