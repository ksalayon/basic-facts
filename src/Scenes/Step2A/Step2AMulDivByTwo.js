import React, {Component} from 'react';
import { MulService } from '../../Services/MulService';
import { EquationService as es} from '../../Services/EquationService';
import { Equation } from '../../Components/Equation/Equation';
import Utils from '../../Services/Utils';

class Step2AMulDivByTwo extends Component {

  componentWillMount(){
    this.init();
  }

  init() {

    var divisor = 2;
    var limit = 30;
    var numberOfItems = 10;

    var mItems = MulService.items(divisor, limit, numberOfItems / 2);

    mItems = mItems.map((item, idx) => {
      item.operator = 'x';
      item.answer = es.execute(item.firstOperand, item.secondOperand, item.operator);
      item.expectedInput = item.answer;
      item.id = item.firstOperand + item.operator + item.secondOperand;
      return item;
    });

    var divItems = MulService.items(divisor, limit, numberOfItems / 2);
    divItems = divItems.map((item, idx) => {
      item.operator = '/';

      var origFO = item.firstOperand;
      var origSO = item.secondOperand;
      var origA = es.execute(item.firstOperand, item.secondOperand, 'x');
      item.firstOperand = origA;
      item.secondOperand = origSO;
      item.answer = origFO;
      item.expectedInput = item.answer;
      item.id = item.firstOperand + '-div-' + item.secondOperand;
      return item;
    });

    var items = mItems.concat(divItems);

    items = Utils.shuffleArray(items);

    items = items.map((item, idx) => {
      item.firstOperandInput = false;
      item.secondOperandInput = false;
      item.showAnswer = false;
      item.solved = false;
      item.input = '';
      item.done = false;
      return item;
    });

    this.setState({
      divisor: divisor,
      limit: limit,
      numberOfItems: numberOfItems,
      items:items,
      numPassed:0,
      numFailed:0,
      submitted:false
    });
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
        showAnswer={item.showAnswer}
        input={item.input}
        expectedInput={item.expectedInput}
        solved={item.solved}
        done={item.done}
        onChange={this.props.handleChange.bind(this)} />
    });
  }

  render() {

    return (
      <div id="Step2AMulDivByTwo" className="step-items">
        <h3>{this.props.title}</h3>
        { this.props.renderResults.call(this) }
        <div className="equations">
          { this.renderEquations() }
        </div>
        <div className="actions">
          { this.props.actionButtons.call(this) }
        </div>

      </div>

    );
  }
}

export { Step2AMulDivByTwo };
