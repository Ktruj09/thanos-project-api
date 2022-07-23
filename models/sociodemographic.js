'use strict';

const mongoosee = require('mongoose');

const Sociodemographic = new mongoosee.Schema({
    age: {
        type: Number
    },
    maritalStatus: {
        type: String
    },
    gender: {
        type: String
    },
    levelShooling: {
        type: String
    },
    numberPeopleInCharge: {
        type: Number
    },
    avarageIncome: {
        type: Number
    },
    smokes: {
        type: String
    },
    numberOfCigarretes:{
        type: Number
    },
    consumeAlcoholic: {
        type: String
    }
});

module.exports = mongoosee.model('sociodemographic', Sociodemographic);