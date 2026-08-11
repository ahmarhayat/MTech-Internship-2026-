const express = require('express');
const router = express.Router();

let students = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' }
];

// GET /api/students
router.get('/', (req, res) => {
  res.status(200).json(students);
});

// POST /api/students
router.post('/', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const newStudent = { id: students.length + 101, name: req.body.name };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

module.exports = router;