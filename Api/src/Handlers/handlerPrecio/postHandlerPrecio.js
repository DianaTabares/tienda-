/* Este fragmento de código define una función llamada `crearDescuento` que se encarga de crear un
descuento. */
const {
  postControllerPrecio,
} = require("../../controllers/controllerPrecio/postControllerPrecio");
const crearDescuento = async (req, res) => {
  try {
    const { descuento } = req.body;
    const nuevoDescuento = await postControllerPrecio(descuento);
    return res.status(201).json(nuevoDescuento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { crearDescuento };
