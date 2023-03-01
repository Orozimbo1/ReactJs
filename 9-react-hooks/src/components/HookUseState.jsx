import { useState } from 'react'

const HookUseState = () => {
  // 1- usesState
  let userName = 'Joao'

  const [name, setName] = useState('Matheus')

  const changeNames = () => {

    userName = 'Joao Souza'

    setName('Matheus Orozimbo')

    console.log(userName)
    
  }
  console.log(name)
  

  return (
    <div>
      {/* 1 - useState */}
    <h2>useState</h2>
    <p>Variável: {userName}</p>
    <p>useState: {name}</p>
    <button onClick={changeNames}>Mudar nomes</button>

    <hr />
    </div>
  )
}

export default HookUseState