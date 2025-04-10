import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRoute from "./routes/doctorRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRoute);
// localhost:4000/api/admin/add-doctor

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
