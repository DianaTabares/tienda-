/* Este fragmento de código define una función llamada `postHandlerUsuario` que maneja las solicitudes
POST relacionadas con la creación de usuarios. */
const {
  postControllerUsuario,
} = require("../../controllers/controllerUsuario/postControllerUsuarios");
const postHandlerUsuario = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    console.log(req.body);

    const nuevoUsuario = await postControllerUsuario(nombre, email); // Pasa los valores de nombre y email al controlador
    res.status(200).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postHandlerUsuario };
