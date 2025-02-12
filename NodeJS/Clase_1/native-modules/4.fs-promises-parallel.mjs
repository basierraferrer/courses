import fs from 'node:fs/promises'

console.log('________ FS - Promises ________')
console.log('1. Leyendo archivos')
const promises = Promise.all([
  fs.readFile('./archivo.txt', 'utf-8'),
  fs.readFile('./archivo_2.txt', 'utf-8')
])
console.log('**__** ~ value primer archivo:', promises[0])
console.log('**__** ~ value segundo archivo:', promises[1])
console.log('________________________________')
