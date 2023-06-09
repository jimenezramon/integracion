import React from 'react'
import axios  from 'axios';
import styles from './App.module.css';
import Cards from './components/cards/Cards.jsx';
//import Card from "./components/card/Card.jsx";

import Nav from './components/nav/Nav';
import About from './views/About';
import Detail from './components/Detail/Detail';
import Form from './components/miform/Miform';
import Favorites from './components/favorites/Favorites'
import { useState } from 'react';
import { useEffect } from 'react';
import {Routes, Route, useNavigate} from "react-router-dom"



//import characters from './data.js';


function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'jimeramo@gmail.com';
   const PASSWORD = 'miPassword';
   
   function login(userData) {
      
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
    }, [access]);

   const [characters, setCharacters] = React.useState([]);
   const onSearch =(id)=>{
      //alert(id);
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            //setCharacters( [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });

   }
   const onClose=(id)=>{

      
      setCharacters(characters.filter(personaje=>personaje.id!==parseInt(id)));
      
      
   };

//   
   return (
      
      <div className={styles.divApp}>
         <Nav onSearch={onSearch}/>
         
            <Routes>
               <Route exact path='/' element={ <Form valida={login}/> }/>               
               <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
               <Route path='/about' element={ <About /> }/>
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='/favorites' element={ <Favorites /> }/>
            
            </Routes>            
      </div>
   );
}
  

export default App;
