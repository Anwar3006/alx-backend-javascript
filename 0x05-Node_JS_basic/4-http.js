const app = require('http');

app.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.statusCode = 200;
  res.end();
})
  .listen(1245);

module.exports = app;
