import React from "react";
import style from './CreateCharacter.module.css'
import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

const CreateCharacter = ()=>{
    return(
        <section className = {style.create_character_container}>
            <h1>CADASTRO DE PERSONAGENS</h1>
            <Input
                text = 'Nome do Personagem' 
                type = 'text'
                name = 'txt_nome' 
                id = 'txt_nome' 
                placeholder = 'Digite o nome do personagem'/>
            <Input 
                text = 'Descrição do Personagem' 
                type = 'text'
                name = 'txt_descricao' 
                id = 'txt_descricao' 
                placeholder = 'Descreva o personagem'/>
            <Select
                name = 'slc_moradia'
                id = 'slc_moradia'
                text = 'Area de moradia'/>
            <Button
                label = 'Cadastrar Personagem'
            />
        </section>
    )
}

export default CreateCharacter 