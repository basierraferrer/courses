import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required'
  }),
  year: z.number().int().min(1900).max(2025),
  director: z.string(),
  duration: z.number().int().min(1),
  rate: z.number().int().min(0).max(10).default(0),
  poster: z.string().url({
    message: 'Movie poster must be a valid URL'
  }),
  genre: z.array(z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Sci-Fi', 'Crime']), {
    required_error: 'Movie genre is required',
    invalid_type_error: 'Movie genre must be an array of strings',
    invalid_enum_error: 'Movie genre must be one of the following: Action, Adventure, Comedy, Drama, Fantasy, Horror, Mystery, Thriller, Western, Sci-Fi'
  })
})

export function validateMovie (movie) {
  return movieSchema.safeParse(movie)
}

export function validatePartialMovie (movie) {
  return movieSchema.partial().safeParse(movie)
}
