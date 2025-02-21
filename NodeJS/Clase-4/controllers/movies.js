import { MovieModel } from '../models/local/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  static async getAll (req, res) {
    const { genre } = req.query
    const movies = await MovieModel.getAll({ genre })
    res.json(movies)
  }

  static getMovieById = async (req, res) => {
    const { id } = req.params
    const movie = await MovieModel.getMovieById({ id })
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
  }

  static createMovie = async (req, res) => {
    const result = validateMovie(req.body)

    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMovie = await MovieModel.createMovie({ data: result.data })

    res.status(201).json(newMovie)
  }

  static deleteMovie = async (req, res) => {
    const { id } = req.params
    const deleted = await MovieModel.deleteMovie({ id })

    if (!deleted) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json({ message: 'Movie deleted' })
  }

  static updateMovie = async (req, res) => {
    const result = validatePartialMovie(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params
    const updated = await MovieModel.updatedMovie({ id, data: result.data })

    if (!updated.ok) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    return res.json(updated.data)
  }
}
