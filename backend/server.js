import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoose from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

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
