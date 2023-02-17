import { useParams } from 'react-router-dom'

import './Product.css'

const Product = () => {
  // 4 - Rota dinâmica
  const { id } = useParams()

  return (
    <div>
      <h2>Id do produto: {id}</h2>
    </div>
  )
}

export default Product