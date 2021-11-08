const express = require('express');
const updateController = require('../controllers/updateController');

const router = express.Router();

router.put('/:id', updateController.updateUser);

module.exports = router;