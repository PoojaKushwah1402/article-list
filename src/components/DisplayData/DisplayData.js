import React from 'react'

import ModifyFavourite from '../../storage/modifyFav';
import {emptyFav, filledFav} from '../../constants'

import './DisplayData.css'


const createTemplate = (article, index, favList, addToFavourite) => {
    return <div className='article' key={article.id} >
    <div className='data-container' >
        <div className='article-title' > {article.title} </div>
        <div className='article-description' > {article.description.toUpperCase()} </div>
        <div className='article-publisher' > --{article.publisherName} </div>
        <div className='article-publish-date' >
            <b>{article.publishDate}</b> 
            <button className='fav-button' onClick={()=>addToFavourite(index)}>
                { favList[index]?filledFav:emptyFav}
            </button> 
        </div>
    </div>

    <div className='image-container'> 
        <img src={article.imageUrl} alt={article.description} /> 
    </div>
</div>
}


const DisplayData = ({articleList, favList, setDataModified, showFav}) => {

    const addToFavourite = (index) => {
        let res = ModifyFavourite(index);
        if(!res){
            alert('Data lost, please refresh the page');
        }else{
            setDataModified(true)
        }
    }

    const DisplayList = (data, favList, addToFavourite) => {
        return showFav? 
        data.map((article, index)=> favList[index]?createTemplate(article, index, favList, addToFavourite):'') :
         data.map((article, index)=> createTemplate(article, index, favList, addToFavourite))
    }

  return (
    <div className="articles-container">
        {  articleList && articleList.length ?
            DisplayList(articleList, favList, addToFavourite):
            <div className='data-not-found' > No Lists Available </div>
        }
    </div>
  );
}

export default DisplayData;
