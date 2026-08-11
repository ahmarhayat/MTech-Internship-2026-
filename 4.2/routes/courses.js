const express = require('express');
const router = express.Router();

let courses = [
  { id: 1, title: 'Web Development' },
  { id: 2, title: 'Data Structures' }
];

// GET /api/courses
router.get('/', (req, res) => {
  res.status(200).json(courses);
});

// POST /api/courses
router.post('/', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newCourse = { id: courses.length + 1, title: req.body.title };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

module.exports = router;