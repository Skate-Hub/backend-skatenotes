const Treino = require("../models/treino");

// Criar um novo treino
async function criarTreino(data) {
  try {
    const treino = new Treino(data);
    return await treino.save();
  } catch (error) {
    throw new Error(`Erro ao criar treino: ${error.message}`);
  }
}

// Listar treinos de um usuário
async function listarTreinos(userId) {
  try {
    return await Treino.findOne({ userId })
      .populate("aprender.manobras")
      .populate("aprimorar.manobras")
      .populate("naBase.manobras");
  } catch (error) {
    throw new Error(`Erro ao listar treinos: ${error.message}`);
  }
}

// Buscar treino por ID
async function buscarTreinoPorId(id) {
  try {
    return await Treino.findById(id)
      .populate("aprender.manobras")
      .populate("aprimorar.manobras")
      .populate("naBase.manobras");
  } catch (error) {
    throw new Error(`Erro ao buscar treino: ${error.message}`);
  }
}

// Atualizar treino
async function atualizarTreino(id, data) {
  try {
    return await Treino.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error(`Erro ao atualizar treino: ${error.message}`);
  }
}

// Deletar treino
async function deletarTreino(id) {
  try {
    return await Treino.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Erro ao deletar treino: ${error.message}`);
  }
}

module.exports = {
  criarTreino,
  listarTreinos,
  buscarTreinoPorId,
  atualizarTreino,
  deletarTreino,
};
