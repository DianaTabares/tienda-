/* Este fragmento de código define una función llamada `getHandlerUsuario` que maneja una solicitud de
ruta específica. */
const {
  getControllerUsuario,
} = require("../../controllers/controllerUsuario/getControllerUsuario");
const getHandlerUsuario = async (req, res) => {
  try {
    const mostrarUsuarios = await getControllerUsuario();
    res.status(200).json(mostrarUsuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

module.exports = { getHandlerUsuario };
