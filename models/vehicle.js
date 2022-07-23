'use strict'

const mongoose = require('mongoose');

const Vehicle = mongoose.Schema({
    brand: {
        type: String
    },
    year: {
        type: Number
    },
    model: {
        type: String
    },
    featuresVehicle: {
        type: String
    },
    state: {
        type: String
    },
    color: {
        type: String
    },
    matricula: {
        type: String
    }, 

    price: {
        type: Number
    },
    photo: {
        type: String
    }
    
})

module.exports = mongoose.model('vehicle', Vehicle);