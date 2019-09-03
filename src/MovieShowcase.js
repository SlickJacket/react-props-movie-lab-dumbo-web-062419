import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
      return movieData.map((data) => {
        return <MovieCard key={data.title} title={data.title} poster={data.poster} rating={data.IMDBRating} genres={data.genres}  />
      })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
