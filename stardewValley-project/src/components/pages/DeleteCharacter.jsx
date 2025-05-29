import {React, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function DeleteCharacter() {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/excluirPessoa/${id}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/listCharacter',{state:'PERSONAGEM EXCLUÍDO COM SUCESSO!'})
            }
        ).catch(
            err => console.log(err)
        )
    })

    return (
        <div>
        </div>
    )
}

    export default DeleteCharacter
