const router = require('express').Router();
const sampleController = require('../controllers/sampleController');

router
    .get('', sampleController.root)
    .get('/getsample', sampleController.getSample)

module.exports = router;