export default function getStudentIdsSum(array1) {
  if (typeof array1 !== 'object') {
    return 0;
  }
  const initialValue = 0;
  return array1.reduce((accumulator, currentValue) => accumulator.id || accumulator + currentValue.id, initialValue);
}
