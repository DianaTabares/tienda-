/* Este código JavaScript define una función `postControllerUsuario` que maneja la creación de un nuevo
usuario en un sistema. Aquí hay un desglose de lo que hace el código: */
const Usuario = require("../../models/Usuarios");

const postControllerUsuario = async ({ nombre, email }) => {
  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      throw new Error("El usuario ya existe");
    }
    const nuevoUsuario = new Usuario({ nombre, email });

    return nuevoUsuario.save();
  } catch (error) {
    return error;
  }
};

module.exports = { postControllerUsuario };
