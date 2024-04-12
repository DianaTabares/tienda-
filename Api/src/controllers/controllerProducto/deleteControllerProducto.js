/* Este código JavaScript define una función `deleteControllerProducto` que se encarga de eliminar un
producto de una base de datos usando el modelo Mongoose `Producto`. Aquí hay un desglose de lo que
hace el código: */
const Producto = require("../../models/Productos");

const deleteControllerProducto = async (id) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(id);
    if (!productoEliminado) {
      throw new Error("Producto no encontrado");
    }
    return productoEliminado;
  } catch (error) {
    return error;
  }
};

module.exports = { deleteControllerProducto };
