// src/components/ProgrammerTable.jsx

import React from "react";

// Import komponen-komponen Tabel dari MUI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

// Import Ikon dari MUI
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ProgrammerTable({ programmers, onDelete, onEdit }) {
  // Fungsi sementara untuk tombol aksi
  // const handleEdit = (id) => {
  //   alert(`Edit programmer dengan ID: ${id}`);
  // };

  // const handleDelete = (id) => {
  //   alert(`Hapus programmer dengan ID: ${id}`);
  // };

  return (
    // TableContainer membungkus tabel, Paper memberikan latar belakang putih dan shadow
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* Bagian Kepala Tabel */}
        <TableHead>
          <TableRow>
            <TableCell>Nama Lengkap</TableCell>
            <TableCell>Jabatan</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Aksi</TableCell>
          </TableRow>
        </TableHead>

        {/* Bagian Isi Tabel */}
        <TableBody>
          {programmers.map((programmer) => (
            <TableRow
              key={programmer._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {programmer.nama_lengkap}
              </TableCell>
              <TableCell>{programmer.jabatan}</TableCell>
              <TableCell>{programmer.email}</TableCell>
              <TableCell>{programmer.status}</TableCell>
              <TableCell align="right">
                {/* Tombol Aksi dengan Ikon */}
                <IconButton color="primary" onClick={() => onEdit(programmer)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => onDelete(programmer._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProgrammerTable;
