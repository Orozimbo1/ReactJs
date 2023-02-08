import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Matheus", "Marcus", "Rafael"])

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender