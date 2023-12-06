export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((prev, item) => prev + item.id, 0);
}
