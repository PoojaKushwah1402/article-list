import React, {useState, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";

import './DisplayData.css'

import DisplayData from './DisplayData'
import { fetchListAction } from '../../redux/action'
import { filledFav } from '../../constants'


function DisplayTemplate({showFav, sValue}) {

    const [list, setList] = useState([]);
    const [value, setValue] = useState('')

    const [dataModified, setDataModified] = useState(true);
    let articleListData = useSelector(state => state.listData);
    let dispatch = useDispatch();

    useEffect(()=>{
        setValue(sValue)
    },[sValue])

    useEffect(()=>{
        console.log(value,'valse');
        if(value === '' && articleListData.listData) {
            setList(JSON.parse(JSON.stringify(articleListData.listData)))
        }

        const filteredData = articleListData.listData && articleListData.listData.filter((list) => {
            if(
                    (list.title && list.title.toLowerCase()
                        .includes(value.toLowerCase())) ||
                    (list.description && list.description.toLowerCase()
                        .includes(value.toLowerCase()) )||
                    (list.publisherName && list.publisherName.toLowerCase()
                        .includes(value.toLowerCase())) ||
                    (list.publishDate.includes(value))    
              ){
                return list
              }

        } )
        console.log(filteredData,'filteredData')
        if(filteredData){
            setList(JSON.parse(JSON.stringify(filteredData)))
        }
    },[value])


    useEffect(()=>{
        if(dataModified) {
            dispatch(fetchListAction());
        }
    },[dataModified])

    useEffect(()=>{
        if(articleListData.listData && articleListData.listData.length){
            setDataModified(false);
            setList(JSON.parse(JSON.stringify(articleListData.listData)))
        }
    },[articleListData])


  return (
        <div className='container' >
            <div className='search-container' >
                <input className='search-list' 
                    placeholder={'Search in list...'} 
                    onChange={(e)=>setValue(e.target.value)} 
                />
                <NavLink to={{pathname:"/favourites"}}>
                    {filledFav}
                </NavLink>  
            </div>
                <DisplayData 
                    articleList={list} 
                    showFav={showFav}
                    favList={articleListData.favList} 
                    setDataModified={setDataModified} 
                />
        </div>

  );
}

export default DisplayTemplate;
