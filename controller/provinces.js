const modelProvinces = require('../models');

class provinces {
    static get(req, res) {
       modelProvinces.provices.findAll({}).then(function (data) {
           res.json({
               status: 'success',
               message: 'Data Success Get All',
               data: data
           })
       }).catch(function (err) {
           res.status(400).json({
               status: 'error',
               message: err.message,
               data: {}
           })
       });
    }
}

module.exports = provinces;