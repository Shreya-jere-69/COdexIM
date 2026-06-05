const express = require('express');
const router = express.Router();

// TODO: Implement inventory routes
// GET / - Get all inventory transactions
// GET /stats - Get inventory statistics
// POST / - Create inventory transaction
// PUT /:id - Update inventory

router.get('/', (req, res) => {
  res.json({ message: 'Inventory routes - to be implemented' });
});

module.exports = router;
