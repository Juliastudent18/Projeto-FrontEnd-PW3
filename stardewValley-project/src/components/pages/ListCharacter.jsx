import React, { useState, useEffect } from 'react'
import ContainerCharacter from '../layout/ContainerCharacter'

const ListCharacter = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/listagemPessoas', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        })
        .then((resp) => resp.json())
        .then((characterData) => {
            console.log(characterData)
            setCharacters(characterData)
        })
        .catch((error) => {
            console.log('ERRO: ' + error)
        })
    }, [])

    return (
        <section>
            <h1>LIST CHARACTER</h1>
            <ContainerCharacter 
                characters={characters.data} 
            />
        </section>
    )
}

export default ListCharacter
