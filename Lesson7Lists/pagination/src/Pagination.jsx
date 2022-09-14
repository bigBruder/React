import React from 'react';

const Pagination = ({goPrev, goNext, currentPage, totalItems, itemsPerPage}) => {

    const isPrevPageAvailable = currentPage === 1 ? false : true;

    const isNextPageAvailable = itemsPerPage < 3 ? false : true;
return (
    <div className='pagination'>
    <button className='btn' onClick={goPrev} disabled={!isPrevPageAvailable}>{'<'}</button>
    {currentPage}
    <button className='btn' onClick={goNext} disabled={!isNextPageAvailable}>{'>'}</button>
    </div>
)

};

export default Pagination;