import style from './Select.module.css'

function Select ({name, text, id, handlerChange, options}) {
    return (
        <div className = {style.form_control}>
            <label htmlFor = {name}>{text}</label>
            <select name = {name} id = {id} onChange = {handlerChange}>
                <option value=''>Selecione um Personagem</option>
                {
                    options.map(
                        (option) => (
                            <option value={option.id} key={option.id}>
                                {option.nome}
                            </option>
                        )
                    )
                }
            </select>
        </div>
    )
}

export default Select;