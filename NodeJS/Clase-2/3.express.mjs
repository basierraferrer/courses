import express from 'express'

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

// Middleware basic explicado
/* app.use((req, res, next) => {
  console.log('Mi primer middleware')

  if (req.method !== 'POST') next()
  if (req.headers['content-type'] !== 'application/json') next()

  // SOLO llegan peticiones POST y que tengan json
  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data
    next()
  })
}) */

// Middleware de express para JSON
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi Página</h1>')
})

// Usando el middleware basic explicado
/* app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
}) */

// usando el middleware de express para json
app.post('/pokemon', (req, res) => {
  const data = req.body
  data.timestamp = Date.now()
  res.status(201).json(data)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
