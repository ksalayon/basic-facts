import React, {Component} from 'react';

class MulDivBySeven extends Component {

  componentWillMount(){
    this.props.init.call(this, 7);
  }

  render() {

    return (
      <div id={this.props.id} className="step-items">
        <h3>{this.props.title}</h3>
        { this.props.renderResults.call(this) }
        <div className="equations">
            { this.props.renderEquations.call(this) }
        </div>
        <div className="actions">
          { this.props.actionButtons.call(this) }
        </div>

      </div>

    );
  }
}

export { MulDivBySeven };
