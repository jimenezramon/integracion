
export const add_Fav=(character)=>{
    return{
        type:"ADD_FAV",payload:character};
    };

export const remove_Fav=(id)=>{
    return{
        type:"REMOVE_FAV",payload:id}
    }

