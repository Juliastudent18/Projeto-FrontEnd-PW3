import React from "react"
import { useState, useEffect } from "react"
import CharacterCard from "../CharacterCard"
import ContainerCharacter from '../layout/ContainerCharacter'
import style from './ListCharacter.module.css'
import edu from '../../assets/edu.png'

const ListCharacter = ()=>{
    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/listagemPessoas', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                }
            }
        ).then((resp) =>
            resp.json()
        ).then((characterData) => 
            {
                console.log(characterData);
                setCharacter(characterData.data)
            }
        ).catch((error) => {
            console.log('ERRO: ' + error);
        })
    }, [])

    return(
        <section>
            <h1>LIST CHARACTER</h1>
            <ContainerCharacter>
                {
                    character.map((character) => (
                        <CharacterCard
                            character_nome={character.character_nome}
                            descricao={character.descricao}
                            moradia_nome={character.tbl_moradium?.moradia_nome} // <- Puxa de modelMoradia
                            data_nasc={character.data_nasc}
                            favorite_nome={character.tbl_personagen?.favorite_nome}
                            imagem= {edu} // <- Puxa de modelFavorite
                            key={character.id}
                        />
                    ))
                }
            </ContainerCharacter>
        </section>
    )
}

export default ListCharacter