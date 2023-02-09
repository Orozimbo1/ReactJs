import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Matheus", "Marcus", "Rafael", "Carlos", "Andre"])

  const [users, setUsers] = useState([
    { id: 0, age: 22, name: "Andre" },
    { id: 1, age: 22, name: "Matheus" },
    { id: 2, age: 22, name: "Rafael" },
    { id: 3, age: 22, name: "Marcus" }
  ])
  
  const handleDelete = () => {
    const randomNumber = Math.floor(Math.random() * 5)

    setUsers((prevUsers) => {
      console.log(prevUsers)

      return prevUsers.filter((user) => randomNumber !== user.id)
      
    })
  }

  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>
            {name}
          </li>
        ))}
      </ul>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete random user</button>
    </div>
  )
}

export default ListRender