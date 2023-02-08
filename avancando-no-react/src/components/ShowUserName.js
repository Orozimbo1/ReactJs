const ShowUserName = (props) => {
  return (
    <div>
      <h1>O nome do usuário é:</h1>
      <h2>{props.name} {props.lastName}</h2>
    </div>
  )
}

export default ShowUserName