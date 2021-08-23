import React from 'react';

const MovieReviews = ({reviews}) => {
  return (
    <ul className='review-list'>
      {reviews.map(review => 
        <li key={Math.random()}>
          <h1 className='review'>{review.display_title}</h1>
        </li>  
      )}
    </ul>
  )
}

export default MovieReviews;
