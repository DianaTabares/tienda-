/* Este fragmento de código define una función llamada `actualizarProducto` que maneja la actualización
de un producto en un sistema. A continuación se muestra un desglose de lo que hace el código: */
const {
  updateControllerProducto,
} = require("../../controllers/controllerProducto/updateControllerProducto");

const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock } = req.body;
    if (!(nombre || descripcion || precio || stock)) {
      return res
        .status(400)
        .json({ message: "Se requiere al menos un campo para actualizar" });
    }
    const productoActualizado = await updateControllerProducto(id, req.body);
    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { actualizarProducto };
