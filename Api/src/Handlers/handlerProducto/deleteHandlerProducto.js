/* Este fragmento de código define una función llamada `deleteHandllerProducto` que sirve como
controlador para eliminar un producto. A continuación se muestra un desglose de lo que hace el
código: */
const {
  deleteControllerProducto,
} = require("../../controllers/controllerProducto/deleteControllerProducto");

const deleteHandllerProducto = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ message: "Se requiere un ID de usuario válido" });
    }

    const productoEliminado = await deleteControllerProducto(id);

    res.status(200).json(productoEliminado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { deleteHandllerProducto };
