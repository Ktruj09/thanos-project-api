'use strict'
const mongoose = require('mongoose');

const Client = new mongoose.Schema({
    name: {
        type: String
    }, 
    surname : {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
})

module.exports = mongoose.model('client', Client);