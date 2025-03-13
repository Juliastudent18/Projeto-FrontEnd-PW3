import style from './Select.module.css'

function Select ({name, text, id}) {
    return (
        <div className = {style.form_control}>
            <label htmlFor = {name}>{text}</label>
            <select name = {name} id = {id}>
                <option value=''>Selecione uma moradia</option>
                <option value=''>Praia</option>
                <option value=''>Montanhas</option>
                <option value=''>Floresta</option>
                <option value=''>Rio</option>
            </select>
        </div>
    )
}

export default Select;