import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from "./type";


const initialState = {
    loading : false,
    listData : [],
    error : ''
}


export const listReducer = (state = initialState, action) => {

    switch(action.type) {

        case  FETCH_FAILURE :
            return {
                ...state,
                loading : true
            }
        case FETCH_SUCCESS : 
            return {
                ...state,
                loading : false,
                listData : action.payload,
                error : ''
            }
        case FETCH_REQUEST :
            return {
                ...state,
                loading : false,
                listData : [],
                error : action.error
            }
        default :  return state
    }
}