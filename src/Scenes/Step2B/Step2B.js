import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import { EquationService as es} from '../../Services/EquationService';
import { Equation } from '../../Components/Equation/Equation';
import Utils from '../../Services/Utils';
import { MulService } from '../../Services/MulService';
import { MulDivByThree } from './MulDivByThree';
import { MulDivByFour } from './MulDivByFour';
import { MulDivBySix } from './MulDivBySix';
import { MulDivBySeven } from './MulDivBySeven';
import { MulDivByEight } from './MulDivByEight';
import {
  Segment
} from 'semantic-ui-react';

class Step2B extends Component {

  handleClick = (e) => {
    var menu = document.getElementById('Step2BList');
    const lis = menu.querySelectorAll("ul li");
    [...lis].forEach(function(el){
      el.classList.remove('selected');
    });

    e.target.parentNode.classList.add('selected');
  }

  init() {
    // console.log('divisor: ', div);
    var divisor = this.props.div;
    var limit = this.props.limit;
    var numberOfItems = this.props.numberOfItems;
    // console.log('divisor: ', divisor);
    // console.log('limit: ', limit);
    // console.log('numberOfItems: ', numberOfItems);
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

  // reload(div) {
  //   this.props.init(div);
  // }

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

  reload() {
    this.props.init(this.props.div);
  }
  actionButtons(){
    var btn;
    if(!this.state.submitted) {
      btn = (<button className="submit" onClick={this.props.submitHandler.bind(this)}>Submit</button>);
    } else {
      btn = (<button className="submit" onClick={this.props.init.bind(this)}>Reload</button>);
    }
    return btn;
  }

  render() {
    return (
      <Segment className="step-menu" id="Step2BList">
        <h3>This is the Step 2B Stage - Good Luck!</h3>
        <ul>
          <li>
            <p>Multiplication/Division facts for 3's</p>
            <p>e.g.</p>
            <p>3 x 2 = __</p>
            <p>21 / 3 = __</p>
            <Link to="/step2b/muldivbythree" onClick={this.handleClick}>Go</Link>
          </li>
          <li>
            <p>Multiplication/Division facts for 4's</p>
            <p>e.g.</p>
            <p>3 x 4 = __</p>
            <p>16 / 4 = __</p>
            <Link to="/step2b/muldivbyfour" onClick={this.handleClick}>Go</Link>
          </li>
          <li>
            <p>Multiplication/Division facts for 6's</p>
            <p>e.g.</p>
            <p>6 x 2 = __</p>
            <p>42 / 6 = __</p>
            <Link to="/step2b/muldivbysix" onClick={this.handleClick}>Go</Link>
          </li>
          <li>
            <p>Multiplication/Division facts for 7's</p>
            <p>e.g.</p>
            <p>7 x 4 = __</p>
            <p>28 / 7 = __</p>
            <Link to="/step2b/muldivbyseven" onClick={this.handleClick}>Go</Link>
          </li>
          <li>
            <p>Multiplication/Division facts for 8's</p>
            <p>e.g.</p>
            <p>8 x 4 = __</p>
            <p>40 / 8 = __</p>
            <Link to="/step2b/muldivbyeight" onClick={this.handleClick}>Go</Link>
          </li>
        </ul>
        <div className="steps">
          <Route path="/step2b/muldivbythree" render={() =>
            <MulDivByThree
              id="MulDivByThree"
              title="Multiplication/Division facts for 3's"
              div={3}
              limit={(3 * 12)}
              numberOfItems={12}
              renderResults={this.props.renderResults}
              submitHandler={this.props.submitHandler}
              handleChange={this.props.handleChange}
              actionButtons={this.actionButtons}
              init={this.init}
              renderEquations={this.renderEquations}
              />}/>
          <Route path="/step2b/muldivbyfour" render={() =>
            <MulDivByFour
              id="MulDivByFour"
              title="Multiplication/Division facts for 4's"
              div={4}
              limit={(4 * 12)}
              numberOfItems={12}
              renderResults={this.props.renderResults}
              submitHandler={this.props.submitHandler}
              handleChange={this.props.handleChange}
              actionButtons={this.actionButtons}
              init={this.init}
              renderEquations={this.renderEquations}
              />}/>
          <Route path="/step2b/muldivbysix" render={() =>
            <MulDivBySix
              id="MulDivBySix"
              title="Multiplication/Division facts for 6's"
              div={6}
              limit={(6 * 12)}
              numberOfItems={12}
              renderResults={this.props.renderResults}
              submitHandler={this.props.submitHandler}
              handleChange={this.props.handleChange}
              actionButtons={this.actionButtons}
              init={this.init}
              renderEquations={this.renderEquations}
              />}/>
          <Route path="/step2b/muldivbyseven" render={() =>
            <MulDivBySeven
              id="MulDivBySeven"
              title="Multiplication/Division facts for 7's"
              div={7}
              limit={(7 * 12)}
              numberOfItems={12}
              renderResults={this.props.renderResults}
              submitHandler={this.props.submitHandler}
              handleChange={this.props.handleChange}
              actionButtons={this.actionButtons}
              init={this.init}
              renderEquations={this.renderEquations}
              />}/>
          <Route path="/step2b/muldivbyeight" render={() =>
            <MulDivByEight
              id="MulDivByEight"
              title="Multiplication/Division facts for 8's"
              div={8}
              limit={(8 * 12)}
              numberOfItems={12}
              renderResults={this.props.renderResults}
              submitHandler={this.props.submitHandler}
              handleChange={this.props.handleChange}
              actionButtons={this.actionButtons}
              init={this.init}
              renderEquations={this.renderEquations}
              />}/>
        </div>

      </Segment>
    );
  }
}

export { Step2B };
