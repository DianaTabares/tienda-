/* Este código JavaScript define una función `getControllerPrecio` que calcula el precio de un producto
con o sin descuento en función del ID del usuario y el nombre del producto. A continuación se
muestra un desglose de lo que hace el código: */
const Descuento = require("../../models/Descuentos");
const Producto = require("../../models/Productos");

const getControllerPrecio = async (userId, nombre) => {
  try {
    const descuento = await Descuento.findOne({ usuario: userId }).populate({
      path: "marca",
      populate: { path: "productos" },
    });

    const producto = await Producto.findOne({ nombre: nombre });

    if (!producto) {
      throw new Error("Producto no encontrado");
    }

    if (
      descuento &&
      descuento.marca &&
      descuento.marca.productos.includes(producto._id)
    ) {
      const precioConDescuento =
        producto.precio - (producto.precio * descuento.descuento) / 100;
      return { precio: precioConDescuento, descuento: descuento.descuento };
    } else {
      return { precio: producto.precio, descuento: 0 };
    }
  } catch (error) {
    return error;
  }
};

module.exports = { getControllerPrecio };
