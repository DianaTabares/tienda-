/* Este fragmento de código define un esquema Mongoose para un objeto "Descuento". Aquí hay un desglose
de lo que hace cada parte: */
const mongoose = require("mongoose");

const DescuentoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  marca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Marca",
    required: true,
  },
  descuento: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
});

module.exports = DescuentoSchema;
