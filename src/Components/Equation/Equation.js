import React, { Component } from 'react';
import './index.css';

class Equation extends Component {

  renderParts() {

    var resultPart;

    if(!this.props.showAnswer) {
      resultPart = (<div className="answer"><input type="text" value={this.props.input}  onChange={(e) => this.props.onChange(e, this.props.id)}/></div>);
    } else {
      resultPart = (<div><span className="answer">{ this.props.answer }</span></div>);
    }

    var firstOperandPart;
    if(!this.props.firstOperandInput) {
      firstOperandPart = (<div className="first-operand">{ this.props.firstOperand }</div>);
    } else {
      firstOperandPart = (<div className="first-operand input"><input type="text" value={this.props.input} onChange={(e) => this.props.onChange(e, this.props.id)}/></div>);
    }

    var secondOperandPart;
    if(!this.props.secondOperandInput) {
      secondOperandPart = (<div className="second-operand">{ this.props.secondOperand }</div>);
    } else {
      secondOperandPart = (<div className="second-operand input"><input type="text" value={this.props.input} onChange={(e) => this.props.onChange(e, this.props.id)}/></div>);
    }

    var successPart;
    if(this.props.done) {
      if (this.props.solved) {
        successPart = (<div className="result"><span role="img" aria-label="correct">&#x2705;</span></div>)
      } else {
        successPart = (<div className="result"><span role="img" aria-label="correct">&#x274C;</span> - Correct Answer is {this.props.expectedInput}</div>)
      }
    }

    return <div className="parts">
        { firstOperandPart }
        <div className="operator">{ this.props.operator }</div>
        { secondOperandPart }
        <div className="equals-sign">=</div>
        { resultPart }
        { successPart }
      </div>
  }

  render() {
    return (
      <div className="equation-component">
        { this.renderParts() }
      </div>
    )
  }
}

export { Equation }
