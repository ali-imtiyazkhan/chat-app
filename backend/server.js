import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // ✅ Import cors

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoose from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

// ✅ Setup CORS middleware
app.use(cors({
  origin: "http://localhost:3000",  // allow frontend
  credentials: true                 // allow cookies if you're using them
}));

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world, I am Imtiyaz Khan!");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
  connectToMongoose();
  console.log(`Server is running on port ${port}`);
});
