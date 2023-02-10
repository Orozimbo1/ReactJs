import './MyForm.css';

const MyForm = () => {
  return (
    <>
      {/*Criação de form*/}
      <form >
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
        {/*Label envolvendo o form*/}
        <label>
          <span>Email:</span>
          <input type="email" name="email" placeholder="Digite o seu email" />
        </label>
        <input type="submit" value="Enviar"/>
      </form>
    </>
  )
}

export default MyForm