const express = require('express');

const postRoutes = require('./posts/postRoutes');

const server = express();

server.use('/api/posts', postRoutes);

server.get('/', (req, res) => {
  res.send('Hello from the Posts API');
});

server.listen(3000, () =>
  console.log('\n** Server running on http://localhost:3000 **');
);
