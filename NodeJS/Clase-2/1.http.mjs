import http from 'node:http'
import fs from 'node:fs'

const desirePort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8;')
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen-meme.jpeg') {
    fs.readFile('./images.jpeg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  } else if (req.url === '/contact') {
    res.statusCode = 200 // OK
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desirePort, () => {
  console.log(` Server listening on port http://localhost:${desirePort} `)
})
