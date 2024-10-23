import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://ETHEL:ETHEL@cluster0.rfjho.mongodb.net/food-del")
    .then(() => console.log("DB CONNECTED"));
};
