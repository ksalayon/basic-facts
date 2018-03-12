import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Step2A extends Component {

  handleClick = (e) => {
    var menu = document.getElementById('Step2AList');
    const lis = menu.querySelectorAll("ul li");
    [...lis].forEach(function(el){
      el.classList.remove('selected');
    });

    e.target.parentNode.classList.add('selected');
  }

  render() {
    return (
      <div className="step-menu" id="Step2AList">
        <h3>This is the Step 2A Stage - Good Luck!</h3>
        <ul>
          <li>
            <p>Groups within 100 using 5's</p>
            <p>e.g 35 + __ = 100</p>
            <Link to="/step2a/groups" onClick={this.handleClick}>Go</Link>
          </li>
          <li>
            <p>Multiplication/Division facts for 2's</p>
            <p>e.g 3 x 2 = __</p>
            <p>e.g 18 / 2 = __</p>
            <Link to="/step2a/muldivbytwo" onClick={this.handleClick}>Go</Link>
          </li>
          <li>
            <p>Multiplication/Division facts for 5's</p>
            <p>e.g 5 x 3 = __</p>
            <p>e.g 40 / 5 = __</p>
            <Link to="/step2a/muldivbyfive" onClick={this.handleClick}>Go</Link>

          </li>
          <li>
            <p>Multiplication/Division facts for 10's</p>
            <p>e.g 5 x 10 = __</p>
            <p>e.g 50 / 10 = __</p>
            <Link to="/step2a/muldivbyten" onClick={this.handleClick}>Go</Link>

          </li>
          <li>
            <p>Addition Groups within 1000</p>
            <p>e.g 320 + __ = 1000</p>
            <p>e.g 805 + __ = 1000</p>
            <Link to="/step2a/groups-hundreds" onClick={this.handleClick}>Go</Link>

          </li>
        </ul>
      </div>
    );
  }
}

export { Step2A };
