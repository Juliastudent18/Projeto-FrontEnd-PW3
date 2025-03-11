import style from './Select.module.css'

function Select ({name, text, id}) {
    return (
        <div className = {style.form_control}>
            <label htmlFor = {name}>{text}</label>
            <select name = {name} id = {id}>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
            </select>
        </div>
    )
}

export default Select;