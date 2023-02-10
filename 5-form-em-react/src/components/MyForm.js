import { useState } from 'react'

import './MyForm.css';

const MyForm = () => {
  // Gerenciamento de dados
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  console.log(name)
  console.log(email)
  
  return (
    <>
      {/*Criação de form*/}
      <form >
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
        </div>
        {/*Label envolvendo o form*/}
        <label>
          <span>Email:</span>
          <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => {
            setEmail(e.target.value)
          }} />
        </label>
        <input type="submit" value="Enviar"/>
      </form>
    </>
  )
}

export default MyForm