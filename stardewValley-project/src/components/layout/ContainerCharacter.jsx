import React, { useRef } from 'react'
import CharacterCard from '../CharacterCard'
import style from './ContainerCharacter.module.css'

const ContainerCharacter = ({ characters }) => {
    const carouselRef = useRef(null)

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }

    return (
        <div className={style.wrapper}>
        <button className={style.navLeft} onClick={scrollLeft}>‹</button>

        <div className={style.carousel} ref={carouselRef}>
            {characters.map((char) => (
            <CharacterCard
                key={char.id}
                character_nome={char.character_nome}
                descricao={char.descricao}
                moradia_nome={char.tbl_moradium?.moradia_nome}
                data_nasc={char.data_nasc}
                favorite_nome={char.tbl_personagen?.favorite_nome}
                imagem={char.imagem}
            />
            ))}
        </div>

        <button className={style.navRight} onClick={scrollRight}>›</button>
        </div>
    )
}

export default ContainerCharacter
