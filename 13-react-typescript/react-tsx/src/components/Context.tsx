// 10- Consumindo contexto

import React, {useContext} from 'react'

import App, { AppContext } from '../App'

const Context = () => {

  const details = useContext(AppContext)

  return (
    <>
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h4>Framework: {details.framework}</h4>
          <p>Projeto: {details.project}</p>
        </div>
      )}
    </>
  )
}

export default Context