import React, { Component } from 'react';
import './index.css';
import { Route, Link } from "react-router-dom";
import { Home } from './Scenes/Home/Home';
import { Step2A } from './Scenes/Step2A/Step2A';
import { Step2B } from './Scenes/Step2B/Step2B';
import { BFSetttings } from './Scenes/Settings/BFSettings';
import { ResultDisplay } from './Components/ResultDisplay';
import { MainMenu } from './Components/MainMenu/MainMenu';
import { Equation } from './Components/Equation/Equation';
import {
  Button, Container, Grid, Header, Icon, Image, Item, Label,
  Menu, Segment, Step, Table, Tab, Divider, Transition
} from 'semantic-ui-react';

export default class BF extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isTestVisible: false
    }
  }
  handleChange(e, id) {

    var val = parseInt(e.target.value, 10);
    val  = (val !== val) ? '' : val;
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

  renderResults() {
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
    console.log('reload this: ', this);
    this.init();
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

  actionButtons(){
    var btn;
    if(!this.state.submitted) {
      btn = (<Button className="submit" onClick={this.props.submitHandler.bind(this)}>Submit</Button>);
    } else {
      btn = (<Button className="submit" onClick={this.props.reload.bind(this)}>Reload</Button>);
    }
    return btn;
  }

  renderTest() {


    return (
      <div id={this.props.id} className="step-items">
        <h3>{this.props.title}</h3>
        { this.props.renderResults.call(this) }
        <Segment basic>
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

  render = () => {
    return (
      <div>
        <MainMenu/>
        <Container fluid>
          <Route exact path="/" render={() => <Home/>} />
          <Route path="/step2a" render={() =>
            <Step2A
              renderResults={this.renderResults}
              submitHandler={this.submitHandler}
              handleChange={this.handleChange}
              actionButtons={this.actionButtons}
              reload={this.reload}
              renderEquations={this.renderEquations}
              renderTest={this.renderTest}
              />}/>
          <Route path="/step2b" render={() =>
            <Step2B
              renderResults={this.renderResults}
              submitHandler={this.submitHandler}
              handleChange={this.handleChange}
              renderEquations={this.renderEquations}
              renderTest={this.renderTest}
              />}/>
          <Route path="/settings" component={BFSetttings} />
        </Container>

      </div>
    );

  }
}
