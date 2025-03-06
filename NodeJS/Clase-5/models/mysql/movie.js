import mysql from 'mysql2'

const config = {
  host: 'localhost',
  user: 'root',
  port: '33060',
  password: 'exampleRoot1234',
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      const lowerGenre = genre.toLowerCase()
      const [dataGenre] = await connection.promise().query('SELECT id from genre WHERE LOWER(name) = ?;', [lowerGenre])
      if (dataGenre.length === 0) return []
      const movies = await connection.promise().query(`SELECT BIN_TO_UUID(m.id) id, m.title title, m.director director, m.year year, m.duration duration, m.poster poster, m.rate rate 
        FROM movie m JOIN movies_genres mg ON mg.movie_id = m.id AND mg.genre_id = ?;`, [dataGenre[0].id])
      return movies[0]
    }

    const movies = await connection.promise().query('SELECT BIN_TO_UUID(id) id, title, director, year, duration, poster, rate FROM movie')
    return movies[0]
  }

  static async getById ({ id }) {
    const movies = await connection.promise().query('SELECT BIN_TO_UUID(id) id, title, director, year, duration, poster, rate FROM movie WHERE id = UUID_TO_BIN(?);', [id])
    if (movies.length === 0) return null
    return movies[0]
  }

  static async create ({ data }) {
    const { title, genre, year, duration, director, rate, poster } = data
    const [uuidResult] = await connection.promise().query('SELECT UUID_TO_BIN(UUID()) binId;')
    const [{ binId }] = uuidResult

    try {
      await connection.promise().query('INSERT INTO movie(id,title, year, director, duration, poster, rate) VALUES (?,?,?,?,?,?,?)', [binId, title, year, director, duration, poster, rate])
    } catch (error) {
      throw new Error('Error al crear pelicula')
    }

    try {
      // Get genre IDs and create new relationships
      let genreIds = await Promise.all(
        genre.map(
          async name => connection.promise().query('SELECT id FROM genre WHERE name = ?;', [name])
        )
      )

      genreIds = genreIds.map(([[{ id }]]) => id)

      // Insert new genre relationships
      await Promise.all(
        genreIds.map(async (genreId) =>
          connection.promise().query(
            'INSERT INTO movies_genres(movie_id, genre_id) VALUES(?, ?)',
            [binId, genreId]
          )
        )
      )
    } catch (error) {
      throw new Error('Error con los géneros')
    }

    const movie = await connection.promise().query('SELECT BIN_TO_UUID(id) id, title, director, year, duration, poster, rate FROM movie WHERE id = ? ;', [binId])
    return movie[0]
  }

  static async delete ({ id }) {
    try {
      // Borrar movies_genre
      await connection.promise().query('DELETE FROM movies_genres WHERE movie_id = UUID_TO_BIN(?);', [id])
    } catch (error) {
      console.log('**__** ~ MovieModel ~ delete ~ error:', error)
      throw new Error('Error al tratar de borrar la relación con género')
    }

    try {
      // borrar movies
      await connection.promise().query('DELETE FROM movie WHERE id = UUID_TO_BIN(?);', [id])
    } catch (error) {
      console.log('**__** ~ MovieModel ~ delete ~ error:', error)
      throw new Error('Error al tratar de borrar la película')
    }
  }

  static async updated ({ id, data }) {
    const { title, genre, year, duration, director, rate, poster } = data

    try {
      // Update movie information
      await connection.promise().query(
        'UPDATE movie SET title = ?, year = ?, director = ?, duration = ?, poster = ?, rate = ? WHERE id = UUID_TO_BIN(?)',
        [title, year, director, duration, poster, rate, id]
      )
    } catch (error) {
      throw new Error('Error al actualizar la película')
    }

    try {
      // Delete existing genre relationships
      await connection.promise().query('DELETE FROM movies_genres WHERE movie_id = UUID_TO_BIN(?);', [id])
    } catch (error) {
      throw new Error('Error al tratar de borrar la relación con género')
    }

    try {
      // Get genre IDs and create new relationships
      const genreIds = await Promise.all(
        genre.map(
          async name => connection.promise().query('SELECT id FROM genre WHERE name = ?;', [name])
        )
      )

      // Insert new genre relationships
      await Promise.all(genreIds.map(async ([[{ id: genreId }]]) =>
        await connection.promise().query(
          'INSERT INTO movies_genres(movie_id, genre_id) VALUES(UUID_TO_BIN(?), ?)',
          [id, genreId]
        )
      ))
    } catch (error) {
      throw new Error('Error al tratar de crear la relación con género')
    }

    try {
      const [updatedMovie] = await connection.promise().query(
        'SELECT BIN_TO_UUID(id) id, title, director, year, duration, poster, rate FROM movie WHERE id = UUID_TO_BIN(?);',
        [id]
      )
      return updatedMovie[0]
    } catch (error) {
      throw new Error('Error al tratar de obtener la película actualizada')
    }
  }
}
