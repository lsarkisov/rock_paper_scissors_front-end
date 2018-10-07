import React, { Component } from 'react';

class Scores extends Component {
    state = {
      shapes: ['ROCK', 'PAPER', 'SCISSORS'],
      user: null,
      computer: null,
      win: null,
    }

    componentWillReceiveProps(nextProps) {
      setTimeout(() => { // hack, I know ;)
        const { user, computer, win } = this.props;
        this.setState({
          user, computer, win
        });
      });
    }

  render() {
    const { user, computer, win } = this.state;
    
    return (
      <div className='score row col-sm-12 col-md-4 col-lg-4 col-xl-4'>
        <div className='col'>
          <h3>You</h3>
          <p>{ user }</p>
        </div>
        <div className='col'>
          <h3>Computer</h3>
          <p>{ computer }</p>
        </div>
          {
            user &&
            (
              <div className={
                `alert ${win ? 'alert-success' : 'alert-danger'}`
              }>
                <p><span>You </span>
                  <strong>
                    {
                      `${win ? 'win :)' : 'lost ;)'}`
                    }
                  </strong>
                </p>
              </div>
            )
          }
      </div>
    )
  }
}

export default Scores;
