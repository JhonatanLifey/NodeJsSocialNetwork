const express = require('express');
//const bodyParser = require('body-parser');

const config = require('../config.js');
const user = require("./components/user/network");
const auth = require('./components/auth/network');

const errors = require('../network/errors');

const app = express();

//router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router
app.use('/api/user', user);
app.use('/api/auth', auth);

app.use(errors); // para evitar qumuestre la trazabilidad de errores

app.listen(config.api.port,() => {
    console.log('Api escuchando en el puerto', config.api.port);
});
