'use strict'

const carService = require('../services/carService')

const carController = {
    async postCar(req, res) {
        try {
            const result = await carService.createCar(req.body)
            res.status(201).json({id: result[0]})
        } catch (e) {
            res.status(500).json({status: 'error', code: 500, message: e.message})
        }
    },
    async getCar(req, res) {
        try {
            const result = await carService.getAllCars()
            res.status(200).json(result)

        } catch (e) {
            res.status(500).json({status: 'error', code: 500, message: e.message})
        }
    },

    async getOneCar(req, res) {
        try {
            const result = await carService.getOneCar(req.params.id)
            if (result.length===0) return res.status('404').json({status: 'error', code: 404, message: 'Not found'})
            res.status(200).json(result[0])

        } catch (e) {
            res.status(500).json({status: 'error', code: 500, message: e.message})
        }
    },

    async patchCar(req, res) {
        try {
            const result = await carService.updateCar(req.params.id, req.body)
            res.status(204).json(result)
        } catch (e) {
            res.status(500).json({status: 'error', code: 500, message: e.message})
        }
    },

    async deleteCar(req, res) {
        try {
            const result = await carService.deleteCar(req.params.id)
            res.status(201).json(result)
        } catch (e) {
            res.status(500).json({status: 'error', code: 500, message: e.message})
        }
    }
}

module.exports = carController
