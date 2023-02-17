import { useParams, Link } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch'

const Product = () => {
  // 4 - Rota dinâmica
  const { id } = useParams()

  // 5 - Carregamento de dado individual
  const url = `http://localhost:3000/products/${id}`

  const {data: product, loading, errors} = useFetch(url)

  return (
    <div>
      <h2>Id do produto: {id}</h2>
      {errors && <p>Ocorreu um erro.</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <h3>RS: {product.price}</h3>
          {/* 6 - Nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  )
}

export default Product