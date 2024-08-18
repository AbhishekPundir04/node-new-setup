import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    console.log(process.env.MONGODB_URI,"data")
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected to !! DB :${connectionInstance.connection.host}`)
    }
    catch (error) {
        console.log("Mongo DB connection error",error);
        process.exit(1);
    }
}