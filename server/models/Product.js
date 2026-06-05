const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    sku: {
      type: String,
      required: [true, 'Please provide a SKU'],
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: 0,
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide quantity'],
      default: 0,
      min: 0,
    },
    reorderLevel: {
      type: Number,
      default: 10,
    },
    supplier: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
