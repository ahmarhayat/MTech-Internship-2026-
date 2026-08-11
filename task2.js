const express = require('express');
const app = express();

app.use(express.json());

// Custom Middleware: Reject POST missing 'title'
function validateTitle(req, res, next) {
  if (!req.body || !req.body.title || req.body.title.trim() === '') {
    return res.status(400).json({ error: 'Bad Request: "title" field is required.' });
  }
  next();
}

let courses = [{ id: 1, title: 'Software Engineering' }];

app.post('/api/courses', validateTitle, (req, res) => {
  const newCourse = { id: courses.length + 1, title: req.body.title };
  courses.push(newCourse);
  res.status(201).json({ message: 'Course added successfully', course: newCourse });
});

app.listen(3000, () => console.log('Task 2 running on http://localhost:3000'));