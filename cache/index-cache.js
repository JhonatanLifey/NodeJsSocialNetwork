const express = require('express');
const config = require('../config');
const router = require('./network');

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

//router
app.use('/', router);

app.listen(config.cacheService.port, () => {
    console.log('Servicio de cache REDIS, escuchando en el puerto', config.cacheService.port);
})
