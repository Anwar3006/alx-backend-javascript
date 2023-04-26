/**
 * Retrieves ids from a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
*/
export default function getListStudentIds(array1) {
  if (typeof array1 !== 'object') {
    return [];
  }
  return array1.map((key) => key.id);
}
