/* Este fragmento de código define una función llamada `getHandlerMarca` que maneja una ruta específica
en una aplicación Node.js. */
const {
  getControllerMarca,
} = require("../../controllers/controllerMarca/getControllerMarca");
const getHandlerMarca = async (req, res) => {
  try {
    const marcas = await getControllerMarca();
    res.status(200).json(marcas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getHandlerMarca };
