const fs = require('fs');

/*
 * REAL SERVER EXPLANATION:
 * Synchronous calls (e.g., fs.readFileSync) block the single-threaded Node.js Event Loop.
 * While a synchronous read/write operation is processing, the entire server freezes and 
 * cannot process incoming requests from other users. 
 * Using asynchronous callbacks ensures the file operation is delegated to libuv worker threads, 
 * keeping the main event loop free to handle concurrent client requests.
 */

function appendAsync(filePath, data, callback) {
  // Asynchronous non-blocking file write
  fs.appendFile(filePath, data + '\n', 'utf8', (err) => {
    if (err) return callback(err);
    callback(null, 'Data appended successfully.');
  });
}

function readAsync(filePath, callback) {
  // Asynchronous non-blocking file read
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') return callback(null, ''); // Return empty string if file doesn't exist
      return callback(err);
    }
    callback(null, data);
  });
}

// Example usage using asynchronous nested callbacks
appendAsync('./async_students.txt', 'S201,David,Physics', (err, res) => {
  if (err) return console.error('Error writing:', err);
  console.log(res);

  readAsync('./async_students.txt', (err, content) => {
    if (err) return console.error('Error reading:', err);
    console.log('File Content:\n' + content);
  });
});