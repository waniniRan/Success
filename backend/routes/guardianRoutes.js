const express = require('express');
const { getChildren } = require('../controllers/guardianController');
const router = express.Router();

router.get('/:guardianId/children', getChildren);

module.exports = router;
