const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  console.log('hit endpoint: /api/');
  res.sendStatus(200);
});


export default router;
