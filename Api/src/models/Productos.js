/* Este fragmento de código define un esquema Mongoose para un producto en una aplicación Node.js.
Déjame desglosarlo para ti: */
const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    preciosEspeciales: [
      {
        marcas: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Marca",
        },
        descuento: Number,
      },
    ],
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    descripcion: String,
    precio: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: false,
    autoCreate: false,
  }
);

module.exports = productoSchema;
