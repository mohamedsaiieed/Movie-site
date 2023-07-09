import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import logo from '../images/Dragon-Ball-Logo-PNG-File.png';
import { useDispatch } from 'react-redux';
import { getAllMovies,getMovieSearch } from '../redux/actions/MovieAction';

function NavBar() {

  const onSearch = (word) => {
    search(word)
  }
  const dispatch = useDispatch();
  //to search in api
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovies())
    } else {
      dispatch(getMovieSearch(word))
    }
  }

  return (
    <div className='nav-style w-100'>
    <Container>
      <Row className='pt-2'>
        <Col xs='2' lg='1'>
            <a href='/'>
              <img className='logo' src={logo} alt=''/>
            </a>
        </Col>
        <Col xs='10' lg='11' className='d-flex align-items-center'>
          <div className='search w-100'>
            <input onChange={(e) =>onSearch(e.target.value)} type='text' className='form-control' placeholder='search...'/>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default NavBar
