// import mongoose from "mongoose";
// import express from "express";
// import { DB_NAME } from "./constants";

// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.error("ERROR: ", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(
//                 `App is listening on http://localhost:${process.env.PORT}`
//             );
//         });
//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error;
//     }
// })();

import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env",
});

connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(8000);
