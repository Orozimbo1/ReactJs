// import { useContext } from "react"

// import { CounterContext } from "../context/CounterContext"

// 4 - refatorando o context par hook
import { useCounterContext } from "../hooks/useCounterContext"

import { Counter } from "../components"

const Home = () => {
  // const { counter } = useContext(CounterContext)

  // 4 - refatorando o context par hook
  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <h2>O valor do contador é: {counter}</h2>
      {/* 3 - alterando o valor do contexto */}
      <Counter />
    </div>
  )
}

export default Home