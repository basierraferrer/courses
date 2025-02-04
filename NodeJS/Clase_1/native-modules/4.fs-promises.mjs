import fs from 'node:fs/promises';

console.log('________ FS - Promises ________');
console.log('1. Leyendo primer archivo');
fs.readFile('./archivo.txt', 'utf-8').then(data => console.log("🚀 ~ value primer archivo:", data));

console.log('2. Haciendo cosas miestras lee el primer archivo');

console.log('3. Leyendo segundo archivo');
fs.readFile('./archivo_2.txt', 'utf-8').then(data => 
    console.log("🚀 ~ value segundo archivo:", data)
);
console.log('________________________________');
