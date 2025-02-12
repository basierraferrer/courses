import fs from 'node:fs/promises'

console.log('________ FS - Promises ________')
console.log('1. Leyendo primer archivo')
const file1 = await fs.readFile('./archivo.txt', 'utf-8')
console.log('**__** ~ value primer archivo:', file1)

console.log('2. Leyendo segundo archivo')
const file2 = await fs.readFile('./archivo_2.txt', 'utf-8')
console.log('🚀 ~ value segundo archivo:', file2)
console.log('________________________________')

/**
 * Common JS
 */

// (
//     async ()=>{
//         console.log('________ FS - Promises ________');
//         console.log('1. Leyendo primer archivo');
//         const file1 = await fs.readFile('./archivo.txt', 'utf-8');
//         console.log("**__** ~ value primer archivo:", file1)

//         console.log('2. Leyendo segundo archivo');
//         const file2 = await fs.readFile('./archivo_2.txt', 'utf-8');
//         console.log("🚀 ~ value segundo archivo:", file2)
//         console.log('________________________________');
//     }
// )()
