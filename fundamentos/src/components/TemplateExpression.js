import React from 'react'

const TemplateExpression = () => {
    const name = 'Matheus';
    const data = {
        age: 24,
        job: 'Programador'
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h4>Você atua como {data.job}</h4>
        </div>
    )
}

export default TemplateExpression