import React from 'react';

const Pagination = ({goPrev, goNext, currentPage, totalItems}) => {

    const isPrevPageAvailable = currentPage === 1 ? false : true;

    const isNextPageAvailable = !(Math.ceil(totalItems/3) === currentPage)? true : false;


return (
    <div className='pagination'>
    <button className='btn' onClick={goPrev} disabled={!isPrevPageAvailable}>{isPrevPageAvailable ? '<' : null}</button>
    {currentPage}
    <button className='btn' onClick={goNext} disabled={!isNextPageAvailable}>{isNextPageAvailable ? '>' : null}</button>
    </div>
)

};

export default Pagination;