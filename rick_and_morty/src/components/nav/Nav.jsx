import React from 'react'
import SearchBar from './searchBar/SearchBar';
import styles from './Nav.module.css';


export default function Nav({onSearch}){

    return (
        <div className={styles.divSearchMain}>
            <SearchBar className={styles.divSearchMain} onSearch={onSearch}     />  
        </div>
    );
}