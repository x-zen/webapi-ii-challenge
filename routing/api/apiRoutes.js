const express = require('express'); // import the express package

const postRoutes = require('../posts/postRoutes'); // import the post endpoints

const router = express.Router(); // creates the route


// handle request to the /api endpoint
router.get('/', (req, res) => {
  const d = Date();
  const now = d.toString();
  res.send('Posts Challenge API: It is currently '+ now);
});

// assigns the route for post endpoints
router.use('/posts', postRoutes);


module.exports = router; // exports the route
