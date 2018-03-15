import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import { EquationService as es} from '../../Services/EquationService';
import { Equation } from '../../Components/Equation/Equation';
import Utils from '../../Services/Utils';
import { MulService } from '../../Services/MulService';
import BFSource from '../../Services/Datasource/BFSource';
import { MulDivByThree } from './MulDivByThree';
import { MulDivByFour } from './MulDivByFour';
import { MulDivBySix } from './MulDivBySix';
import { MulDivBySeven } from './MulDivBySeven';
import { MulDivByEight } from './MulDivByEight';
import {
  Card, Header, Segment, Grid
} from 'semantic-ui-react';

class Step2B extends Component {

  constructor(props) {
    super(props);
    this.stepList = BFSource.step2bItems;
  }
  handleClick = (e) => {
    var menu = document.getElementById('Step2BList');
    const lis = menu.querySelectorAll("ul li");
    [...lis].forEach(function(el){
      el.classList.remove('selected');
    });

    e.target.parentNode.classList.add('selected');
  }

  init() {
    var divisor = this.props.div;
    var limit = this.props.limit;
    var numberOfItems = this.props.numberOfItems;
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

    return <Grid columns={2}>
    {
      items.map((item, idx) => {
        return <Grid.Column key={item.id}>
          <Grid.Row>
            <Equation
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
            </Grid.Row>
          </Grid.Column>
      })
    }
    </Grid>
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
        <Header>This is the Step 2B Stage - Good Luck!</Header>
        <Grid columns={2}>
          <Grid.Column>
            <Grid.Row stretched>
              <Grid columns={3}>
              {
                this.stepList.map((step, idx) => {
                  return <Grid.Column key={step.id}>
                    <Card>
                      <Card.Content header={step.header} />
                      <Card.Content>
                        {step.content}
                      </Card.Content>
                      <Card.Content extra>
                        <Link to={step.link} onClick={this.handleClick}>Go</Link>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                })
              }
              </Grid>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Segment className="steps">
              {
                this.stepList.map((step, idx) => {
                  return <Route path={step.link} key={step.id} render={() =>
                    <Segment as={step.comp}
                      id={step.id}
                      title={step.header}
                      div={step.div}
                      limit={step.limit}
                      numberOfItems={step.numberOfItems}
                      renderResults={this.props.renderResults}
                      submitHandler={this.props.submitHandler}
                      handleChange={this.props.handleChange}
                      actionButtons={this.actionButtons}
                      init={this.init}
                      renderEquations={this.renderEquations}
                      />}/>
                })
              }
            </Segment>
          </Grid.Column>
        </Grid>



      </Segment>
    );
  }
}

export { Step2B };
