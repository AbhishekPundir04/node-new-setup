// require ('dotenv')
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { connectDB } from "./db/index.js";

dotenv.config({
    path: "./env",
})

connectDB()










/*(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    application.on("error", () => {
      console.log("ERR:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw err;
  }
})();

*/