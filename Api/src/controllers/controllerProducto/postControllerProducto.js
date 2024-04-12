/* Este código JavaScript define una función `postControllerProducto` que se encarga de crear un nuevo
producto y guardarlo. Aquí hay un desglose de lo que hace el código: */
const Producto = require("../../models/Productos");

const postControllerProducto = async (nombre, descripcion, precio, stock) => {
  try {
    const nuevoProducto = new Producto(nombre, descripcion, precio, stock);

    return nuevoProducto.save();
  } catch (error) {
    return error;
  }
};

module.exports = { postControllerProducto };
