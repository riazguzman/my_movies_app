import React from 'react';

import MovieInfoGet from './components/MovieInfo'

class App extends React.Component{
  render(){
    return(
      <MovieInfoGet MovieName={'moviename'}/>
    )
  }
}

export default App;
