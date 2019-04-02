const express = require('express'); // import the express package

const postRoutes = require('./posts/postRoutes'); // import the post endpoints

const server = express(); // creates the server

// handle request to the root of the API
server.get('/', (req, res) => {
  res.send('Hello from the Posts API');
});

// assigns the route for post endpoints
server.use('/api/posts', postRoutes);

// watch for connections on port 3000
server.listen(3000, () =>
  console.log('\n** Server running on http://localhost:3000 **');
);
