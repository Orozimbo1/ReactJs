import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
  // 1- useRef
  const numberRef = useRef(0)
  const [counter, setCounter] = useState(0)
  const [counterB, setCounterB] = useState(0)

  useEffect(() => {
    numberRef.current = numberRef.current + 1
  })

  // 2- useRef e DOM
  const inputRef = useRef()
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setText('')

    inputRef.current.focus()

  }

  return (
    <div>
      <h2>useRef</h2>
      {/* useRef */}
      <p>O componente renderizou {numberRef.current} vezes.</p>
      <p>Counter A: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      <br />
      <br />

      {/* useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="text" 
            ref={inputRef} 
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>

      <hr />
    </div>
  )
}

export default HookUseRef