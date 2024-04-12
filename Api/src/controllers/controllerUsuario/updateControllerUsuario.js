/* Este fragmento de código es una función de JavaScript que actualiza a un usuario (usuario) en una
base de datos usando Mongoose. Aquí hay un desglose de lo que hace: */
const Usuario = require("../../models/Usuarios");

const updateControllerUsuario = async (id, data) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );
    if (!usuarioActualizado) {
      throw new Error("Usuario no encontrado");
    }
    return usuarioActualizado;
  } catch (error) {
    return error;
  }
};

module.exports = { updateControllerUsuario };
