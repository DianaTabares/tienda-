/* Este fragmento de código define un esquema Mongoose para un usuario (Usuario) en una aplicación
Node.js que utiliza MongoDB como base de datos. Aquí hay un desglose de lo que hace: */
const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
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
module.exports = UsuarioSchema;
