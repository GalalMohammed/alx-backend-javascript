import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
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

    // Resolve the promise with the results
    resolve(fieldCounts);
  } catch (error) {
    // Reject th e promise with an error if the database is not available
    reject(new Error('Cannot load the database'));
  }
});

export default readDatabase;
