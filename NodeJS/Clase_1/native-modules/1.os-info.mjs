// ES modules
import { platform, release, arch, cpus, freemem, totalmem } from 'node:os'

console.log('Información del sistema operativo')
console.log('---------------------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura del SO', arch())
console.log('CPUs', cpus())
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() / 1024 / 1024)
