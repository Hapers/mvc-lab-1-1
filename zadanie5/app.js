const http = require('http');
const student = require('./student');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>About student</title></head>
      <body>
        <p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});