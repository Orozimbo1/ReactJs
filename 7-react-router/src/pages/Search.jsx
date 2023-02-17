import { useSearchParams, Link } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch'

const Search = () => {
  const [searchParams] = useSearchParams()

  const url = `http://localhost:3000/products?${searchParams}`

  const {data: items, loading, errors} = useFetch(url)


  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {errors && <p>Ocorreu um erro.</p>}
      {loading && <p>Carregando...</p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>R$: {product.price}</p>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default Search