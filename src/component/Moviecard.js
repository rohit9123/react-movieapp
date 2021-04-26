import React from 'react';
import {addFavourite,unFavourite} from '../action/index';


class Moviecard extends React.Component{


    handleFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie))
    }
    handleUnFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(unFavourite(movie));
    }
    render(){
        const {movie,isFavourite}=this.props
        // console.log(movie);
        return(
            <div className="movie-card">
               <div className="left">
                   <img src={movie.Poster} alt="movie-poster"/>
               </div>
               <div className="right">
                   <div className="title">{movie.Title}</div>
                   <div className="plot">{movie.Plot}</div>
                   <div className="footer">
                       <div className="rating">{movie.imdbRating}</div>
                       {isFavourite?
                        <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>Unfavourites</button>:
                      <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourites</button>
                       }
                   </div>
               </div>
            </div>
        );
    }


}

export default Moviecard;