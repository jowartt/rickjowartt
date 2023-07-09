const validation = (userData) =>{
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){ 
        errors.email = 'el email no es valido';
    }
    if(!userData.email){
        errors.email = 'debe ser el email';
    }
    if(userData.email.length > 35){
        errors.email = 'el email no debe ser mayor a 35'
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password='la dontraseña tiene que tener un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'la contraseña debe tener un tamñano entre 6 y 10 caractres '
    }
    return errors;
        
}
export default validation