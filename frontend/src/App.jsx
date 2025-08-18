// src/App.jsx
import { useState, useEffect } from "react"; // 1. Import hooks
import axios from "axios"; // 2. Import axios
import "./App.css";

function App() {
  // 3. Siapkan 'state' untuk menyimpan data programmer. Awalnya array kosong.
  const [programmers, setProgrammers] = useState([]);

  // 4. useEffect akan berjalan satu kali setelah komponen pertama kali render
  useEffect(() => {
    // Buat fungsi di dalam useEffect untuk mengambil data
    const fetchData = async () => {
      try {
        // 5. Panggil API backend kita menggunakan axios
        const response = await axios.get(
          "http://localhost:5001/api/programmers"
        );
        // 6. Simpan data yang didapat ke dalam state
        setProgrammers(response.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData(); // Panggil fungsinya
  }, []); // Array kosong berarti "jalankan sekali saja"

  return (
    <div className="container">
      <h1>Daftar Programmer GThings</h1>
      <div className="programmer-list">
        {/* 7. Gunakan .map() untuk me-render setiap programmer di dalam state */}
        {programmers.map((programmer) => (
          <div key={programmer._id} className="programmer-card">
            <h2>{programmer.nama_lengkap}</h2>
            <p>{programmer.jabatan}</p>
            <p className="email">{programmer.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
