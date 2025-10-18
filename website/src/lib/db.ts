import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables");
}

type MongooseCache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
type MongooseGlobal = typeof globalThis & { mongoose?: MongooseCache };

const globalForMongoose = global as MongooseGlobal;

if (!globalForMongoose.mongoose) {
    globalForMongoose.mongoose = { conn: null, promise: null };
}

const cached = globalForMongoose.mongoose as MongooseCache; // now guaranteed defined

export async function connectToDatabase(): Promise<typeof mongoose> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, { dbName: process.env.MONGODB_DB || undefined });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}


