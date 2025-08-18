// src/components/EditProgrammerModal.jsx

import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

// Style untuk box di tengah layar
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

function EditProgrammerModal({ open, onClose, programmer, onSave }) {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    jabatan: "",
    status: "",
  });

  // useEffect untuk mengisi form saat data programmer berubah
  useEffect(() => {
    if (programmer) {
      setFormData({
        nama_lengkap: programmer.nama_lengkap || "",
        email: programmer.email || "",
        jabatan: programmer.jabatan || "",
        status: programmer.status || "Aktif",
      });
    }
  }, [programmer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(programmer._id, formData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" component="h2">
          Edit Programmer
        </Typography>
        <TextField
          name="nama_lengkap"
          label="Nama Lengkap"
          value={formData.nama_lengkap}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="jabatan"
          label="Jabatan"
          value={formData.jabatan}
          onChange={handleChange}
          fullWidth
        />
        {/* Di sini bisa menggunakan Select component dari MUI untuk Status, tapi TextField dulu untuk simple */}
        <TextField
          name="status"
          label="Status"
          value={formData.status}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Simpan Perubahan
        </Button>
      </Box>
    </Modal>
  );
}

export default EditProgrammerModal;
