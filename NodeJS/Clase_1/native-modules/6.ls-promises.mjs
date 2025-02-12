import fs from 'node:fs/promises'

fs.readdir('.')
  .then(files => {
    files.forEach(file =>
      console.log('**__** ~ fs.readdir ~ file:', file)
    )
  })
  .catch(err => {
    if (err) {
      console.error('**__** ~ fs.readdir ~ err:', err)
    }
  })
