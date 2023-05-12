import React from 'react'
//import './App.css';
import styles from './App.module.css';
//import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchBar/SearchBar.jsx';
//import characters, { Rick } from './data.js';
import characters from './data.js';
function App() {
  
   return (
      
      <div className={styles.divApp}>
         
         <SearchBar className={styles.divSearchMaindd} onSearch={(characterID) => () => alert(characterID)}     />
         <Cards characters={characters} />
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
