/* Este fragmento de código configura rutas para manejar diferentes solicitudes HTTP relacionadas con
datos de usuario en una aplicación Node.js utilizando el marco Express. */
const {
  postHandlerUsuario,
} = require("../../Handlers/handlerUsuario/postHandlerUsuario");
const {
  getHandlerUsuario,
} = require("../../Handlers/handlerUsuario/getHandlerUsuario");
const {
  putHandlerUsuario,
} = require("../../Handlers/handlerUsuario/updateHandlerUsuario");
const {
  deleteHandlerUsuario,
} = require("../../Handlers/handlerUsuario/deleteHandlerUsuario");

const router = require("express").Router();

router.post("/", postHandlerUsuario);
router.get("/", getHandlerUsuario);
router.put("/:id", putHandlerUsuario);
router.delete("/:id", deleteHandlerUsuario);

module.exports = router;
