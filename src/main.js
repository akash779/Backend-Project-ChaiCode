import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
connectDB();

//Below code is for connect the mongo db using mongose but for professional approch and imrove readability of code
//we put it into the db/index.js file and call when need to make a connection.

// import dotenv from "dotenv";
// dotenv.config({ path: "./env" });
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is Listning on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();
