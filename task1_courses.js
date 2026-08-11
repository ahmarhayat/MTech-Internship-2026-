const express = require('express');
const app = express();

app.use(express.json());

let courses = [
  { id: 1, title: 'Web Development', category: 'Computer Science' },
  { id: 2, title: 'Data Structures', category: 'Computer Science' }
];

// GET /api/courses - List all
app.get('/api/courses', (req, res) => {
  res.status(200).json(courses);
});

// GET /api/courses/:id - Single with 404 handling
app.get('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return res.status(404).json({ error: `Course with ID ${courseId} not found.` });
  }
  res.status(200).json(course);
});

// POST /api/courses - Create new
app.post('/api/courses', (req, res) => {
  const newCourse = {
    id: courses.length ? courses[courses.length - 1].id + 1 : 1,
    title: req.body.title,
    category: req.body.category || 'General'
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.listen(3000, () => console.log('Task 1 running on http://localhost:3000'));