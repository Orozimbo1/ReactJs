const Challenge = () => {

  const a = 5
  const b = 4

  return (
    <div>
      <h1>Desafio 2</h1>
      <h2>Os números são {a} e {b}.</h2>
      <p>Clique no batão abaixo para somá-los</p>
      <p>Veja o resultado no console</p>
      <button onClick={() => console.log(a + b)}>Soma</button>
    </div>
  )
}

export default Challenge