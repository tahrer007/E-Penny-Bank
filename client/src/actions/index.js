//action ceator 
export const getUsers =()=>{

}
export const getUserBoxes =(userId)=>{
    return {
        type : "GET_BOXES",
        payLoad : userId
    }
}
 