import Button from './Button'
import style from './CharacterCard.module.css'

const CharacterCard = ({id, character_nome, descricao, moradia_nome, data_nasc, favorite_nome, imagem}) => {
    return (
        <div className={style.card}>
            <div className={style.header}>
                <img src={imagem} alt={`Retrato de ${character_nome}`} className={style.avatar} />
                <div className={style.nameBox}>
                    <p className={style.name}>{character_nome}</p>
                </div>
            </div>

            <div className={style.section}>
                <h3>Biography</h3>
                <ul className={style.ul}>
                    <li className={style.li}>✨ {descricao}</li>
                    <li className={style.li}>🌟 {moradia_nome}</li>
                    <li className={style.li}>🎂 {data_nasc}</li>
                    <li className={style.li}>❤️ {favorite_nome}</li>
                </ul>
            </div>
            <div className={style.footer}>
                <Button label="Detalhe" />
            </div>
        </div>
    )
}

export default CharacterCard
