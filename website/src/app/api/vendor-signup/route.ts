import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/db";
import { Vendor } from "@/lib/models/Vendor";
import { Resend } from "resend";

const vendorSchema = z.object({
    companyName: z.string().min(2),
    contactName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    website: z.string().url().optional()
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const data = vendorSchema.parse(body);

        await connectToDatabase();

        const existing = await Vendor.findOne({ email: data.email });
        if (existing) {
            return NextResponse.json({ error: "Vendor with this email already exists" }, { status: 409 });
        }

        const created = await Vendor.create(data);

        if (process.env.RESEND_API_KEY && process.env.VENDOR_NOTIFY_EMAIL_FROM && process.env.VENDOR_NOTIFY_EMAIL_TO) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            await resend.emails.send({
                from: process.env.VENDOR_NOTIFY_EMAIL_FROM,
                to: process.env.VENDOR_NOTIFY_EMAIL_TO,
                subject: "New Vendor Signup",
                text: `New vendor signup:\nCompany: ${created.companyName}\nContact: ${created.contactName}\nEmail: ${created.email}\nPhone: ${created.phone || "-"}\nWebsite: ${created.website || "-"}`
            });
        }

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


