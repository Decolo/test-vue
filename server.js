const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')

http.createServer((request, response) => {
  const _url = url.parse(request.url)
  let { pathname } = _url
  let content = ''

  if (pathname === '/') pathname = '/index.html'  
  switch (pathname) {
    case '/index.html': {
      content = fs.readFileSync(path.join(__dirname, './index.html'));
      response.write(content)
      response.end()
      return 
    }
    case '/index.js': {
      content = fs.readFileSync(path.join(__dirname, './index.js'));
      response.write(content)
      response.end()
      return 
    }
  }

}).listen(3000, () => console.log('server is started!!!!'))
