export const addNote=(data)=>{
    return {
        type:"ADD_NOTE",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteNote=(id)=>{
    return {
        type:"DELETE_NOTE",
        id
    }
}
export const deleteAllNote=()=>{
    return {
        type:"DELETE_ALL_NOTE"
    }
}