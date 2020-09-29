import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <h1>Unsplash Image Gallery</h1>
      <form>
        <input type='text' placeholder='Search ...' />
        <button>Search</button>
      </form>

      <div className='grid'>
        {[...Array(100)].map((_, index) => (
          <div className='image' key={index}>
            <img src='https://placekitten.com/g/1920/1080' alt='Sample' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
