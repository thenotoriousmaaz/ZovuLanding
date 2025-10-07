import mongoose, { Schema, type Model, type Document } from "mongoose";

export interface VendorDocument extends Document {
    companyName: string;
    contactName: string;
    email: string;
    phone?: string;
    website?: string;
    createdAt: Date;
    updatedAt: Date;
}

const VendorSchema = new Schema<VendorDocument>(
    {
        companyName: { type: String, required: true, trim: true },
        contactName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true, unique: true },
        phone: { type: String },
        website: { type: String }
    },
    { timestamps: true }
);

export const Vendor: Model<VendorDocument> = mongoose.models.Vendor || mongoose.model<VendorDocument>("Vendor", VendorSchema);


