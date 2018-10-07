import React from 'react';
import Shapes from '../../containers/shapes';
import Scores from '../../containers/scores';

const Home = () => (
  <div className='container home'>
    <h1 className='jumbotron'>
      Welcome to Rock Paper Scissors game ;)
    </h1>
    <div className='row'>
      <Shapes />
      <Scores />
    </div>
  </div>
);

export default Home;
