module.exports = {
    api: {
        port: process.env.API_PORT || 3000, 
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'NOTASECRET',
    },
    mysql:{
        host: process.env.MYSQL_HOST || '127.0.0.1',
        port: process.env.MYSQL_PORT || '3306', // este puerto viene del my.ini yo lo coloque x q tuve q cambiar el puerto, ya q uno de los servicios no levantaba
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'dbsocialnetwork',
    },
    post:{
        port: process.env.POST_PORT || '3002',
    },
    mysqlService:{
        host: process.env.MYSQL_SERVICE_HOST || 'localhost',
        port: process.env.MYSQL_SERVICE_PORT || 3001,
    },
    cacheService:{
        host: process.env.MYSQL_SERVICE_HOST || 'localhost',
        port: process.env.MYSQL_SERVICE_PORT || 3003,
    },
    redis:{
        host: process.env.REDIS_HOST || 'redis-15101.c251.east-us-mz.azure.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '15101',
        password: process.env.REDIS_PASS || '6xerXF6g3enzH8ECeNktUFmLkePFOZZn',
    }  

}