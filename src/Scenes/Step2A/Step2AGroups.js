import React, {Component} from 'react';
import { GroupService } from '../../Services/GroupService';
import { EquationService as es} from '../../Services/EquationService';
import { Equation } from '../../Components/Equation/Equation';
import { ResultDisplay } from '../../Components/ResultDisplay';
import '../../index.css';


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

  handleChange = (e, id) => {

    var val = parseInt(e.target.value, 10);

    var items = [...this.state.items];
    items = items.map((item, index) => {
      if(item.id === id) {
        item.input = val;
      }
      return item;
    });

    this.setState({
      items: items
    });
  }

  submitHandler(e) {
    var items = [...this.state.items];
    var passedCtr = 0;
    items = items.map((item, index) => {
        if(item.input === item.expectedInput) {
          item.solved = true;
          passedCtr++;
        }
        item.done = true;
        return item;
      });

    this.setState({
      items: items,
      numPassed: passedCtr,
      submitted: true
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
        showAnswer={true}
        input={item.input}
        expectedInput={item.expectedInput}
        solved={item.solved}
        done={item.done}
        onChange={(id, val) => this.handleChange(id, val)} />
    });
  }

  renderResults = () => {
    if(this.state.submitted) {
      return (
        <ResultDisplay
          points={this.state.numPassed}
          total={this.state.numberOfItems}
        />
      );
    }

  }

  reload() {
    this.init();
  }

  render() {
    var btn;
    if(!this.state.submitted) {
      btn = (<button className="submit" onClick={() => this.submitHandler()}>Submit</button>);
    } else {
      btn = (<button className="submit" onClick={() => this.reload()}>Reload</button>);
    }
    return (
      <div id="Step2AGroup">
        { this.renderResults() }
        <div className="equations">
          { this.renderEquations() }
        </div>
        <div className="actions">
          { btn }
        </div>

      </div>

    );
  }
}

export { Step2AGroups };
