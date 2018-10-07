import React, { Component } from 'react';

class Shapes extends Component {
  state = {
    data: [{
      title: 'rock',
      icon:  'fa-hand-rock-o',
    }, {
      title: 'scissors',
      icon:  'fa-hand-scissors-o',
    }, {
      title: 'paper',
      icon:  'fa-hand-paper-o',
    }],
  }

  onShapeSelection = (e, user) => {
    e.stopPropagation();
    const { onShapeSelection } = this.props;
    onShapeSelection({ user });
  }

  render() {
    const { data } = this.state;

    return (
      <div className='shapes row col-sm-12 col-md-8 col-lg-8 col-xl-8'>
        {
          data.map((item, i) => {
            return (
              <div
                key={ i }
                className='col'
                onClick={(e) => this.onShapeSelection(e, i)}
              >
                <dl className='card'>
                  <dt>{ item.title }</dt>
                  <dd className={`fa ${item.icon}`} aria-hidden='true' />
                </dl>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Shapes;
