import './App.css'

function App() {
  // 1- Variáveis
  const name: string = 'Matheus'
  const age: number = 24
  const isWorking: boolean = true

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}, {age} anos. Trabalhando: {isWorking && 'Sim'}</h2>
    </div> 
  )
}

export default App
