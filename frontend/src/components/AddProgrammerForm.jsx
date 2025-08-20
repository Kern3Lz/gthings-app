// src/components/AddProgrammerForm.jsx
import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function AddProgrammerForm({ onProgrammerAdded }) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [jabatan, setJabatan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah form reload halaman
    if (!nama || !email || !jabatan) {
      alert("Semua field wajib diisi!");
      return;
    }
    try {
      const newData = { nama_lengkap: nama, email, jabatan };
      const response = await axios.post(`${API_URL}/api/programmers`, newData);
      onProgrammerAdded(response.data); // Kirim data baru ke parent (App.jsx)
      // Reset form
      setNama("");
      setEmail("");
      setJabatan("");
    } catch (error) {
      console.error("Gagal menambah data:", error);
      alert("Gagal menambah data. Mungkin email sudah ada?");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>Tambah Programmer Baru</h3>
      <input
        type="text"
        placeholder="Nama Lengkap"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Jabatan"
        value={jabatan}
        onChange={(e) => setJabatan(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default AddProgrammerForm;
