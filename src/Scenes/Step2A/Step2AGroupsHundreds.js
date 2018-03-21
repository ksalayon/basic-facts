import React, {Component} from 'react';
import { GroupService } from '../../Services/GroupService';
import { EquationService as es} from '../../Services/EquationService';
import { Equation } from '../../Components/Equation/Equation';
import Utils from '../../Services/Utils';
import {
  Segment, Divider
} from 'semantic-ui-react';

class Step2AGroupsHundreds extends Component {

  componentWillMount(){
    this.init();
  }

  init() {
    var operator = '+';
    var divisor = 5;
    var limit = 1000;
    var numberOfItems = 12;

    var firstSet = GroupService.items(divisor, 1000, numberOfItems / 3);
    var secondSet = GroupService.items(divisor, 800, numberOfItems / 3);
    var thirdSet = GroupService.items(divisor, 500, numberOfItems / 3);

    var items = firstSet.concat(secondSet).concat(thirdSet);
    items = Utils.shuffleArray(items);
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
      this.props.renderTest.call(this)
    );
  }
}

export { Step2AGroupsHundreds };
