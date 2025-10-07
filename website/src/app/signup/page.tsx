"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-2">
        {/* Left image reserve */}
        <div className="hidden md:block">
          <div className="h-[720px] w-full rounded-xl bg-neutral-200" />
        </div>

        {/* Right form */}
        <section>
          <div className="text-3xl font-extrabold text-[#0F0E47]" style={{ letterSpacing: ".02em" }}>ZOVU OS</div>
          <div className="mt-1 text-2xl text-neutral-900">let’s get you started</div>
          <div className="mt-2 text-xs text-neutral-500">
            Already a Account? <a href="#" className="text-[#3D3ADB] underline">Click here!</a>
          </div>

          <form className="mt-6 space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm">E-Mail</Label>
              <Input id="email" type="email" className="mt-1 h-12 rounded-md border-[#3D3ADB] focus-visible:ring-[#3D3ADB]" />
            </div>
            <div>
              <Label htmlFor="passcode" className="text-sm">Create a Passcode</Label>
              <Input id="passcode" type="password" className="mt-1 h-12 rounded-md border-[#3D3ADB] focus-visible:ring-[#3D3ADB]" />
            </div>
            <div>
              <Label htmlFor="location" className="text-sm">Location</Label>
              <div className="mt-1 flex h-12 items-center rounded-md border border-[#3D3ADB] px-2">
                <select id="location" className="h-full w-full bg-transparent text-sm outline-none">
                  <option>United States of America</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Netherlands</option>
                </select>
                <span className="ml-2 text-neutral-400">‹</span>
              </div>
            </div>

            <label className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
              <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" />
              <span>
                I Agree to ZOVU’s <a className="underline" href="#">Terms</a>, <a className="underline" href="#">Privacy Policy</a>, and <a className="underline" href="#">E-Sign Consent</a>
              </span>
            </label>

            <Button className="mt-4 h-12 w-full rounded-md bg-[#3D3ADB] text-white hover:bg-[#3D3ADB]">NEXT STEP</Button>

            <div className="mt-4 flex items-center justify-center gap-2">
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


