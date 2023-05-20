const express = require('express');
const router = express.Router();
const { registerPePe, getPePe } = require('../controllers/pepeController');

// Routes
router.post('/pepes', registerPePe);
router.get('/pepes/:pepeId', getPePe);

module.exports = router;
