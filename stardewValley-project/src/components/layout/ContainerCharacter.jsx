import React from 'react'

import style from './ContainerCharacter.module.css'

const ContainerCharacter = (props) => {
    return (
        <div className={style.container_character}>
            {props.children}
        </div>
    )
}

export default ContainerCharacter