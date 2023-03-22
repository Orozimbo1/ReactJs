import './App.css'

// 4- Importação de componentes
import FirstComponent from './components/FirstComponent'

// 5- Destructuring nas props
import SecondComponent from './components/SecondComponent'
import Destructuring from './components/Destructuring'

// 6- useState no ts
import State from './components/State'

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
      <SecondComponent name='Segundo' />
      <Destructuring title='Destruturação' content='Aula de desestruturação com typescript e react' commentsQty={999} tags={['vivaoestudo', 'react', 'typescript']} />
      <State />
    </div> 
  )
}

export default App
