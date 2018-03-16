import React, {Component} from 'react';
import { GroupService } from '../../Services/GroupService';
import { EquationService as es} from '../../Services/EquationService';
import { Equation } from '../../Components/Equation/Equation';
import {
  Segment, Divider
} from 'semantic-ui-react';

class Step2AGroups extends Component {

  componentWillMount(){
    this.init();
  }

  init() {
    var operator = '+';
    var divisor = 5;
    var limit = 100;
    var numberOfItems = 10;

    var items = GroupService.items(divisor, limit, numberOfItems);

    items = items.map((item, idx) => {
      const ran = Math.floor(Math.random() * 2) + 0;
      item.firstOperandInput = (!ran) ? false : true;
      item.secondOperandInput = (ran) ? false : true;
      item.answer = es.execute(item.firstOperand, item.secondOperand, operator);
      item.expectedInput = (item.firstOperandInput) ? item.firstOperand : item.secondOperand;
      item.id = item.firstOperand + operator + item.secondOperand;
      item.showAnswer = true;
      item.operator = operator;
      item.solved = false;
      item.input = '';
      item.done = false;
      return item;
    });


    this.setState({
      divisor: divisor,
      limit: limit,
      numberOfItems: numberOfItems,
      operator: operator,
      items:items,
      numPassed:0,
      numFailed:0,
      submitted:false
    });
  }

  render() {

    return (
      <div id="Step2AGroups" className="step-items">
        <h3>{this.props.title}</h3>
        { this.props.renderResults.call(this) }
        <Segment>
          <div className="equations">
          { this.props.renderEquations.call(this) }
          </div>
          <Divider section />
          <div className="actions">
            { this.props.actionButtons.call(this) }
          </div>
        </Segment>

      </div>

    );
  }
}

export { Step2AGroups };
