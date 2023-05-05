import React, { useEffect, useState } from 'react';
import './Home.css';
import Movieslist from './MovieSection/Movieslist';

function Home() {

    const [adventure, setAdventure] = useState([]);
    const [comedy, setComedy] = useState([]);

    const [status,setStatus] = useState('IDEAL');
    const showCategory = ['Adventure','Comedy'];

    useEffect(() => {
        const fetchData = async () => {
            setStatus('LOADING');
            const apiData = await fetch('https://api.tvmaze.com/shows');
            const response = await apiData.json();

            const filterCategory = (setCategory,categoryName) => {

              setCategory( response.filter((show) => {
                let singleShow = show.genres.some((genre) => 
                  genre === categoryName
                );
                return singleShow;
              }));
            }

            filterCategory(setAdventure,showCategory[0]);
            filterCategory(setComedy,showCategory[1]);

            setStatus('IDEAL');
        }
        fetchData();
    },[]);

  if(status === 'LOADING')
    return (
      <div class="loader"></div>
    )

  return (
    <div className='movie-list'>
      <div className='movie-list-wrapper'>
        <Movieslist showlist={adventure} showCategory={showCategory[0]}/>
        <Movieslist showlist={comedy} showCategory={showCategory[1]}/>
      </div>
    </div>
  )
}

export default Home
