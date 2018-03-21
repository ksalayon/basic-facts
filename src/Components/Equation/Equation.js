import React, { Component } from 'react';
import './index.css';
import {
  Button, Grid, Input, Segment, Image, Item, Label, Icon
} from 'semantic-ui-react';

class Equation extends Component {

  renderAnswer() {
    let part;
    if(!this.props.showAnswer) {
      part = (<Input className="answer" type="text" value={this.props.input}  onChange={(e) => this.props.onChange(e, this.props.id)}/>);
    } else {
      part = (<Label className="answer" circular color="green">{ this.props.answer }</Label>);
    }
    return part;
  }

  renderFirstOp() {
    var firstOperandPart;
    if(!this.props.firstOperandInput) {
      firstOperandPart = (<Label  color="blue" className="first-operand" circular>{ this.props.firstOperand }</Label>);
    } else {
      firstOperandPart = (<Input className="first-operand input" type="text" value={this.props.input} onChange={(e) => this.props.onChange(e, this.props.id)}/>);
    }

    return firstOperandPart;

  }

  renderSecondOp() {
    var secondOperandPart;
    if(!this.props.secondOperandInput) {
      secondOperandPart = (<Label color="blue" className="second-operand" circular>{ this.props.secondOperand }</Label>);
    } else {
      secondOperandPart = (<Input className="second-operand" type="text" value={this.props.input} onChange={(e) => this.props.onChange(e, this.props.id)}/>);
    }

    return secondOperandPart;
  }

  renderResult() {
    var part;
    if(this.props.done) {
      if (this.props.solved) {
        part = (<Segment basic className="result"><span role="img" aria-label="correct"><Icon name="checkmark" color="green"/></span></Segment>)
      } else {
        part = (<Segment basic className="result"><span role="img" aria-label="correct"><Icon name="x" color="red"/></span> - The answer is {this.props.expectedInput}</Segment>)
      }
    }

    return part;
  }

  renderParts() {

    return <Segment className="parts">
            <Label.Group circular>
            { this.renderFirstOp() }
            <Label className="operator" color="red">{ this.props.operator }</Label>
            { this.renderSecondOp() }
            <Label className="equals-sign" color="orange">=</Label>
            { this.renderAnswer() }
            { this.renderResult() }
          </Label.Group>
          </Segment>;
  }

  render() {
    return (
        <div className={(!this.props.done) ? 'equation-component' : 'equation-component done'}>
        { this.renderParts() }
      </div>
    )
  }
}

export { Equation }
