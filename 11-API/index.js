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
  // 3- Adicionando status nas respostas
  res.status(200).json({message: 'Primeira rota criada com sucesso!'})
})
// 2- Criando a rota de post
app.post('/createproduct', (req, res) => {
  const { name, price } = req.body

  // 3- Adicionando status nas respostas
  if(!name) {
    return res.status(422).json({message: 'O campo nome é obrigatório.'})
  }
  if(!price) {
    return res.status(422).json({message: 'O campo nome é obrigatório.'})
  }
  // 3- Adicionando status nas respostas
  return res.status(201).json({produto: {name, price}})
})

app.listen(port, () => {
  console.log('Seridor rodando na porta: ' + port)
})