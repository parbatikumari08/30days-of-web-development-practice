import mongoose from "mongoose";
export default async function connectDB() {
  await mongoose.connect("YOUR_MONGO_URI");
  console.log("DB connected");
}
