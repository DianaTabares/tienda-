/* Este fragmento de código define una función llamada `deleteHandlerUsuario` que maneja la eliminación
de un usuario en una aplicación Node.js. */
const {
  deleteControllerUsuario,
} = require("../../controllers/controllerUsuario/deleteControllerUsuario");

const deleteHandlerUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Se requiere un ID de usuario válido" });
    }
    const usuarioEliminado = await deleteControllerUsuario(id);

    res.status(200).json(usuarioEliminado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { deleteHandlerUsuario };
