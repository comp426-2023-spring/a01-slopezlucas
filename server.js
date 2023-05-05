const http = require('http');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const port = argv.port || process.env.PORT || 3000;

fs.readFile('./public/index.html', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});