/* Este código JavaScript define una función `getControllerMarca` que recupera datos de un modelo
llamado `Marca` usando `Marca.find()`. La función es asincrónica y devuelve una promesa que se
resuelve en los datos obtenidos del modelo "Marca". Si ocurre un error durante el proceso de
recuperación de datos, la función detecta el error y lo devuelve. */
const Marca = require("../../models/Marcas");

const getControllerMarca = async () => {
  try {
    const marcas = await Marca.find();
    return marcas;
  } catch (error) {
    return error;
  }
};

module.exports = { getControllerMarca };
