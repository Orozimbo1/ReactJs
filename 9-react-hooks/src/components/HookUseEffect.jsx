import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  //  1- useEffect, sem dependências -> Será executado toda vez que o componente é renderizado
  useEffect(() => {
    console.log('Estou sendo executado!')
  })

  const [number, setNumber] = useState(1)

  const changeSubmit = (e) => {
    setNumber(number + 1)
  }

  // 2- useEffect, array de dependencias vazio -> Será executado apenas uma vez
  useEffect(() => {
    console.log('Serei executado apenas uma vez!')
  }, [])

  // 3- useEffect, item no array de dependencias -> Será executado toda ez que houver alteração no item que está dentro do array de dependencia
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {
    if(anotherNumber > 0) {
      console.log('Sou executado toda vez que o anotherNumber muda!')
    }
  }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSubmit}>Adicionar 1</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar Another Number</button>
      <hr />
    </div>
  )
}

export default HookUseEffect