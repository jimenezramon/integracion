import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css";



export default function Detail() {
    
    const {id} = useParams();
    
    const [character, setCharacter] = React.useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={styles.container}>
            <div className={styles.containerleft}>
            <h1 className={styles.textonombre}>{character.name}</h1>
            <h1 className={styles.textopropiedades}>STATUS|{character.status}</h1>
            <h1 className={styles.textopropiedades}>GENDER|{character.gender}</h1>
            <h1 className={styles.textopropiedades}>SPECIES|{character.species}</h1>
            <h1 className={styles.textopropiedades}>ORIGIN|</h1>
          


            </div>
            <div className={styles.containerright}>
            <img className={styles.imgCard} src={character.image} alt='' /> 
            </div>

        </div>
    );
}