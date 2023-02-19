// import { useContext } from "react"

// import { CounterContext } from "../context/CounterContext"

// 4 - refatorando o context par hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

import { Counter } from "../components"

const Home = () => {
  // const { counter } = useContext(CounterContext)

  // 4 - refatorando o context par hook
  const {counter} = useCounterContext()

  // 5 - context complexo
  const {color} = useTitleColorContext()
  console.log(color)

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <h2>O valor do contador é: {counter}</h2>
      {/* 3 - alterando o valor do contexto */}
      <Counter />
    </div>
  )
}

export default Home