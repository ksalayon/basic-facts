import React, {Component} from 'react';

class MulDivByThree extends Component {

  componentWillMount(){
    this.props.init.call(this);
  }

  render() {
    return (
      this.props.renderTest.call(this)
    );
  }
}

export { MulDivByThree };
