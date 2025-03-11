import React from 'react'
import styles from './Home.module.css';

const Home = ()=>{
    return(

        <section className={styles.home_container}>

            <h1>Bem vindo ao<span>STARDEW VALLEY</span></h1>
            <p>Comece a gerenciar os seus personagens agora mesmo!</p>

        </section>

    );
}

export default Home;