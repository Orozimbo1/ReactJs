// 1- Criando a api
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
// 2- Criando a rota de post
app.post('/createproduct', (req, res) => {
  const { name, price } = req.body

  return res.json({produto: {name, price}})
})

app.listen(port, () => {
  console.log('Seridor rodando na porta: ' + port)
})