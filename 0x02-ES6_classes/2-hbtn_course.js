export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name, 'Name');
    this._length = HolbertonCourse.validateNumber(length, 'Length');
    this._students = HolbertonCourse.validateArrayOfStrings(students, 'Students');
  }

  static validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }

  static validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propertyName} must be a number`);
    }
    return value;
  }

  static validateArrayOfStrings(value, propertyName) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${propertyName} must be an array of strings`);
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse.validateString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse.validateNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse.validateArrayOfStrings(newStudents, 'Students');
  }
}
