import { useState } from 'react'

const ManageData = () => {
  let someData = 20

  const [number, setNumber] = useState(20)

  let aleatorio = Math.floor(Math.random() * 100)

  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(aleatorio)}>Mudar o valor</button>
    </div>
  )
}

export default ManageData