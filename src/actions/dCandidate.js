import api from "./api"

//returning an object with operation and queried data

export const ACTION_TYPES={
    CREATE: 'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

export const fetchAll = ()=>dispatch =>{
    //get api request
    api.dCandidate().fetchAll()
    .then(response=> {
        console.log(response)
        dispatch({
            type:ACTION_TYPES.FETCH_ALL,
            payload:response.data
        })
    })
    .catch(err=>console.log(err))

}
