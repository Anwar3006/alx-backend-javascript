export default function getStudentsByLocation(array1, city) {
  if (typeof array1 !== 'object') {
    throw new TypeError('First argument must be a list');
  }
  if (typeof city !== 'string') {
    throw new TypeError('Second argument must be a string');
  }

  return array1.filter((index) => index.location === city);
}
