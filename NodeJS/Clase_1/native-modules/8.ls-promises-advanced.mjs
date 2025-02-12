import fs from 'node:fs/promises'
import path from 'node:path'
import pc from 'picocolors'

const folder = process.argv[2] ?? '.'
let files
try {
  files = await fs.readdir(folder)
} catch (error) {
  console.error(pc.red(`No se ha pudo leer el directorio ${folder}`))
  process.exit(1)
}

const filesPromises = files.map(async file => {
  const filePath = path.join(folder, file)
  let fileStat
  try {
    fileStat = await fs.stat(filePath)
  } catch (err) {
    console.error(pc.red(`No se ha pudo leer el archivo ${file}`))
    process.exit(1)
  }

  const isDirectory = fileStat.isDirectory()
  const fileType = isDirectory ? 'd' : 'f'
  const fileSize = fileStat.size.toString()
  const fileModified = fileStat.mtime.toLocaleString()
  return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(30))} ${pc.yellow(fileModified)}`
})

const filesInfo = await Promise.all(filesPromises)
filesInfo.forEach(fileInfo => console.log(fileInfo))
