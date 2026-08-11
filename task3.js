const express = require('express');
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 1200 },
  { id: 2, name: 'Headphones', category: 'electronics', price: 150 },
  { id: 3, name: 'Coffee Maker', category: 'appliances', price: 80 },
  { id: 4, name: 'Smartphone', category: 'electronics', price: 800 },
  { id: 5, name: 'Blender', category: 'appliances', price: 50 }
];

// GET /api/products?category=electronics&sort=price
app.get('/api/products', (req, res) => {
  let result = [...products];
  const { category, sort } = req.query;

  // 1. Filter by category (if query parameter provided)
  if (category) {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // 2. Sort by price ascending (if query parameter provided)
  if (sort === 'price') {
    result.sort((a, b) => a.price - b.price);
  }

  res.status(200).json(result);
});

app.listen(3000, () => console.log('Task 3 running on http://localhost:3000'));