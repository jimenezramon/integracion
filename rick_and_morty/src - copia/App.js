import React from 'react'
import axios  from 'axios';
import styles from './App.module.css';
import Cards from './components/cards/Cards.jsx';
import Card from "./components/card/Card.jsx";

import Nav from './components/nav/Nav';
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import About from './views/About';
import Detail from './components/Detail/Detail';




//import characters from './data.js';


function App() {
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
         <Cards characters={characters} onClose={onClose}/>
            <Routes>
             
               <Route path='/about' element={ <About /> }/>
               <Route path='/detail/:id' element={<Detail />} />
            
            </Routes>            
      </div>
   );
}
  

export default App;
