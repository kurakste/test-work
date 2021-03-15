'use strict'

const knex = require('knex')

const db = knex({
    client: 'sqlite',
    connection: {filename: './data/test-work.db'}
})

module.exports = db
