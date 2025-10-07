"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
    companyName: z.string().min(2, "Company name is required"),
    contactName: z.string().min(2, "Contact name is required"),
    email: z.string().email("Valid email required"),
    phone: z.string().optional(),
    website: z.string().url("Must be a valid URL").optional()
});

type FormValues = z.infer<typeof schema>;

export default function VendorSignupPage() {
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormValues>({ resolver: zodResolver(schema) });

    async function onSubmit(values: FormValues) {
        setSubmitting(true);
        setMessage(null);
        try {
            const res = await fetch("/api/vendor-signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            });
            if (res.ok) {
                setMessage("Thanks! We will reach out shortly.");
                reset();
            } else {
                const data = await res.json();
                setMessage(typeof data.error === "string" ? data.error : "Submission failed");
            }
        } catch {
            setMessage("Network error");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <main className="mx-auto max-w-xl px-4 py-12">
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mb-6 text-3xl font-semibold">
                Vendor Signup
            </motion.h1>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" {...register("companyName")} />
                    {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
                </div>
                <div>
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input id="contactName" {...register("contactName")} />
                    {errors.contactName && <p className="mt-1 text-sm text-red-600">{errors.contactName.message}</p>}
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" {...register("phone")} />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
                <div>
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" {...register("website")} />
                    {errors.website && <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>}
                </div>
                <Button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit"}</Button>
            </form>
            {message && <p className="mt-4 text-sm">{message}</p>}
        </main>
    );
}


