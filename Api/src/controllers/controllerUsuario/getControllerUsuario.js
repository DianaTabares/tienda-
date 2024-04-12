/* Este código JavaScript define una función `getControllerUsuario` que recupera todos los usuarios de
una base de datos utilizando el modelo `Usuario`. A continuación se muestra un desglose de lo que
hace el código: */
const Usuario = require("../../models/Usuarios");

const getControllerUsuario = async () => {
  try {
    const usuarios = await Usuario.find();
    return usuarios;
  } catch (error) {
    return error;
  }
};

module.exports = { getControllerUsuario };
