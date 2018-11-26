const express = require('express');
const router = express.Router();
const youtubeApi = require('googleapis').google.youtube('v3');

// GET /api/youtube/search
router.get('/search', (req, res) => {
  const { query } = req.query;

  const options = {
    key: process.env.YOUTUBE_API_KEY,
    maxResults: 10,
    part: 'snippet',
    q: query,
    type: 'video'
  };

  youtubeApi.search.list(options, (err, response) => {
    if (err) {
      console.log('error retreiving search results from Youtube APi: ', err);
      res.send(err);
    } else {
      res.send(response.data);
    }
  });
});


module.exports = router;
