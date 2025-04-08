import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    mongoose.connection.on("error", (err) =>
      console.log("MongoDB Connection Error:", err)
    );

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prescripto",
    });

    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
