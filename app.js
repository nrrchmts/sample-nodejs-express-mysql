const http = require('http');
const fs = require('fs');

const  renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Error: File not found!');
    } else {
      res.write(data);
    }
    res.end();
  })
}