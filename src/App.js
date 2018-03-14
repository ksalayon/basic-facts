import React, { Component } from 'react';
import './index.css';
import { Route, Link } from "react-router-dom";
import { Home } from './Scenes/Home/Home';
import { Step2A } from './Scenes/Step2A/Step2A';
import { Step2B } from './Scenes/Step2B/Step2B';
import { BFSetttings } from './Scenes/Settings/BFSettings';
import { ResultDisplay } from './Components/ResultDisplay';
import {
  Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, Tab
} from 'semantic-ui-react';

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
    console.log('reload this: ', this);
    this.init();
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

  render = () => {

    // const panes = [
    //   { menuItem: 'Home', render: () => <Tab.Pane as={ Link } to="/" ><Route exact path="/" render={() => <Home/>} /></Tab.Pane> },
    //   { menuItem: 'Step 2 A', render: () => <Tab.Pane  as={ Link } to="/step2a" ><Route path="/step2a" render={() =>
    //     <Step2A
    //       renderResults={this.renderResults}
    //       submitHandler={this.submitHandler}
    //       handleChange={this.handleChange}
    //       actionButtons={this.actionButtons}
    //       reload={this.reload}
    //       />}/></Tab.Pane> },
    //   { menuItem: 'Step 2 B', render: () => <Tab.Pane as={ Link } to="/step2b" ><Route path="/step2b" render={() =>
    //     <Step2B
    //       renderResults={this.renderResults}
    //       submitHandler={this.submitHandler}
    //       handleChange={this.handleChange}
    //       />}/></Tab.Pane> },
    // ];

    return (
      <div>
        {/* <div>
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
        </div> */}

        {/* <Tab menu={{ secondary: true, pointing: true }} panes={panes} /> */}

        {/* <Route exact path="/" render={() => <Home/>} />
        <Route path="/step2a" render={() =>
          <Step2A
            renderResults={this.renderResults}
            submitHandler={this.submitHandler}
            handleChange={this.handleChange}
            actionButtons={this.actionButtons}
            reload={this.reload}
            />}/>
        <Route path="/step2b" render={() =>
          <Step2B
            renderResults={this.renderResults}
            submitHandler={this.submitHandler}
            handleChange={this.handleChange}
            />}/>
        <Route path="/settings" component={BFSetttings} /> */}


        <Menu pointing>
          <Menu.Item name='home' as={Link} to="/" />
          <Menu.Item name='step2a' as={Link} to="/step2a" />
          <Menu.Item name='step2a' as={Link} to="/step2b" />
          <Menu.Menu position='right'>
            <Menu.Item name='settings' as={Link} to="/settings" />
          </Menu.Menu>
        </Menu>

        <Segment>
          <Route exact path="/" render={() => <Home/>} />
          <Route path="/step2a" render={() =>
            <Step2A
              renderResults={this.renderResults}
              submitHandler={this.submitHandler}
              handleChange={this.handleChange}
              actionButtons={this.actionButtons}
              reload={this.reload}
              />}/>
          <Route path="/step2b" render={() =>
            <Step2B
              renderResults={this.renderResults}
              submitHandler={this.submitHandler}
              handleChange={this.handleChange}
              />}/>
          <Route path="/settings" component={BFSetttings} />
        </Segment>

      </div>
    );

  }
}
