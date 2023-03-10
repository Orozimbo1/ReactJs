import styles from './Home.module.css'

// components
import { HookUseState, HookUseReducer, HookuseEffect, HookUseRef, HookUseCallback, HookUseMemo, HookUseLayoutEffect, HookUseImperativeHandle, HookCustom } from '../../components'

// context
import { useContext } from 'react'
import { SomeContext } from '../../components/HookUseContext'

const Home = () => {
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookuseEffect />
      <h2>useContext</h2>
      <p>Valor do context: "{contextValue}"</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  )
}

export default Home