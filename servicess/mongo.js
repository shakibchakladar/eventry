import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.9ttivus.mongodb.net/eventryDB`
    );
    console.log("connected");
    return conn;
  } catch (err) {
    console.log(err);
  }
}
