// src/components/ProgrammerCard.jsx
import React from "react";

function ProgrammerCard({ programmer }) {
  return (
    <div className="programmer-card">
      <h2>{programmer.nama_lengkap}</h2>
      <p>{programmer.jabatan}</p>
      <p className="email">{programmer.email}</p>
    </div>
  );
}

export default ProgrammerCard;
