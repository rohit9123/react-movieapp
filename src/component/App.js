import {data} from '../data';
import React from 'react';
import Navbar from './Navbar'
import Moviecard from './Moviecard'
import {addMovies} from '../action'


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

  render(){
  let id=1;
  const movies=this.props.store.getState();
  // console.log(movies);
  return (
      <div className="App">
        <Navbar />
        <div className="main"> 

            <div className="tabs">
              <div className="tab">Movie</div>
              <div className="tab">Favourites</div>
            </div>


            <div className="list">
            {movies.map((movie,index) =>{
            return ( <Moviecard movie={movie} key={id++}/>)
            })}
            </div>

        </div>
      </div>
  );
}
}

export default App;
