export default function getStudentIdsSum(array1) {
  if (typeof array1 !== 'object') {
    throw new TypeError('First argument must be a list');
  }
  const initialValue = 0;
  return array1.reduce((accumulator, currentValue) => accumulator.id || accumulator + currentValue.id, initialValue);
}
