const express = require('express');
const createController = require('../controllers/createController');


const router = express.Router();


router.post('/user', createController.createUser);

module.exports = router;