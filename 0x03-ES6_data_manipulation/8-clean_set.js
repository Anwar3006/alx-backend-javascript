export default function cleanSet(mySet, startString) {
  // mySet has values that begin with startString
  // remove the occurrence of startString from all values
  // create a string with the updated values separated by -
  if (typeof startString === 'string') {
    let myStr = [];
    mySet.forEach((value) => {
      if (value.startsWith(startString)) {
        const slen = startString.length;
        element = `${value.slice(slen, value.length)}`;
        myStr.push(element);
      }
    });
    return myStr.join('-');
  }
  return '';
}
