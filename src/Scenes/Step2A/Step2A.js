import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Step2AGroups } from './Step2AGroups';

class Step2A extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>This is the Step 2A Stage - Good Luck!</h3>
        <ul>
          <li>
            <p>Groups within 100 using 5's</p>
            <p>e.g 35 + __ = 100</p>
            <Link to="/step2a/groups">Go</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export { Step2A };
