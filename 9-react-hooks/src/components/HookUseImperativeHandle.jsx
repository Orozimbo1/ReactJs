import { useRef } from 'react'

// components
import { SomeComponent } from './'

const HookUseImperativeHandle = () => {
  const inputRef = useRef()

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>Validar</button>

      <hr />
    </div>
  )
}

export default HookUseImperativeHandle