const express = require('express');
const router = express.Router();
const controller = require('./database/dbController');

router.post("/", controller.adicionarDados);

module.exports = router;