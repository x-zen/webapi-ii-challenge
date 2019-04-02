const express = require('express'); // import the express package

const postRoutes = require('./posts/postRoutes'); // import the post endpoints

const server = express(); // creates the server

server.use(express.json()); // add this to make POST and PUT work


// handle request to the root of the API
server.get('/', (req, res) => {
  res.send('Hello from the Posts Challenge API');
});

// assigns the route for post endpoints
server.use('/api/posts', postRoutes);

// watch for connections on port 3000
server.listen(3000, () =>
  console.log('\n** Server running on http://localhost:3000 **')
);
