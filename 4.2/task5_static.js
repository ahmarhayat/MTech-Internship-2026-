const express = require('express');
const path = require('path');
const app = express();

// Serve all static assets from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional default endpoint
app.get('/', (req, res) => {
  res.send('Task 5: Static File Server is running. Access files at /<filename>');
});

app.listen(3000, () => {
  console.log('Task 5 running on http://localhost:3000');
});