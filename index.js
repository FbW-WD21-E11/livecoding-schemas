import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/index.js";

dotenv.config();

const app = express();

console.log(typeof "hello");

// Here we connect to our database

/*try {
  await mongoose.connect(
    process.env.MONGODB_URL
  );
  console.log("Database connected! 😃");
} catch (error) {
  console.log(error.message);
  console.log("🤨");
}*/

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use("/api", router);

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
