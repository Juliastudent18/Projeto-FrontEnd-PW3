import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import style from './Details.module.css'
import Button from '../Button'
import edu from '../../assets/edu.png'
import terra from '../../assets/terrasAltas.webp'
import praia from '../../assets/praia.jpg'
import bosque from '../../assets/bosqueSecreto.jpg'
import deserto from '../../assets/deserto.jpg'
import floresta from '../../assets/florestaCinzaseiva.png'
import ilha from '../../assets/ilhaGengibre.png'
import montanhas from '../../assets/montanhas.png'
import vila from '../../assets/vilaPelicanos.png'
import abigail from '../../assets/abigail.webp'
import alex from '../../assets/alex.png'
import caroline from '../../assets/caroline.webp'
import clint from '../../assets/clint.png'
import demetrius from '../../assets/demetrius.webp'
import elliott from '../../assets/elliott.png'
import emily from '../../assets/emily.png'
import evelyn from '../../assets/evelyn.webp'
import george from '../../assets/george.png'
import gus from '../../assets/gus.png'
import haley from '../../assets/haley.png'
import harvey from '../../assets/harvey.png'
import jas from '../../assets/jas.png'
import jodi from '../../assets/jodi.png'
import kent from '../../assets/kent.png'
import krobus from '../../assets/krobus.png'
import leah from '../../assets/leah.png'
import leo from '../../assets/leo.png'
import lewis from '../../assets/lewis.webp'
import linus from '../../assets/linus.png'
import marnie from '../../assets/kent.png'
import maru from '../../assets/maru.png'
import pam from '../../assets/pam.png'
import penny from '../../assets/penny.webp'
import pierre from '../../assets/pierre.png'
import robin from '../../assets/robin.png'
import sam from '../../assets/sam.png'
import sandy from '../../assets/sandy.png'
import sebastian from '../../assets/sebastian.png'
import shane from '../../assets/shane.webp'
import vincent from '../../assets/vincent.png'
import willy from '../../assets/willy.png'
import wizard from '../../assets/wizard.png'

const moradiaImages = {
    floresta: floresta,
    praia: praia,
    bosque: bosque,
    deserto: deserto,
    ilha: ilha,
    montanhas: montanhas,
    vila: vila,
    terra: terra
};

const favoritoImages = {
    abigail: abigail,
    alex: alex,
    caroline: caroline,
    clint: clint,
    demetrius: demetrius,
    elliott: elliott,
    emily: emily,
    evelyn: evelyn,
    george: george,
    gus: gus,
    haley: haley,
    harvey: harvey,
    jas: jas,
    jodi: jodi,
    kent: kent,
    krobus: krobus,
    leah: leah,
    leo: leo,
    lewis: lewis,
    linus: linus,
    marnie: marnie,
    maru: maru,
    pam: pam,
    penny: penny,
    pierre: pierre,
    robin: robin,
    sam: sam,
    sandy: sandy,
    sebastian: sebastian,
    shane: shane,
    vincent: vincent,
    willy: willy,
    wizard: wizard
};


const Details = () => {

    const {id} = useParams()
    console.log('ID:' + id)

    const[character, setCharacter] = useState({});

    useEffect(()=>{
            fetch(`http://localhost:5000/listagemPessoas/${id}`, {
                method: 'GET',
                mode:'cors',
                headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',
            },
            })
                .then((resp)=>resp.json())
                .then((data)=>{
                setCharacter(data.data)
                console.log(data.data)
            })
            .catch((err)=>{console.log(err)})
        },[])

    return (
        <div className={style.container}>
            <div className={style.conteudo}>
                <div className = {style.character}>
                    <div>
                        <img className={style.img} src={edu}/>
                    </div>
                    <div className = {style.descCharacter}>
                        <strong className={style.nome}>
                            {character.nome}
                        </strong>
                        <span className={style.data_nasc}>
                            🎂 {character.data_nasc}
                        </span>
                        <p className={style.descricao}>
                            {character.descricao}
                        </p>
                    </div>
                </div>
                <div className = {style.favHome}>
                    <div className = {style.moradiaContainer}>
                        <p>🏠 Moradia: 🏠</p>

                        <span className={style.moradia}>
                            {character.tbl_moradium?.moradia}
                        </span>
                        <img
                            className={style.img}
                            src={moradiaImages[character.tbl_moradium?.img]}
                        />
                        <span className={style.descricao}>
                            {character.tbl_moradium?.descricao}
                        </span>
                    </div>
                    <div className = {style.favoritoContainer}>
                        <p>⭐ Personagem favorito: ⭐</p>
                        <span className={style.favorito}>
                            {character.tbl_personagen?.nome}
                        </span>
                        <img
                            className={style.img}
                            src={favoritoImages[character.tbl_personagen?.img]}
                        />
                        <span className={style.descricao}>
                            {character.tbl_personagen?.descricao}
                        </span>
                    </div>
                </div>
                <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                        router='/updateCharacter/'
                        id = {id}
                    />
                    <Button 
                        label='EXCLUIR'
                        router='/deleteCharacter/'
                        id = {id}
                    />
                </div>
            </div>
        </div>
    )

}

export default Details
