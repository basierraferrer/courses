import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
/**
 * ES modules handle files .json
 * 1. using fs modules
 * import fs from 'node:fs'
 * const movies = fs.readFileSync('./movies.json', 'utf-8')
 *
 * 2. using createRequire (recomendada por el momento)
 * import { createRequire } from 'node:module'
 * const require = createRequire(import.meta.url)
 * const movies = require('./movies.json')
 */

export const readJSON = (path) => require(path)
