// import youtube and database routes from respective files
// import their actions from util folder

const express = require('express');
const router = express.Router();

const videoRoutes = require('./videos.js');

router.use('/videos', videoRoutes);

router.get('/', (req, res) => {
  console.log('hit endpoint: /api/');
  res.sendStatus(200);
});


module.exports = router;
