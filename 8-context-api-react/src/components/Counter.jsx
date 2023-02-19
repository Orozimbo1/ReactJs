// 3 - alterando o contexto
import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Adicione valor ao contador</button>
    </div>
  )
}

export default Counter