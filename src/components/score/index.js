import React, { Component } from 'react';

class Score extends Component {
    state = {
        userSelection: null,
        computerSelection: null,
    }

    componentWillReceiveProps(nextProps) {
        const { shape } = nextProps;
        if(shape) {
            this.setState({
                userSelection: shape.userSelection,
                computerSelection: shape.computerSelection,
            });
        }
    }

  render() {
    const {
      userSelection,
      computerSelection,
    } = this.state;

    return (
      <div className='score col-sm-12 col-md-4 col-lg-4 col-xl-4'>
        {
            computerSelection &&
            <div>{ computerSelection }</div>
        }
        {
          userSelection &&
          <div>{ userSelection.rps }</div>
        }
      </div>
    )
  }
}

export default Score;
