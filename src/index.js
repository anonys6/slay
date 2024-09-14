import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env",
});

const port = process.env.PORT || 8001;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`App running on: http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection falied:", error);
    });
