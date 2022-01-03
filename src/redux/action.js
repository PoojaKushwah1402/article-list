import  axios from "axios";

import setStorage from '../storage/setStorage';
import getStorage from '../storage/getStorage';
import sortDate from '../components/sort'
import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from "./type";

const fetchURL = 'http://demo5660605.mockable.io/article/list'


const fetchrequest = () => {
    return{
        type : FETCH_REQUEST
    }
}


const fetchsuccess = data => {
    return{
        type :  FETCH_SUCCESS,
        payload : data,
        error : ''
    }
}


const fetchfailue = error => {
    return{
        type : FETCH_FAILURE,
        payload : [],
        error : error.message
    }
}


export const fetchListAction = () => {
    return function ( dispatch ) {

        dispatch(fetchrequest())
        const getByLocalStorage = getStorage();
        if(getByLocalStorage) {
            console.log('byLocalstorage',getByLocalStorage)
            dispatch(fetchsuccess({...getByLocalStorage}))

        }else {
            axios.get(fetchURL)
            .then( response => {
                const listData = sortDate(response.data.list)
                const favList = new Array(listData.length).fill(false)
                // console.log(response,'response');
                setStorage({listData,favList});
                dispatch(fetchsuccess({listData,favList}))
            })
            .catch( error => {
                dispatch(fetchfailue(error));
            } )
        }

    }
}