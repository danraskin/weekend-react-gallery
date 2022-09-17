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

  const likeItem = (id) => {
    axios({
      method: "PUT",
      url: `/gallery/like/${id}`
    })
      .then((response) => {
        console.log('in likeItem: ', response);
        getGallery();
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">EATING FILTH AND TRANSFORMING IT</h1>
          <h3>with white intentions into black compassion</h3>
          <p>- John Giorno</p>
        </header>
        <GalleryList
          galleryList={galleryList}
          likeItem={likeItem}
        />
      </div>
    );
}

export default App;
