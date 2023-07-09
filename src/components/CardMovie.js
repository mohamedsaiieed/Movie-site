import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardMovie({mov}) {
  return (
    <Col xs='6' sm='6' lg='3' className='my-1'>
    <Link to={`/movie/${mov.id}`}>
    <div className='card'>
    <img src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} className='card__image' alt=''/>
    <div className='card__overlay'>
      <div className='overlay__text text-center w-100 p-2'>
          <p>film name : {mov.original_title}</p>
          <p>puplish date : {mov.release_date}</p>
          <p>vote count : {mov.vote_count}</p>
          <p>rate : {mov.vote_average}</p>
      </div>
    </div>
  </div>
  </Link>
    </Col>
  )
}

export default CardMovie
