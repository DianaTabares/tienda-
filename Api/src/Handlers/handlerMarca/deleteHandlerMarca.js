/* Este fragmento de código define una función llamada `deleteHandlerMarca` que maneja la eliminación
de una marca según la ID proporcionada en los parámetros de solicitud. A continuación se muestra un
desglose de lo que hace el código: */
const {
  deleteControllerMarca,
} = require("../../controllers/controllerMarca/deleteControllerMarca");

const deleteHandlerMarca = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Se requiere un ID de usuario válido" });
    }

    const marcaEliminada = await deleteControllerMarca(id);
    res.status(200).json(marcaEliminada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { deleteHandlerMarca };
