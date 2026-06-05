const express = require('express');
const router = express.Router();

// TODO: Implement product routes
// GET / - Get all products
// GET /:id - Get product by ID
// POST / - Create new product
// PUT /:id - Update product
// DELETE /:id - Delete product

router.get('/', (req, res) => {
  res.json({ message: 'Products routes - to be implemented' });
});

module.exports = router;
