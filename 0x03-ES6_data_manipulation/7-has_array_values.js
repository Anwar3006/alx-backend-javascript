/* eslint-disable no-plusplus */
export default function hasValuesFromArray(mySet, myArray) {
  let state;
  for (let i = 0; i < myArray.length; i++) {
    state = mySet.has(myArray[i]);
  }
  return state;
}
