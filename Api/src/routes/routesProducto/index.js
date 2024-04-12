/* Este fragmento de código configura rutas para manejar operaciones CRUD (Crear, Leer, Actualizar,
Eliminar) relacionadas con productos en una aplicación Express. */
const {
  postHandlerProducto,
} = require("../../Handlers/handlerProducto/postHandlerProducto");
const {
  getHandlerProducto,
} = require("../../Handlers/handlerProducto/getHandlerProducto");
const {
  updateHandlerProducto,
} = require("../../Handlers/handlerProducto/updateHandlerProducto");
const {
  deleteHandlerProducto,
} = require("../../Handlers/handlerProducto/deleteHandlerProducto");
const router = require("express").Router();

router.post("/", postHandlerProducto);
router.get("/", getHandlerProducto);
router.put("/:id", updateHandlerProducto);
router.delete("/:id", deleteHandlerProducto);

module.exports = router;
