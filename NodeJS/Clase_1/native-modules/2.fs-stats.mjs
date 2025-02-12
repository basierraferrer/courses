import fs from 'node:fs'

const stats = fs.statSync('./archivo.txt')

console.log('🚀 ~ stats:',
  stats.isFile(), // Es archivo
  stats.isDirectory(), // Es un directorio
  stats.isSymbolicLink(), // Es un archivo simbolico
  stats.size
)
