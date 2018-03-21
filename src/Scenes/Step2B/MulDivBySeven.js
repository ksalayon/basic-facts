import React, {Component} from 'react';

class MulDivBySeven extends Component {

  componentWillMount(){
    this.props.init.call(this, 7);
  }

  render() {
    return (
      this.props.renderTest.call(this)
    );
  }
}

export { MulDivBySeven };
