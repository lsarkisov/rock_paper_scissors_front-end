import React, { Component } from 'react';

class Score extends Component {
    state = {
      shapes: ['ROCK', 'PAPER', 'SCISSORS'],
      userSelection: null,
      computerSelection: null,
    }

    componentWillReceiveProps(nextProps) {
        const { shape } = nextProps;
        if(shape) {
            console.log('Shape: ', shape)
            this.setState({
                userSelection: shape.userSelection,
                computerSelection: shape.computerSelection,
            });
        }
    }

  render() {
    const {
      shapes,
      userSelection,
      computerSelection,
    } = this.state;

    return (
      <div className='score col-sm-12 col-md-4 col-lg-4 col-xl-4'>
        {
          computerSelection &&
          <div>{ computerSelection.shape.rps }</div>
        }
        {
          userSelection &&
          <div>{ shapes[userSelection.rps] }</div>
        }
        {
          computerSelection &&
          <div className={
            `${computerSelection.shape.win ? 'alert-success' : 'alert-danger'}`
          }>
            <p><span>You </span>
              <strong>
                {
                  `${computerSelection.shape.win ? 'win' : 'lost'}`
                }
              </strong>
            </p>
          </div>
        }
      </div>
    )
  }
}

export default Score;
