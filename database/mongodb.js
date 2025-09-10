import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new Error("Please define the DB_URI environment variable inside the .env.<development/production>.local file");
}

const connectDB = async () => {

    try {
        await mongoose.connect(DB_URI);


        console.log(`MongoDB connected in ${NODE_ENV} mode`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;