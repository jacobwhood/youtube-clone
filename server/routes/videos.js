const express = require('express');
const router = express.Router();
const youtubeUtil = require('../util/youtube.js');
const db = require('../util/database.js');

// GET /api/videos/search
router.get('/search', (req, res) => {
  let { query } = req.query;

  youtubeUtil.searchVideos(query, (err, videos) => {
    if (err) {
      console.log('Error in Youtube util searchVideos cb: ', err);
      res.sendStatus(500);
    } else {
      res.send(videos);
    }
  });
});

// POST  /api/videos/like  (userId, videoId)
router.post('/like', (req, res) => {
  let { userId, videoId } = req.query;

});

// GET   /api/videos (userId)
router.get('/', (req, res) => {
  let { userId } = req.query;

});

module.exports = router;
