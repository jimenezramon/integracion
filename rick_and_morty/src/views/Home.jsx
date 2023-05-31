import React from "react";
import Cards from "../components/cards/Cards";


export default function Home(){

    return(
            <Cards characters={characters} onClose={onClose}/>
    );
}