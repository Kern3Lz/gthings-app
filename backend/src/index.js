// src/index.js

const express = require("express");
const dotenv = require("dotenv"); // Import dotenv
const cors = require("cors");
const connectDB = require("./config/database");

// ----------------------------------------------------
// WAJIB DI ATAS: Load environment variables SEKARANG
dotenv.config();
// ----------------------------------------------------

// Baru jalankan koneksi DB setelah env di-load
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const programmerRoutes = require("./routes/programmerRoutes");
app.use("/api/programmers", programmerRoutes); // <-- TAMBAHKAN INI

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
