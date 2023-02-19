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
  const {color, dispatch} = useTitleColorContext()

  // 6 - alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <div>
        <button onClick={() => setTitleColor('ORIGINAL')}>Original</button>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
      <h2>O valor do contador é: {counter}</h2>
      {/* 3 - alterando o valor do contexto */}
      <Counter />
      {/* 6 - alterando context complexo */}
    </div>
  )
}

export default Home