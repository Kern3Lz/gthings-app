// src/models/Programmer.js
const mongoose = require("mongoose");

const ProgrammerSchema = new mongoose.Schema(
  {
    nama_lengkap: {
      type: String,
      required: [true, "Nama lengkap wajib diisi"], // Menambahkan pesan error
    },
    email: {
      type: String,
      required: [true, "Email wajib diisi"],
      unique: true, // Memastikan tidak ada email yang sama
      match: [/.+\@.+\..+/, "Format email tidak valid"], // Validasi format email
    },
    jabatan: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Aktif", "Cuti", "Standby"], // Hanya menerima nilai ini
      default: "Aktif",
    },
    tanggal_bergabung: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Otomatis membuat field createdAt dan updatedAt
  }
);

module.exports = mongoose.model("Programmer", ProgrammerSchema);
