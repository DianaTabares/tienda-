/* Este código JavaScript define una función llamada `deleteControllerMarca` que se encarga de eliminar
un registro de una colección de bases de datos de modelos Marca (marca). Aquí hay un desglose de lo
que hace el código: */
const Marca = require("../../models/Marcas");

const deleteControllerMarca = async (id) => {
  try {
    const marcaEliminado = await Marca.findByIdAndDelete(id);
    if (!marcaEliminado) {
      throw new Error("Marca no encontrado");
    }
    return marcaEliminado;
  } catch (error) {
    return error;
  }
};

module.exports = { deleteControllerMarca };
