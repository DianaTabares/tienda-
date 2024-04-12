/* Este fragmento de código configura un enrutador utilizando el marco Express en Node.js. Requiere
diferentes módulos de ruta para manejar diferentes tipos de solicitudes relacionadas con usuarios,
productos, marcas y precios. Cada módulo de ruta se importa usando `require` y luego se agrega al
enrutador principal usando el método `router.use` con un prefijo de ruta específico para cada ruta. */
const router = require("express").Router();
const usuario = require("./routesUsuario/index");
const producto = require("./routesProducto/index");
const marca = require("./routesMarca/index");
const precio = require("./routesPrecio/index");

router.use("/usuario", usuario);
router.use("/producto", producto);
router.use("/marca", marca);
router.use("/precio", precio);

module.exports = router;
