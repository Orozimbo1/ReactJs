import { useMemo, useEffect, useState } from 'react'

const HookUseMemo = () => {
  const [number, setNumber] = useState('')

  // Vai causar um problema de desempenho
  // const premiumNumber = ['0', '100', '200']

  const premiumNumber = useMemo(() => {
    return  ['0', '100', '200']
  }, [])

  useEffect(() => {

    console.log('Premium Number foi alterado.')

  }, [premiumNumber])

  return (
    <div>
      <h2>useMemo</h2>
      <p>Digite um número:</p>
      <input 
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)} 
      />
      {premiumNumber.includes(number) ? (
        <p>Acertou o número</p>
      ) : ''}
      <hr />
    </div>
  )
}

export default HookUseMemo