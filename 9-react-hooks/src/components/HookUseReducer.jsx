import { useReducer, useState } from 'react'

const HookUseReducer = () => {
  // 1- Comecndo com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  // 2- avancando no useReducer
  const initialTasks = [
    {id: 1, text: 'Fazer alguma coisa'},
    {id: 2, text: 'Fazer outra coisa'}
  ]

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText,
        }

        setTaskText('')

        return [...state, newTask]

      case 'DELETE':
        return state.filter((task) => task.id !== action.id);
      default:
        return state
    }

  }

  const [taskText, setTaskText] = useState('')
  const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTask({ type: 'ADD' })
  }

  const removeTask = (id) => {
    dispatchTask({ type: 'DELETE', id })
  }

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar o número!</button>
      {/* useReducer com actions */}
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}  
        />
        <input type="submit" value="Adicionar tarefa" />
      </form>
      <ul>
        {tasks.map((task) => (
          <li 
            key={task.id}
            onDoubleClick={(e) => removeTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  )
}

export default HookUseReducer