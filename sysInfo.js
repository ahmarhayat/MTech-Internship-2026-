const os = require('os');
const path = require('path');

// 1. OS Info
console.log('OS Platform:', os.platform());
console.log('Total Memory (Bytes):', os.totalmem());
console.log('Total Memory (GB):', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');

// 2. Safe Cross-Platform Path Construction
const safePath = path.join('user', 'documents', 'reports', 'student.txt');
console.log('Constructed Path:', safePath);