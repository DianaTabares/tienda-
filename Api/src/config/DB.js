/* Este fragmento de código JavaScript configura una función para conectarse a una base de datos
MongoDB usando Mongoose, una popular herramienta de modelado de objetos MongoDB para Node.js. A
continuación se muestra un desglose de lo que hace el código: */
const mongoose = require("mongoose");
const { DB_MONGO } = process.env;

const Usuarios = require("../models/Usuarios");
const Productos = require("../models/Productos");
const Marcas = require("../models/Marcas");
const Descuentos = require("../models/Descuentos");

const conectarDB = async () => {
  try {
    await mongoose.connect(DB_MONGO);

    mongoose.connection.on("connected", () => {
      console.log("Conexión a MongoDB establecida exitosamente");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Error al conectar a MongoDB:", err);
      process.exit(1);
    });
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = { conectarDB };
