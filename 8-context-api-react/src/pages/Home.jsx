import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

const Home = () => {
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <h2>O valor do contador é: {counter}</h2>
    </div>
  )
}

export default Home