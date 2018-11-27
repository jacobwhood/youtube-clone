const express = require('express');
const router = express.Router();
const db = require('../util/database.js');

// GET /api/database/
router.get('/', (req, res) => {
  res.send('hit endpoint /api/database/');
});


module.exports = router;
