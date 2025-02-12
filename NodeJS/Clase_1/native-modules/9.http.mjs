import http from 'node:http'
import pc from 'picocolors'
import { findAvailablePort } from './10.free-port.mjs'

const { PORT } = process.env ?? 3000

const server = http.createServer((req, res) => {
  console.log('Request recived')
  res.end('Hola Mundo')
})

findAvailablePort(PORT).then(port => {
  server.listen(port, () => {
    console.log(pc.bgBlue(pc.white(` Server listening on port http://localhost:${port} `)))
  })
})
