import express, { json } from 'express'
import { createMovieRouter } from './routes/movies.js'
import { middlewareCors } from './middlewares/cors.js'
import { MovieModel } from './models/mysql/movie.js'

export const createApp = ({ movieModel }) => {
  const app = express()

  app.use(json())

  app.use(middlewareCors())
  app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

  app.use('/movies', createMovieRouter({ movieModel: MovieModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
