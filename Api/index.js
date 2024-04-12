/* Este fragmento de código JavaScript configura un servidor utilizando el marco Express. Aquí hay un
desglose de lo que hace cada parte: */
require("dotenv").config();
const server = require("./src/server");
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
