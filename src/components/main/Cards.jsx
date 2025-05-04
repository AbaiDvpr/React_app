import React from 'react';
import { useState } from 'react';
function Cards(){
  
    // films[0].id =zat.id
    const [films, setFilms] = useState([
            {
            id: 1,
            title: 'Inception',
            year: 2010,
            image: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'
            },

            {
                id: 2,
                title: 'Interstellar',
                year: 2014,
                image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
            },
            {
                id: 3,
                title: 'The Dark Knight',
                year: 2008,
                image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
            },
            {
                id: 4,
                title: 'The Dark Knight2',
                year: 2018,
                image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
            },
            {
                id: 5,
                title: 'The Dark Knight2',
                year: 2018,
                image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
            },
            
            {
                id: 6,
                title: 'The Dark Knight2',
                year: 2018,
                image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
            },

            {
                id: 7,
                title: 'The Dark Knight2',
                year: 2018,
                image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
            },
            {
                id: 8,
                title: 'The Dark Knight2',
                year: 2018,
                image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
            },
            {
                id: 9,
                title: 'The Dark Knight2',
                year: 2018,
                image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
            },


    ]);

    return(
        <>

            <div className='film-container'>
                {
                    films.map((film)=>(
                        <div key={film.id} className='film-card'>
                            <img src={film.image} alt="" />
                            <h3>{film.title}</h3>
                            <p>{film.year}</p>
                        </div>
                    ))
                }

            </div>

            <p>
                ---------------
            </p>


            <div className='film-container'>
              
              {
                  films.map((item)=>(
                    <div className='film-card'>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.year}</p>
                    </div>
                  ))
              }

          </div>

 

         
        </>
    )
}
export default Cards;