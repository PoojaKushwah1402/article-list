import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react'

//importing styles
import './App.css';

import store from './redux/store'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DisplayTemplate from './components/DisplayData/DisplayTemplate';
import AddArticle from './components/AddArticle/AddArticle';
import PageNotFound from './components/PageNotFound'

function App() {

  return (
        <Provider store={store} >
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Routes> 
                        <Route path='/' element={<DisplayTemplate sValue={''} showFav={false}/>} exact />
                        <Route path='/favourites' element={<DisplayTemplate sValue={''}  showFav={true}/>} exact />
                        <Route path='/addarticle' element={<AddArticle/>} exact/>
                        <Route path='*' element={<PageNotFound/>} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        </Provider>
  );
}

export default App;
