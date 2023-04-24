export default function getListStudentIds(array1) {
  if (typeof array1 !== 'object') {
    return [];
  }
  const newArry = array1.map((key) => key.id);
  return newArry;
}
