/* Este código JavaScript define una función `getControllerProducto` que es responsable de recuperar
productos de una base de datos donde el stock es mayor que 0. Aquí hay un desglose de lo que hace el
código: */
const Producto = require("../../models/Productos");

const getControllerProducto = async () => {
  try {
    const producto = await Producto.find({ stock: { $gt: 0 } });

    if (producto.length === 0) {
      throw new Error("No hay productos en stock");
    }

    return producto;
  } catch (error) {
    return error;
  }
};

module.exports = { getControllerProducto };
