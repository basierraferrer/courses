import fs from 'node:fs'

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('**__** ~ fs.readdir ~ err:', err)
    return
  }

  files.forEach(file =>
    console.log('**__** ~ fs.readdir ~ file:', file)
  )
})
