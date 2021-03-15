'use strict'
const db = require('../db/knex')

function createCar(car) {
    return db('car').insert(car)
}

function getAllCars() {
        return db('car').select('*')
}

function getOneCar(id) {
    return db('car').select('*').where('id', id)
}

function deleteCar(id) {
    return db('car').where('id', id).del()
}

function updateCar(id, car) {
    return db('car').where('id', id).update(car)
}

module.exports = {createCar, getAllCars, deleteCar, updateCar, getOneCar}
