const express = require('express');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    // Parse the CSV data
    const students = [];
    const lines = data.split('\n');
    lines.shift();
    lines.forEach((line) => {
      if (line.trim() !== '') {
        const firstName = line.split(',').shift();
        const field = line.split(',').pop();
        students.push({ firstName, field });
      }
    });

    // Count the number of students in each field
    const fieldCounts = {};
    students.forEach((student) => {
      const { field, firstName } = student;
      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 1, list: [firstName] };
      } else {
        fieldCounts[field].count += 1;
        fieldCounts[field].list.push(firstName);
      }
    });

    // Log the results to the console
    let res = `Number of students: ${students.length}`;
    Object.entries(fieldCounts).forEach(([field, { count, list }]) => {
      res += `\nNumber of students in ${field}: ${count}. List: ${list.join(', ')}`;
    });

    // Resolve the promise with the results
    resolve(res);
  } catch (error) {
    console.log(error);
    // Reject th e promise with an error if the database is not available
    reject(new Error('Cannot load the database'));
  }
});
const app = express();
app.get('/', (_req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', (_req, res) => {
  // Display the list of students
  countStudents(process.argv[2]).then((students) => {
    res.end(`This is the list of our students\n${students}`);
  }).catch((error) => {
    // Handle errors related to reading the database file
    res.end(`This is the list of our students\n${error.message}`);
  });
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
