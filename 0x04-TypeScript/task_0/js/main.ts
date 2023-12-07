// the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

// Create 2 students
const std1: Student = {
  firstName: 'Galal',
  lastName: 'Aboelmagd',
  age: 22,
  location: 'Egy',
};

const std2: Student = {
  firstName: 'Dina',
  lastName: 'Elhadidy',
  age: 22,
  location: 'Egy',
};

// Create an array containing the 2 students
const studentsList: Student[] = [std1, std2];

// Render a table and append rows for each student
document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  studentsList.forEach(student => {
    const row = tbody.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
})
