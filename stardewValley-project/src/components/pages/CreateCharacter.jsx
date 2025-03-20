import React from "react";
import style from './CreateCharacter.module.css'
import Input from "../form/Input";
import SelectHabitat from "../form/SelectHabitat";
import SelectCharacter from "../form/SelectCharacter";
import Button from "../form/Button";
import {useState} from "react";

const CreateCharacter = ()=>{

    const [character, setCharacter] = useState({});

    function handlerChangeCharacter(event){
        setCharacter({...character, [event.target.name] : event.target.value});
    }

    function handlerChangeHome(event){
        setCharacter({...character, home : event.target.options[event.target.selectedIndex].text})
    }

    function handlerChangeFavorite(event){
        setCharacter({...character, favorite : event.target.options[event.target.selectedIndex].text})
    }

    function submit(event){
        event.preventDefault();
        console.log(character);
    }

    return(
        <section className = {style.create_character_container}>
            <h1>CADASTRO DE PERSONAGENS</h1>
            <form onSubmit = {submit}>
                <div className = {style.coluna}>
                    <div className = {style.linha}>
                        <div>
                            <Input
                                handlerChange = {handlerChangeCharacter}
                                text = 'Nome do Personagem' 
                                type = 'text'
                                name = 'txt_nome' 
                                id = 'txt_nome' 
                                placeholder = 'Digite o nome do personagem'/>
                            <Input
                                handlerChange = {handlerChangeCharacter}
                                text = 'Descrição do Personagem' 
                                type = 'text'
                                name = 'txt_descricao' 
                                id = 'txt_descricao' 
                                placeholder = 'Descreva o personagem'/>
                            <Input 
                                handlerChange = {handlerChangeCharacter}
                                text = 'data de nascimento' 
                                type = 'date'
                                name = 'data_nascimento' 
                                id = 'data_nascimento'/>
                        </div>
                        <div>        
                            <SelectHabitat
                                handlerChange = {handlerChangeHome}
                                name = 'slc_moradia'
                                id = 'slc_moradia'
                                text = 'Area de moradia'/>
                            <SelectCharacter
                                handlerChange = {handlerChangeFavorite}
                                name = 'slc_personagem'
                                id = 'slc_personagem'
                                text = 'Par Romântico'/>
                            <Button
                                label = 'Cadastrar Personagem'
                            />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CreateCharacter 