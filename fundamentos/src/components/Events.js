import React from 'react'

const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Evento disparado")
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique AQUI</button>
            </div>
        </div>
    )
}

export default Events