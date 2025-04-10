import style from './Select.module.css'

function Select ({name, text, id, handlerChange, options}) {
    return (
        <div className = {style.form_control}>
            <label htmlFor = {name}>{text}</label>
            <select name = {name} id = {id} onChange = {handlerChange}>
                <option value=''>Selecione uma moradia</option> 
                {
                    options.map(
                        (option) => (
                            <option value={option.id} key={option.id}>
                                {option.moradia}
                            </option>
                        )
                    )
                }
            </select>
        </div>
    )
}

export default Select;