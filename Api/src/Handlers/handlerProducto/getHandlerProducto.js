/* Este fragmento de código define una función llamada `getHandlerProducto` que sirve como controlador
de solicitudes para una ruta específica en una aplicación Node.js. */
const {
  getControllerProducto,
} = require("../../controllers/controllerProducto/getControllerProducto");

const getHandlerProducto = async (req, res) => {
  try {
    const productos = await getControllerProducto();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getHandlerProducto };
