'use strict';

const mongoose = require('mongoose');

//creamos nuestra función asincrona
const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected Database')
    } catch (error) {
        throw new Error(`Error en ${error}`)
    }
}

module.exports = {dbConnection};