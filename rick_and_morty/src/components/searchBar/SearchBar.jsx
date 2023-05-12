import styles from "./SearchBar.module.css";
export default function SearchBar(props) {
   console.log(props);
   let msg=props.onSearch;
   console.log(msg);
   return (
      
         <div className={styles.divSearchMain}>
            <div className={styles.divSearch}>
            <input className={styles.divInput} type='search' />
            <button className={styles.divButton} onClick={msg}>Agregar</button> 
            </div>
         </div>
   );
}
