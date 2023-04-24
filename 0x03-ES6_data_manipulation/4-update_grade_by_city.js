export default function updateStudentGradeByCity(students, city, grades) {
  if (typeof students !== 'object') {
    throw new TypeError('First argument must be an array of objects');
  }
  if (typeof city !== 'string') {
    throw new TypeError('Second argument must be a string');
  }
  if (typeof grades !== 'object') {
    throw new TypeError('Argument must be a array of objects');
  }
  const defaultGrade = { grade: 'N/A' };
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (grades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
