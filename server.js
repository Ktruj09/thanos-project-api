'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const {dbConnection} = require('./database/db');

class Server{
    constructor(){
        this.app = express();
        this.connectDB();

        this.middlewares();
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    listen(){
        this.app.listen(port, () =>{
            console.log(`Listening at the port http://localhost:${port}`)
        })
    }

    middlewares(){
        this.app.use(cors());
        //lectura parse body
        this.app.use(express.json());

        
        //cargamos el cors para que nos permita las peticiones desde el frontend
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }//end middlewares()

    routes(){
        this.app.use('/api/thanos', require('../thanos-api/routes/route'))
    }

}
module.exports = Server;
