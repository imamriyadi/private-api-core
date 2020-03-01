const router = require('express').Router();
const Auth = require('../controller/auth')


router.post('/auth', function (req, res, next) {
    Auth.login(req, res);
})

router.post('/insert',  function (req, res, next) {
     Auth.register(req, res);
})


module.exports = router;