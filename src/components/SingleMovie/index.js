import React from 'react';

import FavoriteBtn from '../../containers/FavoriteBtn';

const SingleMovie = (props) => {
  const date = props.release_date;
  const year = date.split('').splice(0, 4).join('');
  return (
  <div className='single-movie-wrapper'>
    <FavoriteBtn movieId={props.id}/>
    <img src={`https://image.tmdb.org/t/p/w400_and_h600_bestv2${props.poster_path}`} alt={props.title}/>
    <section className='movie-poster-text'>
      <h2>{props.title}</h2>
      <h3>{year}</h3>
    </section>
  </div>
)}


export default SingleMovie;