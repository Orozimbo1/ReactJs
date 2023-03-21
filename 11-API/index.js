const express = require('express')

const port = 3000
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

// rotas
app.get('/', (req, res) => {
  res.json({message: 'Primeira rota criada com sucesso!'})
})

app.listen(port, () => {
  console.log('Seridor rodando na porta: ' + port)
})