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

  return (
    <div>
      <h2>useEffect</h2>
      <p>{number}</p>
      <button onClick={changeSubmit}>Adicionar 1</button>
      <hr />
    </div>
  )
}

export default HookUseEffect