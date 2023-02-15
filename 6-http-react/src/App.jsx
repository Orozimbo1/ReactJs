import { useState, useEffect } from 'react'

import './App.css'

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - resgatando dados
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fetchData()
  }, [])

  // 2 - Adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - R$: {product.price}
        </li>  
      ))}
      </ul>
      <div className="add-products">
        <h2>Cadastrar Produto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  )
}

export default App
