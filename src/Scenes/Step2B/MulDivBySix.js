import React, {Component} from 'react';

class MulDivBySix extends Component {

  componentWillMount(){
    this.props.init.call(this, 6);
  }

  render() {
    return (
      this.props.renderTest.call(this)
    );
  }
}

export { MulDivBySix };
