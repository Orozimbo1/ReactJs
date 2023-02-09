const UserDetails = ({ name, age, sex }) => {
  return (
    <>
      <h2>Dados do usuário</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Sexo: {sex}</li>
      </ul>
      {age >= 18 && <p>Você já pode tirar carteira de motorista.</p>}
    </>
  )
}

export default UserDetails