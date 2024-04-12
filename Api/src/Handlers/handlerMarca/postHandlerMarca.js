/* Este fragmento de código define una función llamada `postHandlerMarca` que maneja una solicitud POST
relacionada con una marca. */
const {
  postControllerMarca,
} = require("../../controllers/controllerMarca/postControllerMarca");
const postHandlerMarca = async (req, res) => {
  try {
    const { marcas } = req.body;
    const nuevaMarca = await postControllerMarca(marcas);

    res.status(200).json(nuevaMarca);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postHandlerMarca };
