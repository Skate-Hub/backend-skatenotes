const Obstaculo = require("../models/obstaculo");

const adicionarAnexoService = async (manobraId, novoAnexo) => {
  try {
    const obstaculo = await Obstaculo.findOneAndUpdate(
      { "manobras._id": manobraId },
      { $push: { "manobras.$.anexos": novoAnexo } },
      { new: true }
    );

    if (!obstaculo) {
      throw new Error("Manobra não encontrada");
    }

    return obstaculo;
  } catch (error) {
    console.error("Erro no service:", error);
    throw error;
  }
};

const removerAnexoService = async (manobraId, anexoId) => {
  try {
    const obstaculo = await Obstaculo.findOneAndUpdate(
      { "manobras._id": manobraId },
      { $pull: { "manobras.$.anexos": { _id: anexoId } } },
      { new: true }
    );

    if (!obstaculo) {
      throw new Error("Manobra ou anexo não encontrado");
    }

    return obstaculo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  adicionarAnexoService,
  removerAnexoService,
};
