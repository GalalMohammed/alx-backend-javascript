const fs = require('fs');

module.exports = (path) => {
  try {
    // Read the CSV file synchronously
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
    console.log(`Number of students: ${students.length}`);
    Object.entries(fieldCounts).forEach(([field, { count, list }]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    });
  } catch (error) {
    // Throw an error if the database is not available
    throw new Error('Cannot load the database');
  }
};
