import { Router } from 'express'

import { MovieController } from '../controllers/movies.js'

export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)
moviesRouter.post('/', MovieController.createMovie)

moviesRouter.get('/:id', MovieController.getMovieById)
moviesRouter.delete('/:id', MovieController.deleteMovie)
moviesRouter.patch('/:id', MovieController.updateMovie)
