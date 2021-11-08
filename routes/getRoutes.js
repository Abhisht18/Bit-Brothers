const express = require('express');
const getController = require('../controllers/getController');

const router = express.Router();

router.get('/allUser', getController.getAlluser);
router.get('/user/:id', getController.getUser);

module.exports = router;