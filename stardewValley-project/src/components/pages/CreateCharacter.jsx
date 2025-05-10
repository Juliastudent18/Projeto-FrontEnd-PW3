import React from "react";
import style from './CreateCharacter.module.css'
import Input from "../form/Input";
import SelectHabitat from "../form/SelectHabitat";
import SelectCharacter from "../form/SelectCharacter";
import Button from "../form/Button";
import {useState, useEffect} from "react";

const CreateCharacter = ()=>{

    const [character, setCharacter] = useState({});
    const [moradia, setMoradia] = useState([]);
    const [favorito, setFavorito] = useState([]);



    function handlerChangeCharacter(event){
        setCharacter({...character, [event.target.name] : event.target.value});
    }

    function handlerChangeHome(event){
        setCharacter({...character, moradia : event.target.options[event.target.selectedIndex].value})
    }

    function handlerChangeFavorite(event){
        setCharacter({ ...character, fvrt_perso: event.target.value })
    }

    useEffect(() => {
        fetch('http://127.0.0.1:5000/listagemMoradias',
            {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                }
            }
        ).then((resp) =>
            resp.json()
        ).then((moradia) => {
            setMoradia(moradia.data)
            }
        ).catch((error) => {
                console.log('ERRO: ' + error);
            }
        )
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/listagemPersonagens',
            {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                }
            }
        ).then((resp) =>
            resp.json()
        ).then((favorito) => {
            setFavorito(favorito.data)
            }
        ).catch((error) => {
                console.log('ERRO: ' + error);
            }
        )
    }, []);

    function insertCharacter(character) {
        fetch('http://127.0.0.1:5000/inserirPessoa', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                },
                body : JSON.stringify(character)
            }
        ).then((resp) =>
            resp.json()
        ).then((character) => {
                setCharacter(character.data)
            }
        ).catch((error) => {
            console.log('ERRO: ' + error);
        })
    }

    function submit(event){
        event.preventDefault();
        console.log(character);
        insertCharacter(character)
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
                                name = 'nome' 
                                id = 'nome' 
                                placeholder = 'Digite o nome do personagem'/>
                            <Input
                                handlerChange = {handlerChangeCharacter}
                                text = 'Descrição do Personagem' 
                                type = 'text'
                                name = 'descricao' 
                                id = 'descricao' 
                                placeholder = 'Descreva o personagem'/>
                            <Input 
                                handlerChange = {handlerChangeCharacter}
                                text = 'data de nascimento' 
                                type = 'date'
                                name = 'data_nasc' 
                                id = 'data_nasc'/>
                        </div>
                        <div>        
                            <SelectHabitat
                                handlerChange = {handlerChangeHome}
                                options = {moradia}
                                name = 'moradia'
                                id = 'moradia'
                                text = 'Area de moradia'/>
                            <SelectCharacter
                                handlerChange = {handlerChangeFavorite}
                                options = {favorito}
                                name = 'fvrt_perso'
                                id = 'fvrt_perso'
                                text = 'Personagem favorito'/>
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