import React from 'react';
import { Link } from 'react-router-dom';
import Shapes from '../../containers/shapes';
import Score from '../../containers/score';

const Home = () => (
  <div className='container home'>
    <h1 className='jumbotron'>
      Welcome to Rock Paper Scissors game ;)
    </h1>
    <div className='row'>
      <Shapes />
      <Score />
    </div>
  </div>
);

export default Home;
