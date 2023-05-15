import React from 'react'
import axios  from 'axios';
import styles from './App.module.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
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


   return (
      
      <div className={styles.divApp}>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}
  

export default App;
