import { useState } from 'react'

const HookUseState = () => {
  // 1- usesState
  let userName = 'Joao'

  const [name, setName] = useState('Matheus')

  const changeNames = () => {

    userName = 'Joao Souza'
    setName('Matheus Orozimbo')

    // console.log(userName)
  }
  // console.log(name)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Enviando a uma API
    console.log(age)
  }
  
  // 2- useState e inputs
  const [age, setAge] = useState(18)

  return (
    <div>
    {/* 1 - useState */}
    <h2>useState</h2>
    <p>Variável: {userName}</p>
    <p>useState: {name}</p>
    <button onClick={changeNames}>Mudar nomes</button>

    {/* 2 - useState e input */}
    <p>Digite a sua idade:</p>
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text" 
          value={age} 
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <input type="submit" value="Enviar" />
    </form>
    <p>Você tem {age} anos.</p>
    <hr />
    </div>
  )
}

export default HookUseState