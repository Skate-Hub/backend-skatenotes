const Obstaculo = require("../models/obstaculo");

const buscarAnexosService = async (manobraId) => {
  try {
    const obstaculo = await Obstaculo.findOne(
      { "manobras._id": manobraId },
      { "manobras.$": 1 }
    );

    if (!obstaculo || !obstaculo.manobras.length) {
      throw new Error("Manobra não encontrada");
    }

    const anexos = obstaculo.manobras[0].anexos || [];

    // retorna só os serverPath de cada anexo
    return anexos.map((anexo) => anexo.serverPath);
  } catch (error) {
    console.error("Erro no service:", error);
    throw error;
  }
};

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

    console.log(obstaculo)

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
  buscarAnexosService,
};
