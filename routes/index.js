import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  // store data

  // User.create({
  //   username: "whale",
  //   email: "whale@sea.org",
  //   password: "asdassadad",
  //   age: 60,
  //   firstname: "Moby",
  //   lastname: "Dick",
  //   height: 8993,
  //   country: "None",
  // });

  // await makes it synchronous
  // querying data
  const users = await User.find({ username: "whale" });

  res.send(users);
});

export { router };
