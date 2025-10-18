import mongoose from "mongoose";

type MongooseCache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
type MongooseGlobal = typeof globalThis & { mongoose?: MongooseCache };

const globalForMongoose = global as MongooseGlobal;

if (!globalForMongoose.mongoose) {
    globalForMongoose.mongoose = { conn: null, promise: null };
}

const cached = globalForMongoose.mongoose as MongooseCache; // now guaranteed defined

export async function connectToDatabase(): Promise<typeof mongoose> {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(uri, { dbName: process.env.MONGODB_DB || undefined });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}


