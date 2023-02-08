import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Matheus", "Marcus", "Rafael"])

  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender