// src/components/ProgrammerList.jsx
import React from "react";
import ProgrammerCard from "./ProgrammerCard";

function ProgrammerList({ programmers }) {
  if (programmers.length === 0) {
    return <p>Tidak ada data programmer.</p>;
  }

  return (
    <div className="programmer-list">
      {programmers.map((programmer) => (
        <ProgrammerCard key={programmer._id} programmer={programmer} />
      ))}
    </div>
  );
}

export default ProgrammerList;
