import Button from './Button'

import style from './CharacterCard.module.css'

const CharacterCard = ({id, character_nome, descricao, moradia_nome, data_nasc, favorite_nome, imagem})=>{
    return(
        
        <div className={style.characterCard}>
            <p className={style.character_nome}>{character_nome}</p>
            <p className={style.descricao}>{descricao}</p>
            <p className={style.moradia_nome}>{moradia_nome}</p>
            <p className={style.data_nasc}>{data_nasc}</p>
            <p className={style.favorite_nome}>{favorite_nome}</p>
            <img src={imagem} alt="Portrait do Edu em Stardew Valley" />
            <Button label='DETALHE' />
        </div>
        
    )
}

export default CharacterCard