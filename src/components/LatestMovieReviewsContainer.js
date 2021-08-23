import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'nvqw1w1ARprCCEC9gXAMw2AAaL8aMjwI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = { reviews: [] };

  render() {
    return <div className='latest-movie-reviews'><MovieReviews reviews={this.state.reviews} /></div>;
  }
  
  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({ reviews: json.results }))
  }
}
