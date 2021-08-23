import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'nvqw1w1ARprCCEC9gXAMw2AAaL8aMjwI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = { 
    reviews: [],
    searchTerm: ''
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form>
          <input type='text' />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({ reviews: json.results }))
  }
}