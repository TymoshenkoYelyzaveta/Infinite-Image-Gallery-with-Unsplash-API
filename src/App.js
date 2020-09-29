import React, { useEffect, useState } from 'react';
import './App.css';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    console.log(accessKey);
    fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  });

  // if (!accessKey) {
  //   return (
  //     <a href='https://api.unsplash.com/developers'>
  //       Get Your Unsplash API Key
  //     </a>
  //   );
  // }

  return (
    <div className='app'>
      <h1>Unsplash Image Gallery</h1>
      <form>
        <input type='text' placeholder='Search ...' />
        <button>Search</button>
      </form>

      <div className='grid'>
        {images.map((image, index) => (
          <div className='image' key={index}>
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
