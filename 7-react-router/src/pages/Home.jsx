import { Link } from 'react-router-dom';

import './Home.css'

import { useFetch } from '../hooks/useFetch'

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/products'

  const {data: items, loading, errors} = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {errors && <p>{errors}</p>}
      {loading && <p>Carregando...</p>}
      <ul className="products">
        {items && items.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>R$: {product.price}</p>
            {/* 4 - Rota dinâmica */}
            <Link to={`products/${product.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home