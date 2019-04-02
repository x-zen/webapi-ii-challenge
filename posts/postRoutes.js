/* --- Routes for '/api/posts' --- */
const express = require('express'); // import the express package

const router = express.Router(); // creates the route

// POST - Creates a post using info sent in request body
router.post('/', (req, res) => {
 res.status().json();
})

// GET - Returns an array of all posts in database
router.get('/', (req, res) => {
 res.status().json();
})

// GET - Returns post with the specified ID
router.get('/:id', (req, res) => {
 res.status().json();
})

// DELETE - Deletes post with specified ID & returns deleted post
router.delete('/:id', (req, res) => {
 res.status().json();
})

// PUT - Updates post with specified ID & returns the moded post
router.put('/:id', (req, res) => {
 res.status().json();
})


module.exports = router; // exports the route
