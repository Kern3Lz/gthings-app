// src/routes/programmerRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllProgrammers,
  getProgrammerById,
  createProgrammer,
  updateProgrammer,
  deleteProgrammer,
} = require("../controllers/programmerController");

// Routes untuk path '/' (Get All dan Create)
router.route("/").get(getAllProgrammers).post(createProgrammer);

// Routes untuk path '/:id' (Get by ID, Update, Delete)
router
  .route("/:id")
  .get(getProgrammerById)
  .put(updateProgrammer) // PUT digunakan untuk update
  .delete(deleteProgrammer);

module.exports = router;
