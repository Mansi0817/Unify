const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
import userRoutes from "./routes/userRoutes.js";

app.use("/api/user", userRoutes);

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const setupSocket = require("./socket/socket");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const server = http.createServer(app);

setupSocket(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});