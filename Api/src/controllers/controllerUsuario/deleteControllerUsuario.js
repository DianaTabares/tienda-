/* Este código JavaScript define una función llamada `deleteControllerUsuario` que se encarga de
eliminar un usuario de una base de datos usando el modelo `Usuario`. Aquí hay un desglose de lo que
hace el código: */
const Usuario = require("../../models/Usuarios");

const deleteControllerUsuario = async (id) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if (!usuarioEliminado) {
      throw new Error("Usuario no encontrado");
    }

    return usuarioEliminado;
  } catch (error) {
    return error;
  }
};

module.exports = { deleteControllerUsuario };
