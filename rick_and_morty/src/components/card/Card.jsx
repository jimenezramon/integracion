import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { add_Fav,remove_Fav} from "../../redux/actions";
import {connect} from "react-redux"
import { useState, useEffect } from "react";

 function Card({ id,
   name,
   species,
   status,
   gender,
   origin,
   image,
   onClose,
   addFav, removeFav,myFavorites}) {
  
   let vid=id;
     // props -> {name, gender, origin}
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
   console.log(myFavorites)
   myFavorites.forEach((fav) => {
     console.log(fav.id, id)
      if (fav.id === id) {
       console.log("si")
         setIsFav(true);
      }
   });
}, [myFavorites, id]);

  const handleFavorite=()=>{
   isFav ? removeFav(id) : addFav({id, name,
      species,
      status,
      gender,
      origin,
      image,});
      setIsFav(!isFav)
  }

   return (
      
      <div className={styles.divCard}>
     {    isFav ? (
      <button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         
         <div className={styles.divImage}>
            <button className={styles.divButtonCerrar} onClick={()=>{onClose(id)}}>X</button>
            <Link to={`/detail/${vid}`}>
            <img className={styles.imgCard} src={image} alt='' /> 
            </Link>
            
            <Link to={`/detail/${vid}`} >
                  <h3 className="card-name">{name}</h3>
            </Link>
         </div>
         
         <div className={styles.divBase}>
            <h2 className={styles.textobase} >{species}</h2>
            <h2 className={styles.textobase}>{gender}</h2>
         </div>
         
      </div>
    
   );
}

const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites
   }
 }

const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(add_Fav(character))
     }, 
     removeFav : (id) => {
       dispatch(remove_Fav(id))
     }
   }
 }
 // mapStateToProps, mapDispatchToProps
 export default connect(mapStateToProps,mapDispatchToProps)(Card)