const express = require('express')
const router = express.Router()
const {
    getWeatherLocation
} = require('../controllers/weatherController')


router.route('/').get(getWeatherLocation)

module.exports = router