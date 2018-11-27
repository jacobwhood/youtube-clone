const express = require('express');
const router = express.Router();
const youtubeUtil = require('../util/youtube.js');

// GET /api/youtube/search
router.get('/search', (req, res) => {
  youtubeUtil.searchVideos(req.query.query, (err, videos) => {
    if (err) {
      console.log('Error in Youtube util searchVideos cb: ', err);
      res.sendStatus(500);
    } else {
      res.send(videos);
    }
  });
});


module.exports = router;
