import { Outlet, Link } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = ()=>{
    return(
            <>
                <nav className={style.navbar}>
                    <ul className={style.list}>
                        <Link to ='/'>
                            <li className = {style.item}>
                                <img className = {style.logo} src = "src\assets\PngItem_3636269.png" alt = "Logotipo" />
                            </li>
                        </Link>
                        <Link to ='/'>
                            <li className = {style.item}>HOME</li>
                        </Link>
                        <Link to ='/newCharacter'>
                            <li className = {style.item}>CADASTRAR PERSONAGENS</li>
                        </Link>
                        <Link to ='/listCharacter'>
                            <li className = {style.item}>LISTAR PERSONAGENS</li>
                        </Link>
                    </ul>
                </nav>
            <Outlet />
        </>
    )
}

export default NavBar