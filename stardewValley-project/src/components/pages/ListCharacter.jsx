import React, { useState, useEffect } from 'react'
import ContainerCharacter from '../layout/ContainerCharacter'
import edu from '../../assets/edu.png'

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
            // adiciona a imagem aqui se quiser
            const charsWithImg = characterData.data.map((char) => ({
            ...char,
            imagem: edu,
            }))
            setCharacters(charsWithImg)
        })
        .catch((error) => {
            console.log('ERRO: ' + error)
        })
    }, [])

    return (
        <section>
        <h1>LIST CHARACTER</h1>
        <ContainerCharacter characters={characters} />
        </section>
    )
}

export default ListCharacter
