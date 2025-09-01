const express = require("express");
const router = express.Router();
const treinoController = require("../controllers/treinoController");
const authMiddleware = require("../middlewares/authMiddleware");

// CRUD Treinos
router.post("/", treinoController.criarTreino);
router.get("/", authMiddleware, treinoController.listarTreinos);
router.get("/detalhe/:id", treinoController.buscarTreinoPorId);
router.put("/:id", treinoController.atualizarTreino);
router.delete("/:id", treinoController.deletarTreino);

module.exports = router;
