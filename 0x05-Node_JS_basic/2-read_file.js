const fs = require('fs');
const csv = require('csv-parser');

const countStudents = (file) => {
  // check if file exists
  if (!fs.existsSync(file)) {
    throw new Error('Cannot load the database');
  } else {
    const allDataCSV = [];
    const CSfolk = new Set();
    const SWEfolk = new Set();
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (data) => {
        allDataCSV.push(data);
        for (const element of allDataCSV) {
          if (element.field === 'CS') {
            CSfolk.add(element.firstname);
          } else if (element.field === 'SWE') {
            SWEfolk.add(element.firstname);
          }
        }
      })
      .on('end', () => {
        console.log(`Number of students: ${allDataCSV.length}`);
        console.log(`Number of students in CS: ${CSfolk.size}. List: ${(Array.from(CSfolk)).join(', ')}`);
        console.log(`Number of students in SWE: ${SWEfolk.size}. List: ${(Array.from(SWEfolk)).join(', ')}`);
      });
  }
};

module.exports = countStudents;
