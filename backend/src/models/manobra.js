const mongoose = require("mongoose");
const anexoSchema = require("../models/anexo")

const manobraSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    status: { type: String, enum: ["Aprender", "Aprimorar", "Na base"], default: "Aprender" },
    observacoes: { type: String },
    anexos: [anexoSchema],
  },
  { timestamps: true }
);

module.exports = manobraSchema;