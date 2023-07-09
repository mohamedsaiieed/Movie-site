import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../redux/actions/MovieAction';

function Paginationn() {

  const [pageCount, setpageCount] = useState(0)

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
      setpageCount(pages)
  }, [])


  const handlePageClick = (data) => {
      dispatch(getPage(data.selected + 1))
  }

  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    marginPagesDisplayed={2}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}

    containerClassName='pagination justify-content-center p-2'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    nextClassName='page-item'
    nextLinkClassName='page-link'
    previousClassName='page-item'
    previousLinkClassName='page-link'
    breakClassName='page-item'
    breakLinkClassName='page-link'
    activeClassName='active'
    />
  )
}

export default Paginationn
