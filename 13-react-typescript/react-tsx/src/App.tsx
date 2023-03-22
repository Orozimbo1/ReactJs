import './App.css'

// 4- Importação de componentes
import FirstComponent from './components/FirstComponent'

// 5- Destructuring nas props
import SecondComponent from './components/SecondComponent'
import Destructuring, { Category } from './components/Destructuring'

// 6- useState no ts
import State from './components/State'

// 8- type
type textOrNull = string | null
type fixed = 'Isso' | 'Ou' | 'Aquilo'

function App() {

  // 1- Variáveis
  const name: string = 'Matheus'
  const age: number = 24
  const isWorking: boolean = true

  // 2- Funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}`
  }

  // 8- type
  const myText: textOrNull = 'Tem algum texto aqui'
  let mySecondText: textOrNull = null

  // mySecondText = 'String ou null'

  const testandoFixed: fixed = 'Ou'

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}, {age} anos. Trabalhando: {isWorking && 'Sim'}</h2>
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name='Segundo' />
      <Destructuring title='Destruturação' content='Aula de desestruturação com typescript e react' commentsQty={999} tags={['vivaoestudo', 'react', 'typescript']} category={Category.TS} />
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
    </div> 
  )
}

export default App
