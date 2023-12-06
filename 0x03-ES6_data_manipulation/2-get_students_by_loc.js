export default function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((item) => item.location === city);
}
