// src/controllers/programmerController.js
const Programmer = require("../models/Programmer");

// @desc    Get all programmers, with search functionality
// @route   GET /api/programmers
// @access  Public
const getAllProgrammers = async (req, res) => {
  try {
    const { search } = req.query; // Mengambil query 'search' dari URL

    let filter = {};
    if (search) {
      // Jika ada query search, buat filter untuk mencari di nama atau jabatan
      // $options: 'i' membuat pencarian tidak case-sensitive (huruf besar/kecil diabaikan)
      filter = {
        $or: [
          { nama_lengkap: { $regex: search, $options: "i" } },
          { jabatan: { $regex: search, $options: "i" } },
        ],
      };
    }

    const programmers = await Programmer.find(filter);
    res.json(programmers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Get a single programmer by ID
// @route   GET /api/programmers/:id
// @access  Public
const getProgrammerById = async (req, res) => {
  try {
    const programmer = await Programmer.findById(req.params.id);
    if (!programmer) {
      return res.status(404).json({ message: "Programmer tidak ditemukan" });
    }
    res.json(programmer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Create a new programmer
// @route   POST /api/programmers
// @access  Public
const createProgrammer = async (req, res) => {
  // 1. Ambil data dari body request
  const { nama_lengkap, email, jabatan, status } = req.body;

  // 2. Validasi sederhana
  if (!nama_lengkap || !email || !jabatan) {
    return res
      .status(400)
      .json({ message: "Nama lengkap, email, dan jabatan wajib diisi" });
  }

  try {
    // 3. Buat dokumen baru menggunakan model
    const programmerBaru = new Programmer({
      nama_lengkap,
      email,
      jabatan,
      status,
    });

    // 4. Simpan ke database
    const savedProgrammer = await programmerBaru.save();

    // 5. Kirim respons sukses
    res.status(201).json(savedProgrammer);
  } catch (err) {
    // Penanganan error, misalnya jika email duplikat
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Update a programmer
// @route   PUT /api/programmers/:id
// @access  Public
const updateProgrammer = async (req, res) => {
  try {
    const { nama_lengkap, email, jabatan, status } = req.body;

    const programmer = await Programmer.findByIdAndUpdate(
      req.params.id,
      { nama_lengkap, email, jabatan, status },
      { new: true, runValidators: true } // Opsi
    );

    if (!programmer) {
      return res.status(404).json({ message: "Programmer tidak ditemukan" });
    }
    res.json(programmer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// Opsi di findByIdAndUpdate:
// { new: true } -> agar responsenya berisi data yang *sudah* di-update.
// { runValidators: true } -> agar validasi di model (seperti 'required' atau 'unique') tetap berjalan saat update.

// @desc    Delete a programmer
// @route   DELETE /api/programmers/:id
// @access  Public
const deleteProgrammer = async (req, res) => {
  try {
    const programmer = await Programmer.findByIdAndDelete(req.params.id);

    if (!programmer) {
      return res.status(404).json({ message: "Programmer tidak ditemukan" });
    }
    res.json({ message: "Programmer berhasil dihapus" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllProgrammers,
  getProgrammerById,
  createProgrammer,
  updateProgrammer,
  deleteProgrammer,
};
