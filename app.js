const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Se importan las rutas de los usuarios
const user = require('./src/route/user');
// Se importan las rutas de los registros médicos
const medicalRecord = require('./src/route/medicalRecord');

// Se habilitan los CORS
app.use(cors());
// Se habilita el body parser
app.use(bodyParser.json());
// Se habilitan las rutas de los usuarios
app.use('/api/user', user);
// Se habilitan las rutas de los registros médicos
app.use('/api/medicalRecord', medicalRecord);

// Se levanta el servidor
app.listen(process.env.LISTENING_PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.LISTENING_PORT}`);
});
