import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:32768");
    console.log(`Mongo DB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error Connecting to Mongo DB: ${error}`);
    throw new Error(error as string);
  }
};
