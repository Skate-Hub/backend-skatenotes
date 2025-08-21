const mongoose = require("mongoose");

const anexoSchema = new mongoose.Schema(
  {
    // Caminho local no servidor
    url: {
      type: String, // ex: "uploads/nome_arquivo.jpg"
      required: true,
    },

    // metadados do arquivo
    tipo: {
      type: String,
      enum: ["imagem", "video"],
      required: true,
    },
    nomeOriginal: {
      type: String,
      required: true,
    },
    tamanho: {
      type: Number,
      required: true,
    },
    formato: {
      type: String, // ex: "image/jpeg", "video/mp4"
    },
    metadata: {
      largura: { type: Number }, // somente para imagens
      altura: { type: Number },  // somente para imagens
      duracao: { type: Number }, // somente para vídeos
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Anexo", anexoSchema);
