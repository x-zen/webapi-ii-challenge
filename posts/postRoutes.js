/* --- Routes for '/api/posts' --- */
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
 res.status().json();
})

router.get('/', (req, res) => {
 res.status().json();
})

router.get('/:id', (req, res) => {
 res.status().json();
})

router.delete('/:id', (req, res) => {
 res.status().json();
})

router.put('/:id', (req, res) => {
 res.status().json();
})


module.exports = router; //Leave as the last line
