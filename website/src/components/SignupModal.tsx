"use client";

import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SignupModal({ open, onClose }: SignupModalProps) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("keydown", onEsc);
    }
    return () => {
      document.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose]);

  return open ? (
    <div aria-modal="true" role="dialog" className="fixed inset-0 z-[100] flex bg-black/50">
      <div className="mx-auto my-auto w-full max-w-3xl rounded-none bg-white p-0 md:ml-auto md:mr-8 md:w-[640px] md:rounded-2xl">
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <div className="text-2xl font-extrabold text-[#0F0E47] tracking-wide">ZOVU OS</div>
            <div className="mt-1 text-xl text-neutral-800">let’s get you started</div>
            <div className="mt-2 text-xs text-neutral-500">
              Already a Account? <button onClick={onClose} className="text-[#3D3ADB] underline">Click here!</button>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm">E-Mail</Label>
              <Input id="email" type="email" placeholder="name@company.com" className="mt-1 h-12 rounded-md border-[#3D3ADB] focus-visible:ring-[#3D3ADB]" />
            </div>

            <div>
              <Label htmlFor="passcode" className="text-sm">Create a Passcode</Label>
              <Input id="passcode" type="password" placeholder="••••••••" className="mt-1 h-12 rounded-md border-[#3D3ADB] focus-visible:ring-[#3D3ADB]" />
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

            <Button type="submit" className="mt-4 h-12 w-full rounded-md bg-[#3D3ADB] text-white hover:bg-[#3D3ADB]">
              NEXT STEP
            </Button>

            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3D3ADB]" />
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
            </div>
          </form>
        </div>
      </div>

      <button aria-label="Close" onClick={onClose} className="absolute inset-0 -z-10 cursor-default" />
    </div>
  ) : null;
}


