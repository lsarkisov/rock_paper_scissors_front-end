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

  onShapeSelection = (rps) => {
    const { onShapeSelection } = this.props;
    onShapeSelection({ rps });
  }

  render() {
    const { data } = this.state;

    return (
      <div className='shapes row col-sm-12 col-md-8 col-lg-8 col-xl-8'>
        {
          data.map((item, i) => {
            return (
              <div className='col' key={ i }>
                <dl className='card'
                  id={item.title}
                  onClick={() => this.onShapeSelection(i)}
                >
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
