import { useState } from 'react'

const ConditionalRender = () => {
  const [x, setX] = useState(false)

  return (
    <div> 
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim.</p>}
      {!x && <p>Agora o x é falso.</p>}
    </div>
  )
}

export default ConditionalRender