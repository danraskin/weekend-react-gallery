import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {

  // sets gallery list to state
  let [ galleryList, setGalleryList ] = useState([]);

  useEffect(() => {
    getGallery()
  }, []);

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        console.log('in getGallery: ', response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log('error getting gallery: ', error);
      })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
          galleryList={galleryList}
        />
      </div>
    );
}

export default App;
