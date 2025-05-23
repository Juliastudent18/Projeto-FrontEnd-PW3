import React from "react";
import style from './UpdateDetails.module.css'
import Input from "../form/Input";
import SelectHabitat from "../form/SelectHabitat";
import SelectCharacter from "../form/SelectCharacter";
import Button from "../form/Button";
import Swal from 'sweetalert2'
import {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'

const UpdateCharacters = ()=>{

    const {id} = useParams();
    const [character, setCharacter] = useState({});
    const [moradia, setMoradia] = useState([]);
    const [favorito, setFavorito] = useState([]);
    const navigate = useNavigate();


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

    useEffect(()=>{
                fetch(`http://localhost:5000/listagemPessoas/${id}`, {
                        method: 'GET',
                        mode:'cors',
                        headers:{
                                'Content-Type':'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Headers': '*'
                        },
                })
                .then((resp)=>resp.json())
                .then((data)=>{
                        setCharacter(data.data);
                })
                .catch((err)=>{console.log(err)});
        }, []);

    function updateCharacter(character) {
        fetch('http://127.0.0.1:5000/alterarPessoa', {
                method: 'PUT',
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
                navigate('/listCharacter',
                Swal.fire({
                    icon: 'success',
                    title: 'Personagem alterado com sucesso!',
                    text: `O cara tá certinho agora!`,
                    customClass: {
                        title: style.titleAlert,
                        htmlContainer: style.titleContent,
                        confirmButton: style.alertConfirmButton,
                        cancelButton: style.alertCancelButton,
                    }
                }))
            }
        ).catch((error) => {
            console.log('ERRO: ' + error);
        })
    }

    function submit(event){
        event.preventDefault();
        console.log(character);
        updateCharacter(character)
    }

    return(
        <section className = {style.update_character_container}>
            <h1>ALTERAÇÃO DE PERSONAGENS</h1>
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
                                placeholder = 'Digite o nome do personagem'
                                value={character.nome}/>
                            <Input
                                handlerChange = {handlerChangeCharacter}
                                text = 'Descrição do Personagem' 
                                type = 'text'
                                name = 'descricao' 
                                id = 'descricao' 
                                placeholder = 'Descreva o personagem'
                                value={character.descricao}/>
                            <Input 
                                handlerChange = {handlerChangeCharacter}
                                text = 'data de nascimento' 
                                type = 'date'
                                name = 'data_nasc' 
                                id = 'data_nasc'
                                value={character.data_nasc}/>
                        </div>
                        <div>        
                            <SelectHabitat
                                handlerChange = {handlerChangeHome}
                                options = {moradia}
                                name = 'moradia'
                                id = 'moradia'
                                text = 'Area de moradia'
                                value={character.tbl_moradium?.nome}/>
                            <SelectCharacter
                                handlerChange = {handlerChangeFavorite}
                                options = {favorito}
                                name = 'fvrt_perso'
                                id = 'fvrt_perso'
                                text = 'Personagem favorito'
                                value={character.tbl_personagen?.nome}/>
                            <Button
                                label = 'Alterar Personagem'
                            />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default UpdateCharacters 