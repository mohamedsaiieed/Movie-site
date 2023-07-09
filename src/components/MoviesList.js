import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import Paginationn from './Paginationn'
import { useSelector, useDispatch } from 'react-redux'
import {getAllMovies} from '../redux/actions/MovieAction';

function MoviesList() {

  const [movies, setMovies] = useState([])

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies])


  return (
    
    <Row className='mt-3'>
    {movies.length >= 1 ? (movies.map((mov) => {
      return (<CardMovie key={mov.id} mov={mov}/>)
    })) : <h2>not found any film...</h2>
  }

  {movies.length >=1 ? (<Paginationn/>) : null}
  
    </Row>
  )
}

export default MoviesList
