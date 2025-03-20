import style from './Select.module.css'

function Select ({name, text, id, handlerChange,}) {
    return (
        <div className = {style.form_control}>
            <label htmlFor = {name}>{text}</label>
            <select name = {name} id = {id} onChange = {handlerChange}>
                <option value=''>Selecione uma moradia</option>
                <option value=''>Covil dos Insetos</option>
                <option value=''>Deserto</option>
                <option value=''>Floresta Cinzaseiva</option>
                <option value=''>Ilha Gengibre</option>
                <option value=''>Montanha</option>
                <option value=''>Praia</option>
                <option value=''>Vila Pelicanos</option>
            </select>
        </div>
    )
}

export default Select;