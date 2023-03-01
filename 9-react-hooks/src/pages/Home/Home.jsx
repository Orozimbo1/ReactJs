import styles from './Home.module.css'

// components
import { HookUseState, HookUseReducer } from '../../components'

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
    </div>
  )
}

export default Home