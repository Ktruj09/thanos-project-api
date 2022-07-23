'use strict';
const mongoose = require('mongoose');

const Concessionaire =new mongoose.Schema({
    address: {
        type: String
    }, 
    nameBusiness: {
        type: String
    },
    phone: {
        type: Number
    }, 
    quantityBrances: {
        type: Number
    }
});

module.exports = mongoose.model('concessionaire', Concessionaire);