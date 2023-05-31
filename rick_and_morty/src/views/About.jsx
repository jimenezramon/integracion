import React from "react";
import styles from '../components/about/About.module.css';
import foto from './fotoperfil.jpg';
export default function About(){


    return (
   
    <div className={styles.conteinerexterno}>
        <div className={styles.conteiner}>
            <h1 className={styles.textonombre}>Proyecto Integrador</h1>
            <p>Desarrollado por Ramón Jiménez</p>
            <div className={styles.imgBox}>
                <img src={foto} alt='Foto' className={styles.divImage} />

            </div>
        </div>  
    </div>
    
    );
}
 