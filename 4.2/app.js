const express = require('express');
const app = express();

// Import Router modules
const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');

app.use(express.json());

// Mount Routers with clean route prefixes
app.use('/api/courses', coursesRouter);
app.use('/api/students', studentsRouter);

app.listen(3000, () => console.log('Task 4 App running on http://localhost:3000'));