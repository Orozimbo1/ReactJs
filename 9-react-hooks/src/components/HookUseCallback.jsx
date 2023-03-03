import { useCallback, useState } from 'react'

// componentes
import { List } from './'

const HookUseCallback = () => {

  const [counter, setCounter] = useState(0)

  const getItemsFromDatabase = useCallback(() => {
    return ['a', 'b', 'c']
  }, [])

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDatabase} />
      <button onClick={(e) => setCounter(counter + 1)}>Alterar número</button>
      <p>{counter}</p>

      <hr />
    </div>
  )
}

export default HookUseCallback