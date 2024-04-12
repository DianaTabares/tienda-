/* Este código JavaScript define una función `postControllerMarca` que maneja la creación de una nueva
marca. Aquí hay un desglose de lo que hace el código: */
const Marca = require("../../models/Marcas");

const postControllerMarca = async (nombre, descripcion, descuento) => {
  try {
    const marcaExiste = await Usuario.findOne({ nombre });
    if (marcaExiste) {
      throw new Error("La marca ya existe");
    }
    const nuevaMarca = new Marca({ nombre, descripcion, descuento });
    return nuevaMarca.save();
  } catch (error) {
    return error;
  }
};

module.exports = { postControllerMarca };
