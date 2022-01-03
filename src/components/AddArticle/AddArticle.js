import React from 'react'

import setStorage from '../../storage/setStorage'
import './AddArticle.css'

const getDateFormat = date => date<10?`0${date}`:date

const todaysDate = new Date();
const month = getDateFormat(todaysDate.getMonth()+1);
const day = getDateFormat(todaysDate.getDate())
const fullDateValue = `${todaysDate.getFullYear()}-${month}-${day}`;
console.log(fullDateValue,'fullDateValue')
const initialValue = {
    name : '',
    title : '',
    description : '',
    date : todaysDate.toLocaleDateString()
}
console.log(todaysDate.toISOString().slice(0,10),'todaysDate.toISOString().slice(0,10)')
function AddArticleTemplate() {

    const [deatils, setDetails] = React.useState(initialValue);

    const onChangeData = (key, value) => {
        setDetails({
            ...deatils,
            [key] : value
        })
    }

    const onCancel = () => {
        setDetails(initialValue);
    }

    const onSaveData = () => {
        console.log(deatils,'deatils')
        const newArticle = {
            description : deatils.description,
            id : Math.random(),
            imageUrl : `https://picsum.photos/200/300?random=${Math.floor(Math.random()*9)}`,
            publishDate : deatils.date,
            publisherName : deatils.name,
            title : deatils.title
        }
        setStorage(newArticle);
        onCancel();
        alert('Data added successfully')
    }


  return (
        <>
            <div className='banner' >  
            </div>
            <div className="add-article-container">
                <div className='article-details' >Enter Article Details : </div>
                <div className='publisher' >
                    <label>Please enter publisher Name :</label>
                    <input placeholder='Publisher Name...' 
                        value={deatils.name}
                        onChange={(e)=>onChangeData('name', e.target.value)}  />
                </div>

                <div className='publisher' >
                    <label>Please enter Title :</label>
                    <input placeholder='Enter title...' 
                        value={deatils.title}
                        onChange={(e)=>onChangeData('title', e.target.value)}
                    />
                </div>

                <div className='publisher' >
                    <label>Please enter Description :</label>
                    <input placeholder='Enter Description...' 
                        value={deatils.description}
                        onChange={(e)=>onChangeData('description', e.target.value)}
                    />
                </div>

                <div className='publisher' >
                    <label>Publisher date :</label>
                    <input type='date' value={fullDateValue} disabled={true} />
                </div>

                <div className='publisher publisher-btn' >
                    <button className='publisher-cancel' onClick={onCancel} >Cancel</button>
                    <button className='publisher-save' onClick={onSaveData}
                    disabled={!(deatils.name && deatils.description && deatils.title)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </>
  );
}

export default AddArticleTemplate;
