const http = require('http')
const fs = require('fs')
const httpPort = 8080

function getType(_url) {
  var types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "svg+xml"
  }
  for (var key in types) {
    if (_url.endsWith(key)) {
      return types[key]
    }
  }
  return "text/plain"
}

http.createServer((req, res) => {
  console.log(req.url)
  let url = './' + req.url
  console.log(url)
  let rootDirectory = '/'
  if (req.url != rootDirectory && fs.existsSync(url)) {
    fs.readFile(url, (err, content) => {
      if (!err) {
        res.writeHead(200, {"Content-Type": getType(url)})
        res.end(content)
      } else {
        res.statusCode = 500
        res.end()
      }
    })
  } else {
    fs.readFile('index.html', 'utf-8', (err, content) => {
      if (err) {
        console.log('We cannot open "index.html" file.')
      }

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })

      res.end(content)
    })
  }
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
