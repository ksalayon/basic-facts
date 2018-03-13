import React, { Component } from 'react';
import './index.css';
import { Route, Link } from "react-router-dom";
import { Home } from './Scenes/Home/Home';
import { Step2A } from './Scenes/Step2A/Step2A';
import { Step2B } from './Scenes/Step2B/Step2B';
import { BFSetttings } from './Scenes/Settings/BFSettings';
import { ResultDisplay } from './Components/ResultDisplay';

export default class BF extends Component {

  handleChange(e, id) {

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
    this.init();
  }

  actionButtons(){
    var btn;
    if(!this.state.submitted) {
      btn = (<button className="submit" onClick={this.props.submitHandler.bind(this)}>Submit</button>);
    } else {
      btn = (<button className="submit" onClick={this.props.reload.bind(this)}>Reload</button>);
    }
    return btn;
  }

  render = () => {
    return (
      <div>
        <div>
          <ul className="h-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/step2a">Step 2 A</Link>
            </li>
            <li>
              <Link to="/step2b">Step 2 B</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>

        <Route exact path="/" render={() => <Home/>} />
        <Route path="/step2a" render={() =>
          <Step2A
            renderResults={this.renderResults}
            submitHandler={this.submitHandler}
            handleChange={this.handleChange}
            actionButtons={this.actionButtons}
            />}/>
        <Route path="/step2b" render={() =>
          <Step2B
            renderResults={this.renderResults}
            submitHandler={this.submitHandler}
            handleChange={this.handleChange}
            />}/>
        <Route path="/settings" component={BFSetttings} />
      </div>
    );

  }
}
