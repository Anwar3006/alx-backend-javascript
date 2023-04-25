export default function getListStudentIds(array1) {
  if (typeof array1 !== 'object') {
    return [];
  }
  return array1.map((key) => key.id);
}
