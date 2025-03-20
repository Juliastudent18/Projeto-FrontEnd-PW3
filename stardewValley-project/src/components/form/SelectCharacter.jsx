import style from './Select.module.css'

function Select ({name, text, id, handlerChange,}) {
    return (
        <div className = {style.form_control}>
            <label htmlFor = {name}>{text}</label>
            <select name = {name} id = {id} onChange = {handlerChange}>
                <option value=''>Selecione um Personagem</option>
                <option value=''>Abigail</option>
                <option value=''>Alex</option>
                <option value=''>Elliot</option>
                <option value=''>Emily</option>
                <option value=''>Haley</option>
                <option value=''>Harvey</option>
                <option value=''>Leah</option>
                <option value=''>Maru</option>
                <option value=''>Penny</option>
                <option value=''>Sam</option>
                <option value=''>Sebastoian</option>
                <option value=''>Shane</option>
            </select>
        </div>
    )
}

export default Select;