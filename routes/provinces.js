const express = require('express');
const router = express.Router();
const ControllerProvinces = require('../controller/provinces');

router.get('/', function (req, res, next) {
    ControllerProvinces.get(res, res);
})

router.post('/', function (req, res, next) {

})

router.put('/', function (req, res, next) {

})

router.delete('/', function (req, res, next) {

})

module.exports = router;