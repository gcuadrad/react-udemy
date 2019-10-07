import React, {Component} from 'react';

class Movie extends Component {
  markMovie = () => {
    this.props.markAsFavorite(this.props.movie, this.props.index);
  }
  render(){
    const {title, description, image } = this.props.movie;
    return(
      <React.Fragment>
        <div id="articles">
          <article className="article-item" id="article-template">
              <div className="image-wrap">
                  <img src={image} alt={title} />
              </div>

              <h2>{title}</h2>
              <span className="date">
                  Hace 5 minutos
              </span>
              <p>{description}</p>
              <a href="#">Leer más</a>
            <button onClick={this.markMovie}>
              Mark as Favorite
            </button>
              <div className="clearfix"></div>
          </article>
        </div>
      </React.Fragment>
    )
  }
}

export default Movie;
