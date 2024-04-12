/* Este fragmento de código define una función llamada `updateHandlerUsuario` que sirve como
controlador de solicitudes para actualizar un usuario en una aplicación Node.js. A continuación se
muestra un desglose de lo que hace el código: */
const {
  updateControllerUsuario,
} = require("../../controllers/controllerUsuario/updateControllerUsuario");

const updateHandlerUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email } = req.body;

    if (!(nombre || email)) {
      return res
        .status(400)
        .json({ message: "Se requiere al menos un campo para actualizar" });
    }

    const usuarioActualizado = await updateControllerUsuario(id, req.body);
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { updateHandlerUsuario };
