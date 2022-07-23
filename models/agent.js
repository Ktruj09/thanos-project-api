'use strict'
const mongoose = require('mongoose');

const Agent = new mongoose.Schema({
    name: {
        type: String
    }, 
    surname: {
        type: String
    }, 
    employeeNumber: {
        type: Number
    }
})
module.exports = mongoose.model('agent', Agent);