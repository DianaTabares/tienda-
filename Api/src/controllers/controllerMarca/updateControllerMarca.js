/* Este código JavaScript define una función asincrónica `updateControllerMarca` que actualiza un
documento en una colección de MongoDB usando Mongoose. Aquí hay un desglose de lo que hace el
código: */
const Marca = require("../../models/Marcas");

const updateControllerMarca = async (id, data) => {
  try {
    const marcaActualizada = await Marca.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );
    if (!marcaActualizada) {
      throw new Error("Marca no encontrado");
    }
    return marcaActualizada;
  } catch (error) {
    return error;
  }
};

module.exports = { updateControllerMarca };
