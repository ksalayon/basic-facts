import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {
  Menu
} from 'semantic-ui-react';

class MainMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'home'
    }
  }

  handleClick = (e, {name}) => {
    // let event = e;
    // event.persist();
    this.setState({
      active: name
    });



    // setTimeout(function() {
    //   const backgroundStyle = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
    //   console.log('backgroundStyle: ', backgroundStyle, event.target);
    // }, 0);
  }

  render() {
    return (
      <Menu pointing inverted id="BFMainMenu">
        <Menu.Item name='home' color="blue" as={Link} to="/"
          onClick={this.handleClick} active={this.state.active === 'home'}/>
        <Menu.Item name='step2a' color="orange" as={Link} to="/step2a"
          onClick={this.handleClick} active={this.state.active === 'step2a'}/>
        <Menu.Item name='step2b' color="red" as={Link} to="/step2b"
          onClick={this.handleClick}  active={this.state.active === 'step2b'}/>
        <Menu.Menu position='right'>
          <Menu.Item name='settings' color="violet" as={Link} to="/settings"
            onClick={this.handleClick} active={this.state.active === 'settings'}/>
        </Menu.Menu>
      </Menu>
    );
  }

}

export { MainMenu }
