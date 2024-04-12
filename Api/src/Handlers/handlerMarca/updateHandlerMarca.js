/* Este fragmento de código define una función asincrónica `updateHandlerMarca` que maneja la
actualización de una marca en una aplicación Node.js. A continuación se muestra un desglose de lo
que hace el código: */
const {
  updateControllerMarca,
} = require("../../controllers/controllerMarca/updateControllerMarca");
const updateHandlerMarca = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, descuento } = req.body;
    if (!(nombre || descripcion || descuento)) {
      return res
        .status(400)
        .json({ message: "Se requiere al menos un campo para actualizar" });
    }
    const marcaActualizada = await updateControllerMarca(id, req.body);
    res.status(200).json(marcaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { updateHandlerMarca };
