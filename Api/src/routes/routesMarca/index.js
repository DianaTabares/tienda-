/* Este fragmento de código configura rutas para manejar operaciones CRUD relacionadas con un recurso
llamado "Marca" usando Express.js. */
const {
  postHandlerMarca,
} = require("../../Handlers/handlerMarca/postHandlerMarca");
const {
  getHandlerMarca,
} = require("../../Handlers/handlerMarca/getHandlerMarca");
const {
  updateHandlerMarca,
} = require("../../Handlers/handlerMarca/updateHandlerMarca");
const {
  deleteHandlerMarca,
} = require("../../Handlers/handlerMarca/deleteHandlerMarca");
const router = require("express").Router();

router.post("/", postHandlerMarca);
router.get("/", getHandlerMarca);
router.put("/:id", updateHandlerMarca);
router.delete("/:id", deleteHandlerMarca);

module.exports = router;
