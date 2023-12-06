export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((item) => item.location === city).map((item) => {
    item.grade = newGrades.filter((grade) => grade.studentId === item.id)[0]?.grade;
    if (!item.grade) {
      item.grade = 'N/A';
    }
    return item;
  })
}