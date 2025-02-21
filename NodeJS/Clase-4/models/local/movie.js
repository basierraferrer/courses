import { randomUUID } from 'node:crypto'
import { readJSON } from '../../utils/index.js'
const movies = readJSON('../movies.json')

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      return movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return movies
  }

  static async getMovieById ({ id }) {
    return movies.find(movie => movie.id === id)
  }

  static async createMovie ({ data }) {
    // en base de datos
    const newMovie = {
      id: randomUUID(), // uuid v4
      ...data
    }

    // Esto no sería REST, porque estamos guardando
    // el estado de la aplicación en memoria
    movies.push(newMovie)

    return newMovie
  }

  static async deleteMovie ({ id }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) {
      return false
    }

    movies.splice(movieIndex, 1)

    return true
  }

  static async updatedMovie ({ id, data }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) {
      return {
        ok: false,
        data: undefined
      }
    }
    const updateMovie = {
      ...movies[movieIndex],
      ...data
    }

    movies[movieIndex] = updateMovie

    return {
      ok: true,
      data: updateMovie
    }
  }
}
