import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(_request, response) {
    readDatabase(process.argv[2]).then((fieldCounts) => {
      Object.entries(fieldCounts).forEach(([field, { count, list }]) => {
        res += `\nNumber of students in ${field}: ${count}. List: ${list.join(', ')}`;
        response.send(`This is the list of our students\n${res}`);
      });
    }).catch((error) => {
        // Handle errors related to reading the database file
        response.status(500);
        response.send(error.message);
      });
  }
  
  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2]).then((fieldCounts) => {
        response.send(`List: ${fieldCounts[major].list.join(', ')}`);
    }).catch((error) => {
        // Handle errors related to reading the database file
        response.status(500);
        response.send(error.message);
      });
  }
}
