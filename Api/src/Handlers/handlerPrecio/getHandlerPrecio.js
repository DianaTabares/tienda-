/* Este fragmento de código define una función llamada `getHandlerPrecio` que maneja una ruta
específica en una aplicación Node.js. */
const {
  getControllerPrecio,
} = require("../../controllers/controllerPrecio/getControllerPrecio");

const getHandlerPrecio = async (req, res) => {
  try {
    const { id, nombre } = req.params;
    const precioConDescuento = await getControllerPrecio(id, nombre);
    res.status(200).json(precioConDescuento);
  } catch (error) {
    throw new Error(
      "Error al obtener el precio con descuento: " + error.message
    );
  }
};

module.exports = { getHandlerPrecio };
