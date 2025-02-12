import net from 'node:net'
import pc from 'picocolors'

export function findAvailablePort (desirePort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desirePort, () => {
      const { port } = server.address()
      server.close(() => resolve(port))
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(pc.yellow(`--- Puerto ${desirePort} ocupado, buscando otro ---`))
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}
