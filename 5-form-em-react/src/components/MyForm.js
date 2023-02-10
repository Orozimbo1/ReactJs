import { useState } from 'react'

import './MyForm.css';

const MyForm = ({ user }) => {
  // Gerenciamento de dados
  // Controlled input
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [bio, setBio] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando o formulário.")
    console.log(name, email, bio)
    setName("")
    setEmail("")
    setBio("")
  }

  return (
    <>
      {/*Criação de form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
        </div>
        {/*Label envolvendo o form*/}
        <label>
          <span>Email:</span>
          {/*Simplificação de manipulação de state*/}
          <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email} 
          />
        </label>

        {/* input textare */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        <input type="submit" value="Enviar"/>
      </form>
    </>
  )
}

export default MyForm