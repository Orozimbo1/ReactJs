import { useState } from 'react'

// hooks
import { usePrevious } from '../hooks'

const HookCustom = () => {
  const [number, setNumber] = useState(0)
  const preiousValue = usePrevious(number)

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {preiousValue}</p>

      <button onClick={() => setNumber(Math.random())}>Alterar</button>

      <hr />
    </div>
  )
}

export default HookCustom