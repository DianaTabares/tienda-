/* Este fragmento de código define un esquema Mongoose para una "marca" en una base de datos MongoDB.
Déjame desglosarlo para ti: */
const mongoose = require("mongoose");

const marcaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    descripcion: String,
    descuento: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    productos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",
      },
    ],
    descuentos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Descuentos",
      },
    ],
  },
  {
    timestamps: false,
    autoCreate: false,
  }
);

module.exports = marcaSchema;
