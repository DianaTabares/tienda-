/* Este código JavaScript define una función llamada `postControllerPrecio` que toma tres parámetros:
`usuarioId`, `productoId` y `descuento`. */
const Descuento = require("../../models/Descuentos");

const postControllerPrecio = async (usuarioId, productoId, descuento) => {
  try {
    const descuentoExistente = await Descuento.findOne({
      usuario: usuarioId,
      marca: marcaId,
    });

    if (descuentoExistente) {
      throw new Error("El descuento ya existe para este usuario");
    }

    const nuevoDescuento = new Descuento({ usuarioId, productoId, descuento });

    return nuevoDescuento.save();
  } catch (error) {
    return error;
  }
};

module.exports = { postControllerPrecio };
