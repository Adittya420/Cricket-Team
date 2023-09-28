import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";
// import { promisify } from "util";

const userSchema = mongoose.Schema({
  id: String,
  name: String,
  username: String,
  email: String,
  phone: String,
});

// autoIncrement.initialize(mongoose.connection);

// // Promisify the autoIncrement plugin
// userSchema.plugin(autoIncrement.plugin, {
//   model: "user",
//   startAt: 1,
//   incrementBy: 1,
//   field: "userId", // Replace with the field you want to auto-increment
// });

const user = mongoose.model("user", userSchema);

export default user;
