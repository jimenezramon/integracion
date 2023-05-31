

export default function validation(form, setErrors,errors){
    //console.log(errors);
    if(!form.email){
        setErrors({...errors,email:"Email vacio"});
    } 
    else 
      {
        //console.log(form.email);
        if((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(form.email)) {
            if((form.email).length>35) setErrors({...errors,email:"El mail debe tener 35 caracteres como máximo"})
            else setErrors({...errors,email:""});
        }
        else setErrors({...errors,email:"Email inválido"});
    }

    if(!form.password) setErrors({...errors,password:"Password vacio"});
    else {
        if((form.password).length>5 && (form.password).length<11) setErrors({...errors,password:"El password debe tener entre 6 y 10 caracteres"});
        else setErrors({...errors,password:""});
    }

    return;

}
