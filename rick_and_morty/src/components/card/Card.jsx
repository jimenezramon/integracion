import styles from "./Card.module.css";
export default function Card(props) {
   console.log(props);  
   return (
      <div className={styles.divCard}>
         <div className={styles.divImage}>
            <button className={styles.divButtonCerrar} onClick={props.onClose}>X</button>
            <img className={styles.imgCard} src={props.image} alt='' /> 
            <h2 className={styles.textonombre}>{props.name}</h2>
         </div>
         
         <div className={styles.divBase}>
            <h2 className={styles.textobase} >{props.species}</h2>
            <h2 className={styles.textobase}>{props.gender}</h2>
         </div>
      </div>
   );
}
