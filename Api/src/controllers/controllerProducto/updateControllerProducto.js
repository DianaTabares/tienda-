/* Este código JavaScript define una función llamada `updateControllerProducto` que se encarga de
actualizar un producto en una base de datos. Aquí hay un desglose de lo que hace el código: */
const Producto = require("../../models/Productos");

const updateControllerProducto = async (id, data) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );

    if (!productoActualizado) {
      throw new Error("Producto no encontrado");
    }

    return productoActualizado;
  } catch (error) {
    return error;
  }
};

module.exports = { updateControllerProducto };
