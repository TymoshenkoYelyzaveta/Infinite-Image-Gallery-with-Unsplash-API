import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPhotos();
  }, [page]);

  const getPhotos = () => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages((images) => [...images, ...data]);
      });
  };
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
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          setPage((page) => page + 1);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className='grid'>
          {images.map((image, index) => (
            <a
              href={image.links.html}
              target='_blank'
              rel='noopener noreferrer'
              className='image'
              key={index}
            >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
