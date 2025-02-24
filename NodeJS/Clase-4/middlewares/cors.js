import cors from 'cors'
/**
 * Métodos normales: GET/HEAD/POST
 * Métodos complejos: PUT/PATCH/DELETE
 * CORS PRE-Flight -> OPTIONS
 */
const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:1234',
  'https://movies.com'
]
export const middlewareCors = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
