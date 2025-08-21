const express = require("express");
const router = express.Router();
const anexoController = require("../controllers/anexoController");

router.post("/:manobraId/anexo", anexoController.adicionarAnexoController);
router.delete("/:manobraId/anexo/:anexoId", anexoController.removerAnexoController);

module.exports = router;
