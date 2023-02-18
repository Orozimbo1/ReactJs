import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

import { Counter } from "../components"

const About = () => {
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Sobre</h1>
      <h2>O valor do contador é: {counter}</h2>
      {/* 3 - alterando o valor do contexto */}
      <Counter />
    </div>
  )
}

export default About