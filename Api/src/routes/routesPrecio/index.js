/* Este fragmento de código configura un enrutador en una aplicación Node.js utilizando el marco
Express. Está importando dos funciones de controlador, `postHandlerPrecio` y `getHandlerPrecio`,
desde archivos separados ubicados en el directorio `Handlers`. Estas funciones de controlador son
responsables de manejar solicitudes POST y GET relacionadas con información de precios. */
const {
  postHandlerPrecio,
} = require("../../Handlers/handlerPrecio/postHandlerPrecio");
const {
  getHandlerPrecio,
} = require("../../Handlers/handlerPrecio/getHandlerPrecio");
const router = require("express").Router();

router.post("/", postHandlerPrecio);
router.get("/:id_usuario/:nombre_producto", getHandlerPrecio);

module.exports = router;
