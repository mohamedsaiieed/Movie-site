import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {

  const param = useParams();

  const [movie,setMovie] = useState([]);

  const movieDetails =async () => {
    const res =await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=8dd94b085b4374ae669f7f33a3c6d712&language=en-US`);
    setMovie(res.data);
  }

  useEffect(() => {
    movieDetails();
  })
  return (
    <div>
       <Row className='justify-content-center'>
         <Col md='12' sm='12' className='mt-4'>
           <div className='card-detalis d-flex align-items-center'>
             <img
             className='img-movie w-30'
             src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
             alt=''
             />
             <div className='justify-content-center text-center mx-auto'>
               <p className='card-text-details border-bottom'>
               Film name : {movie.original_title}
               </p>
               <p className='card-text-details border-bottom'>
                 Puplish date: {movie.release_date}
               </p>
               <p className='card-text-details border-bottom'>
                Vote count : {movie.vote_count}
               </p>
               <p className='card-text-details border-bottom'>
                Rate : {movie.vote_average}
               </p>
             </div>
           </div>
         </Col>
       </Row>

       <Row className='justify-content-center h-30'>
         <Col md='12' xs='12' sm='12' className='mt-1'>
           <div className='card-story d-flex flex-column align-items-start'>
             <div className='text-end p-4'>
               <p className='card-text-title border-bottom'>Film story : </p>
             </div>
             <div className='text-end px-2'>
               <p className='card-text-story'>{movie.overview} </p>
             </div>
           </div>
         </Col>
       </Row>

       <Row className='justify-content-center'>
         <Col md='10' xs='12' sm='12' className='mt-2 d-flex justify-content-center'>
         <Link to={'/'}>
         <button
         style={{backgroundColor: '#b45b35',border:'none'}}
         className="btn btn-primary mx-2 mb-1">
         Back to Home
         </button>
         </Link>

         <a target='_blank' rel='noreferrer' href={movie.homepage}>
         <button 
         style={{backgroundColor:'#b45b35',border:'none'}}
         className="btn btn-primary mb-1">
         Watch movie
         </button>
         </a>
         </Col>
       </Row>
    </div>
  )
}

export default MovieDetails
