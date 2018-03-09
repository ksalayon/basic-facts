import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GroupService } from '../../Services/GroupService';

class Step2AGroups extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const groups = GroupService.generate();
    console.log('groups: ', groups);

    return (
      <p>e.g 35 + __ = 100</p>
    );
  }
}

export { Step2AGroups };
