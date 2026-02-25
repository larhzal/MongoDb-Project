// // server.js
// import mongoose from "mongoose";
// import http from "http";
// import dotenv from "dotenv";

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch(err => console.error("❌ MongoDB connection error:", err));

// const server = http.createServer((req, res) => {
//   if (req.url === "/api/test") {
//     res.writeHead(200, {"Content-Type": "application/json"});
//     res.end(JSON.stringify({message: "Hello from backend!"}));
//   }
// });

// server.listen(5000, () => console.log("Server running on port 5000"));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Simple API route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
