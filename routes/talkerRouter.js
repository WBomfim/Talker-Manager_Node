const express = require('express');
const handleErrors = require('../middlewares/handleErrors');
const talkerController = require('../controllers/talkers');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', handleErrors(talkerController.getAllTalkers));

router.post('/', validateToken, validateName, handleErrors());

router.get('/:id', handleErrors(talkerController.getTalkerById));

module.exports = router;
