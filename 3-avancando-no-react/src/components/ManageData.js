import { useState } from 'react'

const ManageData = () => {

  const [number, setNumber] = useState(20)

  let random = Math.floor(Math.random() * 100)

  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(random)}>Mudar o valor</button>
    </div>
  )
}

export default ManageData