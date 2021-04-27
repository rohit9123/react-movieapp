import {data} from '../data';
import React from 'react';
import Navbar from './Navbar'
import Moviecard from './Moviecard'
import {addMovies,setShowFavourite,showFavourite} from '../action'


class App extends React.Component {

componentDidMount(){
  //make api call
 const {store}=this.props

  //Subscribe to store
  store.subscribe(()=>{
    this.forceUpdate();
  })


   //dispatch action
  store.dispatch(addMovies(data));

}
isMovieFavourite=(movie)=>{
  const {favourites}=this.props.store.getState();
  const index=favourites.indexOf(movie);
  if(index!==-1){
    //found the movie
    return true;
  }
  return false;
}
onChangeTab=(val)=>{
  this.props.store.dispatch(setShowFavourite(val))
}

  render(){
  let id=1;
  // let movietab=true;
  const {list,favourites,showFavourite}=this.props.store.getState();
  console.log(this.props.store.getState());
  const displayMovies=showFavourite?favourites:list
  return (
      <div className="App">
        <Navbar />
        <div className="main"> 

            <div className="tabs">

              <div className={`tab ${showFavourite?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movie</div>
              <div className={`tab ${showFavourite?'active-tab':''}`}  onClick={()=>this.onChangeTab(true)}>Favourites</div>
            </div>

            
            <div className="list">
            {displayMovies.map((movie,index) =>{
            return ( <Moviecard movie={movie} key={id++} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)}/>)
            })}
            {displayMovies.length===0?<div className='no-movies'>No Movie to display!</div>:null}
            </div>

        </div>
      </div>
  );
}
}

export default App;
