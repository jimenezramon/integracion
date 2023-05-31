import styles from "./SearchBar.module.css";
import React from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = React.useState("");
   const handleChange=(event)=>{
      
      let elId=event.target.value;
      setId(elId);
   }
   return (
      
         <div className={styles.divSearchMain}>
            <div className={styles.divSearch}>
            <input className={styles.divInput} type='search' onChange={handleChange}/>
            <button className={styles.divButton} onClick={()=>{onSearch(id)}}>Agregar</button> 
            </div>
         </div>
   );
}
  