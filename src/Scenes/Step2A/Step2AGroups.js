import React, {Component} from 'react';
import { GroupService } from '../../Services/GroupService';
import { EquationService as es} from '../../Services/EquationService';
import { Equation } from '../../Components/Equation/Equation';

class Step2AGroups extends Component {

  constructor(props) {
    super(props);
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
      return item;
    });


    this.state = {
      divisor: divisor,
      limit: limit,
      numberOfItems: numberOfItems,
      operator: operator,
      items:items
    };

  }

  handleChange = (e, id) => {

    var val = parseInt(e.target.value, 10);

    var items = [...this.state.items];
    items = items.map((item, index) => {
      if(item.id === id) {
        item.input = val;
        if(val === item.expectedInput) {
          item.solved = true;
        }
      }
      return item;
    });

    this.setState({
      items: items
    });
  }

  submitHandler(e) {
    console.log('Submitting Answers.');
  }

  renderEquations(){
    var items = [...this.state.items];

    return items.map((item, idx) => {
      return <Equation
        key={item.id}
        id={item.id}
        firstOperand={item.firstOperand}
        firstOperandInput={item.firstOperandInput}
        secondOperand={item.secondOperand}
        secondOperandInput={item.secondOperandInput}
        operator={item.operator}
        answer={item.answer}
        showAnswer={true}
        input={item.input}
        solved={item.solved}
        onChange={(id, val) => this.handleChange(id, val)} />
    });
  }

  render() {
    return (
      <div id="Step2AGroup">
        <div className="equations">
          { this.renderEquations() }
        </div>
        <button onClick={() => this.submitHandler()}>Submit</button>
      </div>

    );
  }
}

export { Step2AGroups };
