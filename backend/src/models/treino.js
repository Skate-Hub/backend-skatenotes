const mongoose = require("mongoose");

const treinoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    plano: { type: String, enum: ["padrao", "pago"], default: "padrao" },

    aprender: {
      manobras: [{ type: mongoose.Schema.Types.ObjectId }],
      rotatividade: { type: String, default: null },
      quantManobras: { type: Number, default: 1 },
    },
    aprimorar: {
      manobras: [{ type: mongoose.Schema.Types.ObjectId }],
      rotatividade: { type: String, default: "3d" },
      quantManobras: { type: Number, default: 3 },
    },
    naBase: {
      manobras: [{ type: mongoose.Schema.Types.ObjectId }],
      rotatividade: { type: String, default: "1d" },
      quantManobras: { type: Number, default: 3 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Treino", treinoSchema);
