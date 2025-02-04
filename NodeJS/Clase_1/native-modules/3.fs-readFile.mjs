import fs from 'node:fs';



/**
 * Método sincrono 
 */
console.log('_______ FS - Sincrono ______');
console.log('1. Leyendo primer archivo');
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log("🚀 ~ value primer archivo:", text);

console.log('2. Haciendo cosas miestras lee el primer archivo');

console.log('3. Leyendo segundo archivo');
const scText = fs.readFileSync('./archivo_2.txt', 'utf-8');
console.log("🚀 ~ value segundo archivo::", scText);
console.log('____________________________')
console.log('\n');

/**
 * Método asincrono 
 */
console.log('________ FS - Asincrono ________');
console.log('1. Leyendo primer archivo');
fs.readFile('./archivo.txt', 'utf-8', (err,data)=>{
    console.log("🚀 ~ value primer archivo:", data);    
});

console.log('2. Haciendo cosas miestras lee el primer archivo');

console.log('3. Leyendo segundo archivo');
fs.readFile('./archivo_2.txt', 'utf-8', (err,data)=>{
    console.log("🚀 ~ value segundo archivo:", data);    
});
console.log('____________________________');
