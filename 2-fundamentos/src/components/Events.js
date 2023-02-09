const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Evento disparado")
    }

    const renderSomething = (x) => {

        if(x) {
            return(
                <h1>Tem o x</h1>
            )
        }
        return(
            <h1>Não tem o x</h1>
        )

    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique AQUI</button>
            </div>
            <div>
                <button onClick={() => console.log('evento inline')}>Clique AQUI inline</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events