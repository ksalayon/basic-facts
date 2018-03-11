import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Step2A extends Component {

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
          <li>
            <p>Multiplication/Division facts for 2's</p>
            <p>e.g 3 x 2 = __</p>
            <p>e.g 18 / 2 = __</p>
            <Link to="/step2a/muldivbytwo">Go</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export { Step2A };
