import './App.css'

// 4- Importação de componentes
import FirstComponent from './components/FirstComponent'

function App() {

  // 1- Variáveis
  const name: string = 'Matheus'
  const age: number = 24
  const isWorking: boolean = true

  // 2- Funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}`
  }

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}, {age} anos. Trabalhando: {isWorking && 'Sim'}</h2>
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
    </div> 
  )
}

export default App
