import { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(false)

  const [name] = useState("Jonas")

  return (
    <div> 
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim.</p>}
      {!x && <p>Agora o x é falso.</p>}
      <h1>If ternário</h1>
      {name === "Joao" ? (
        <div>
          <h4>O nome é Joao.</h4>
        </div>
      ) : (
        <div>
          <h4>O nome não é Joao, e sim "{name}"</h4>
        </div>
      )}
    </div>
  )
}

export default ConditionalRender