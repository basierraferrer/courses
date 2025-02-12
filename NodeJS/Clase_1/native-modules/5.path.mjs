import path from 'node:path'

/**
 * separator
 * unix -> /
 * windows -> \
 */

// separador segun SO
console.log('separator: ', path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log('**__** ~ filePath:', filePath)

// base
const base = path.basename(filePath)
console.log('**__** ~ base:', base)

// fileName
const fileName = path.basename(filePath, '.txt')
console.log('**__** ~ fileName:', fileName)

// extension
const extension = path.extname(path.basename(filePath))
console.log('**__** ~ extension:', extension)
