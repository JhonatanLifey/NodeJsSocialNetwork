const express = require('express');
//const bodyParser = require('body-parser');

const config = require('../config.js');
const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();

//router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router
app.use('/api/post', post);

app.use(errors); // para evitar qumuestre la trazabilidad de errores

app.listen(config.post.port,() => {
    console.log('Servicio post escuchando en el puerto', config.post.port);
});
