import React from 'react'
import SearchBar from './searchBar/SearchBar';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';


export default function Nav({onSearch}){

    return (
        <div className={styles.divSearchMain}>
            <NavLink to="/" >
                <button>Home</button>
            </NavLink>
            <NavLink to="/about" >
                <button>About</button>
            </NavLink>   
            <SearchBar className={styles.divSearchMain} onSearch={onSearch}     />  
        </div>
    );
}