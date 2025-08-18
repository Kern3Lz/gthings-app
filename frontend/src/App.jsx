// src/App.jsx (Final)
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProgrammerList from "./components/ProgrammerList";
import SearchBar from "./components/SearchBar";
import AddProgrammerForm from "./components/AddProgrammerForm"; // <-- Import

function App() {
  const [programmers, setProgrammers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/programmers?search=${searchTerm}`
        );
        setProgrammers(response.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };
    fetchData();
  }, [searchTerm]);

  // Fungsi untuk mengupdate daftar setelah data baru ditambahkan
  const handleProgrammerAdded = (newProgrammer) => {
    setProgrammers([...programmers, newProgrammer]);
  };

  return (
    <div className="container">
      <h1>Daftar Programmer GThings</h1>
      <AddProgrammerForm onProgrammerAdded={handleProgrammerAdded} />{" "}
      {/* <-- Gunakan Form */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProgrammerList programmers={programmers} />
    </div>
  );
}

export default App;
