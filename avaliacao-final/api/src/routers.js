const express = require('express');
const router = express.Router();
const controller = require('./database/dbController');

router.get('/', controller.listarDados);

router.post("/", controller.AdicionarDados);

router.delete("/:index", controller.deletarDados);

module.exports = router;