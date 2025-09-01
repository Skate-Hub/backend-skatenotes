const treinoService = require("../services/treinoService");

async function criarTreino(req, res) {
  try {
    const treino = await treinoService.criarTreino(req.body);
    res.status(201).json(treino);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function listarTreinos(req, res) {
  try {
    const userId = req.userId;
    const treinos = await treinoService.listarTreinos(userId);
    return res.json(treinos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function buscarTreinoPorId(req, res) {
  try {
    const treino = await treinoService.buscarTreinoPorId(req.params.id);
    if (!treino) return res.status(404).json({ error: "Treino não encontrado" });
    res.json(treino);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function atualizarTreino(req, res) {
  try {
    const treino = await treinoService.atualizarTreino(req.params.id, req.body);
    if (!treino) return res.status(404).json({ error: "Treino não encontrado" });
    res.json(treino);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function deletarTreino(req, res) {
  try {
    const treino = await treinoService.deletarTreino(req.params.id);
    if (!treino) return res.status(404).json({ error: "Treino não encontrado" });
    res.json({ message: "Treino deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  criarTreino,
  listarTreinos,
  buscarTreinoPorId,
  atualizarTreino,
  deletarTreino,
};
