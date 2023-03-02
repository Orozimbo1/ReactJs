import styles from './Home.module.css'

// components
import { HookUseState, HookUseReducer, HookuseEffect } from '../../components'

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookuseEffect />
    </div>
  )
}

export default Home