/* Este fragmento de código define una función llamada `postHandlerProducto` que maneja solicitudes
POST relacionadas con productos. Aquí hay un desglose de lo que hace cada parte: */
const {
  postControllerProducto,
} = require("../../controllers/controllerProducto/postControllerProducto");

const postHandlerProducto = async (req, res) => {
  try {
    const { productos } = req.body;
    const nuevoProducto = await postControllerProducto(productos);
    res.status(200).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postHandlerProducto };
