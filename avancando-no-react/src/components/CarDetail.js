const CarDetail = ({ brand, km, model, year, color }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Modelo: {model}</li>
        <li>Ano: {year}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  )
}

export default CarDetail