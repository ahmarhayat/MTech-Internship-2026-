const fs = require('fs').promises;

async function appendToFile(filePath, data) {
  await fs.appendFile(filePath, data + '\n', 'utf8');
}

async function readFileContents(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      return '';
    }
    throw error;
  }
}

module.exports = { appendToFile, readFileContents };