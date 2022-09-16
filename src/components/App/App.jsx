import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {

  // sets gallery list to state
  let [ galleryList, setGalleryList ] = useState([];)

  useEffect(() => {
    getStudents()
  }, []);

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        console.log(response.body);
        setGalleryList(response.body);
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
          getGallery={getGallery}
        />
      </div>
    );
}

export default App;
