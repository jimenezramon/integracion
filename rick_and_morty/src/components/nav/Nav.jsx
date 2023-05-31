import React from 'react'
import SearchBar from './searchBar/SearchBar';
import styles from './Nav.module.css';
import { Link,NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Nav({onSearch}){
     let ubica=useLocation();
    
    if(ubica.pathname!=="/" && ubica.pathname!==""){
    return (

        <div className={styles.divSearchMain}>
            <NavLink to="/home" className={({isActive})=> isActive ? 'active' : ' '}>
                <button className={styles.button}>Home</button>
            </NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? 'active' : ' '}>
                <button className={styles.button}>About</button>
            </NavLink>   
            <NavLink to="/favorites">
                <button className={styles.button}>Favorites</button>
            </NavLink> 
            <SearchBar className={styles.divSearchMain} onSearch={onSearch}     />  
        </div>
    );
    }
    else return;
}