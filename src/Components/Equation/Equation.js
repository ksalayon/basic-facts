import React, { Component } from 'react';
import './index.css';

class Equation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foVisible: false,
      soVisible: false
    }
  }

  add() {
      const args = Array.from(arguments);
      return args.reduce((ac, cv) => (ac + cv));
  }

  subtract() {
    const args = Array.from(arguments);
    return args.reduce((ac, cv) => (ac - cv));
  }

  multiply() {
    const args = Array.from(arguments);
    return args.reduce((ac, cv) => (ac * cv));
  }

  divide() {
    const args = Array.from(arguments);
    return args.reduce((ac, cv) => (ac / cv));
  }

  execute() {
    const firstOp = this.props.firstOperand;
    const secondOp = this.props.secondOperand;

    switch (this.props.operator) {
      case '+':
          return this.add(firstOp, secondOp);
        break;

      case '-':
          return this.subtract(firstOp, secondOp);
        break;

      case 'x':
          return this.multiply(firstOp, secondOp);
        break;

      case '/':
          return this.divide(firstOp, secondOp);
        break;

      default:
        return 0;
    }
  }

  renderParts() {

    const ran = Math.floor(Math.random() * 2) + 0;
    console.log('ran: ', ran, ' for ', this.props);
    this.setState = {
      foVisible: !ran,
      soVisible: ran
    };

    var resultPart;
    if(!this.props.showAnswer) {
      resultPart = (<div className="answer"><input type="text" /></div>);
    } else {
      resultPart = (<div><span className="answer">{ this.execute() }</span></div>);
    }

    var firstOperandPart;
    if(!ran) {
      firstOperandPart = (<div className="first-operand">{ this.props.firstOperand }</div>);
    } else {
      firstOperandPart = (<div className="first-operand input"><input type="text" /></div>);
    }

    var secondOperandPart;
    if(ran) {
      secondOperandPart = (<div className="second-operand">{ this.props.secondOperand }</div>);
    } else {
      secondOperandPart = (<div className="second-operand input"><input type="text" /></div>);
    }

    return <div className="parts">
        { firstOperandPart }
        <div className="operator">{ this.props.operator }</div>
        { secondOperandPart }
        <div className="equals-sign">=</div>
        { resultPart }
      </div>
  }

  render() {
    return (
      <div className="equation">
        { this.renderParts() }
      </div>
    )
  }
}

export { Equation }
