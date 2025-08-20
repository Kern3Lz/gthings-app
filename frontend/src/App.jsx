// src/App.jsx (Setelah diubah)

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import AddProgrammerForm from "./components/AddProgrammerForm";
import EditProgrammerModal from "./components/EditProgrammerModal";
import ProgrammerTable from "./components/ProgrammerTable"; // <-- IMPORT BARU

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [programmers, setProgrammers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProgrammer, setEditingProgrammer] = useState(null);

  useEffect(() => {
    // ... (logika useEffect tetap sama)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/programmers?search=${searchTerm}`
        );
        setProgrammers(response.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };
    fetchData();
  }, [searchTerm]);

  const handleProgrammerAdded = (newProgrammer) => {
    setProgrammers([...programmers, newProgrammer]);
  };

  const handleDelete = async (id) => {
    // Tampilkan konfirmasi sebelum menghapus
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        // Panggil API untuk menghapus
        await axios.delete(`${API_URL}/api/programmers/${id}`);
        // Update UI dengan menghapus data dari state
        setProgrammers(
          programmers.filter((programmer) => programmer._id !== id)
        );
      } catch (error) {
        console.error("Gagal menghapus data:", error);
        alert("Gagal menghapus data.");
      }
    }
  };

  const handleOpenEditModal = (programmer) => {
    setEditingProgrammer(programmer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProgrammer(null);
  };

  const handleSaveChanges = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/programmers/${id}`,
        updatedData
      );
      // Update data di state UI
      setProgrammers(
        programmers.map((p) => (p._id === id ? response.data : p))
      );
      handleCloseModal(); // Tutup modal setelah berhasil
    } catch (error) {
      console.error("Gagal menyimpan perubahan:", error);
      alert("Gagal menyimpan perubahan.");
    }
  };

  return (
    <div className="container">
      <h1>Daftar Programmer GThings</h1>
      <AddProgrammerForm onProgrammerAdded={handleProgrammerAdded} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Oper fungsi-fungsi baru ke ProgrammerTable */}
      <ProgrammerTable
        programmers={programmers}
        onDelete={handleDelete}
        onEdit={handleOpenEditModal} // <-- oper fungsi edit
      />

      {/* Render komponen Modal di sini */}
      {editingProgrammer && (
        <EditProgrammerModal
          open={isModalOpen}
          onClose={handleCloseModal}
          programmer={editingProgrammer}
          onSave={handleSaveChanges}
        />
      )}
    </div>
  );
}

export default App;
