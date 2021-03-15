'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const rootController = require('./controllers/root')
const carController = require('./controllers/car')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ------------- start router -------------------------
app.get('/hc', rootController.getRoot)
app.get('/car', carController.getCar)
app.get('/car/:id', carController.getOneCar)
app.post('/car', carController.postCar)
app.put('/car/:id', carController.patchCar)
app.delete('/car/:id', carController.deleteCar)
// ----------- end router ------------------------------

const port = 3033

try {
    app.listen(port, () => { console.log(`App listening at http://localhost:${port}`) })
} catch(e) {
    console.log(e.message)
}
