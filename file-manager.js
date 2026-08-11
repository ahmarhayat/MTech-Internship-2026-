const fs = require('fs');

const FILE_PATH = 'students.txt';

/**
 * Appends a line of student text data to the file synchronously.
 * @param {string} studentRecord 
 */
function appendRecord(studentRecord) {
  fs.appendFileSync(FILE_PATH, studentRecord + '\n', 'utf8');
}

/**
 * Reads and returns all student records from the file.
 * @returns {string[]} Array of record lines
 */
function readRecords() {
  if (!fs.existsSync(FILE_PATH)) {
    return [];
  }
  const content = fs.readFileSync(FILE_PATH, 'utf8').trim();
  return content ? content.split('\n') : [];
}

module.exports = {
  appendRecord,
  readRecords
};