import { useEffect, useRef, useDebugValue } from 'react'

const usePrevious = (value) => {
  const ref = useRef()

  useDebugValue('--- CUSTOM HOOK E USEDEBUGVALUE ---')
  useDebugValue('O numero anterior é: ' + value)

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePrevious