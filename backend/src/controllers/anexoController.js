const {
  adicionarAnexoService,
  removerAnexoService,
} = require("../services/anexoService");

const adicionarAnexoController = async (req, res) => {
  const { manobraId } = req.params;
  const { url, serverPath, tipo, nomeOriginal, tamanho, formato, metadata } = req.body;

  if (!url || !serverPath || !tipo || !nomeOriginal || !tamanho) {
    return res.status(400).json({
      error: "Campos obrigatórios faltando: url, serverPath, tipo, nomeOriginal, tamanho",
    });
  }

  try {
    const novoAnexo = {
      url,
      serverPath,
      tipo,
      nomeOriginal,
      tamanho,
      formato: formato || null,
      metadata: metadata || {},
    };

    const resultado = await adicionarAnexoService(manobraId, novoAnexo);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removerAnexoController = async (req, res) => {
  const { manobraId, anexoId } = req.params;

  try {
    const resultado = await removerAnexoService(manobraId, anexoId);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  adicionarAnexoController,
  removerAnexoController,
};
