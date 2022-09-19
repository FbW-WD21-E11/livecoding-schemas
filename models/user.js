import mongoose from "mongoose";

// schema
const userSchema = new mongoose.Schema({
  username: String, // JavaScript uses lowercase "string"
  email: String,
  password: String, // not a good practise!
  age: Number,
  firstname: String,
  lastname: String,
  height: Number,
  country: String,
});

// model
// the string "user_collection" is used internally by mongoose / mongodb to reference the collection
// it is also the name used when creating the collection

const User = mongoose.model("user_collection", userSchema);

export { User };
