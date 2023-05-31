import React from "react";
import { useState } from "react";
import foto from '../../img/fondologin.jpg';
import validation from "./validation";
import styles from './Miform.module.css'


export default function Miform({valida}){
    const [userData,setUserData]=React.useState({
        email:"",
        password:"",
    });    
    const [errors, setErrors] = React.useState({    
        email: '',
        password: '',
      });
    
    
    const handleChange=(event)=>{
      
        setUserData({...userData,[event.target.name]: event.target.value });
        validation(userData,setErrors,errors);
        
    }
    const handleSubmit=(event)=>{
        //alert(userData.email,userData.password);
        event.preventDefault();
        //console.log(props)
       valida(userData);

    }
        return (
            <form className={styles.container}>
                <div className={styles.divLogin}>
                    <div className={styles.divImage}>
                        <img className={styles.imgFoto} src={foto} alt="imagen login"/>
                    </div>
                   
                
                    <div className={styles.divDatos}>
                        <label htmlFor="name">EMAIL:</label>
                        <input className={errors.email?styles.alert:styles.success} type="text" name="email" placeholder='Escribe tu email' value={userData.email} onChange={handleChange}/>
                        <span>{errors.email}</span>
                    
                        <label htmlFor="password">PASSWORD:</label>
                        <input  className={errors.password?styles.alert:styles.success}  type="text" name="password" placeholder='Escribe la contraseña' value={userData.password} onChange={handleChange}/>
                        <span>x{errors.password}</span>
                    
                        <button type='summit' onClick={handleSubmit}>SUMMIT</button>
                    </div>
                </div> 
            </form>
        );
    }