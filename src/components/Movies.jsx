import React, {Component} from 'react';
import Movie from './Movie';
import Sidebar from './Sidebar';
import Slider from './Slider';

class Movies extends Component {
  state = {
    user: 'John Doe',
    movies: [
      { title: 'Distric 9', image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fantifilmschoolsite.files.wordpress.com%2F2013%2F08%2Fdistrict-9-2.jpg&f=1&nofb=1', description: 'District 9 is a 2009 science fiction action film directed by Neill Blomkamp, written by Blomkamp and Terri Tatchell, and produced by Peter Jackson and Carolynne Cunningham.' },
      { title: 'The Matrix', image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DdV7NW2z_t-Lb25t_HDhIwHaEK%26pid%3DApi&f=1', description: 'The Matrix is a 1999 science fiction film directed by the Wachowskis that stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano.' },
      { title: 'Alien', image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-0W2I6BFcgoE%2FT-tzR3cfJsI%2FAAAAAAAAARM%2FLL-d8NHTEc4%2Fs1600%2Falien-1979-sigourney-weaver-photo-2.jpg&f=1&nofb=1', description: 'Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O\'Bannon. It follows the crew of the commercial space tug Nostromo who encounter the eponymous Alien.' }
    ],
    favorite: {},
    favoriteIndex: null
  }

  favorite = (movie, index) => {
    this.setState({
      favorite: movie,
      favoriteIndex: index + 1
    });
  }

  render(){
    return (
      <React.Fragment>
        <Slider
          title="Movies"
          size="slider-small"
        />
        <div className='center'>
          <div id='content' className='movies'>
            <h2 className="subheader">Movies</h2>
            <p>Recommended movies by the user {this.state.user}</p>
            {/* simple condition */}
            {/* { this.state.favorite.title &&
              <strong>Your favorite movie is the number {this.state.favoriteIndex}, {this.state.favorite.title}!</strong>
            } */}
            {/* ternary condition */}
            { this.state.favorite.title ? (
              <strong>Your favorite movie is the number {this.state.favoriteIndex}, {this.state.favorite.title}!</strong>
            ) : (
              <strong>Select a movie from the list!</strong>
            )}
            {
              this.state.movies.map((movie, i) => {
                return (
                  <Movie
                    key={i}
                    movie={movie}
                    markAsFavorite={this.favorite}
                    index={i}
                  />
                )
              })
            }
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    )
  }
}

export default Movies;
