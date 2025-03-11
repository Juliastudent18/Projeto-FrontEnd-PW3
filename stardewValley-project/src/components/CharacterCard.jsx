import Button from './Button'

import style from './CharacterCard.module.css'

const BookCard = ({titulo, autor, imagem})=>{
    return(
        
        <div className={style.characterCard}>
            <h3 className={style.nome}>{titulo}</h3>
            <p className={style.naturalidade}>{autor}</p>
            <img src={imagem} alt="Capa: As Cavernas de Aço" />
            <Button label='DETALHE' />
        </div>
        
    )
}

export default BookCard