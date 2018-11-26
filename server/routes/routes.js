// import youtube and database routes from respective files
// import their actions from util folder

const express = require('express');
const router = express.Router();

const youtubeRoutes = require('./youtube-routes');
const databaseRoutes = require('./database-routes');

router.use('/youtube', youtubeRoutes);
router.use('/database', databaseRoutes);

router.get('/', (req, res) => {
  console.log('hit endpoint: /api/');
  res.sendStatus(200);
});


module.exports = router;
