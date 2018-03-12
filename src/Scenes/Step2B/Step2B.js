import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import { MulDivByThree } from './MulDivByThree';
import { MulDivByFour } from './MulDivByFour';
import { MulDivBySix } from './MulDivBySix';
import { MulDivBySeven } from './MulDivBySeven';
import { MulDivByEight } from './MulDivByEight';

class Step2B extends Component {

  handleClick = (e) => {
    var menu = document.getElementById('Step2BList');
    const lis = menu.querySelectorAll("ul li");
    [...lis].forEach(function(el){
      el.classList.remove('selected');
    });

    e.target.parentNode.classList.add('selected');
  }

  render() {
    return (
      <div className="step-menu" id="Step2BList">
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

        <Route path="/step2b/muldivbythree" render={() =>
          <MulDivByThree
            id="MulDivByThree"
            title="Multiplication/Division facts for 3's"
            reload={this.props.reload}
            renderResults={this.props.renderResults}
            submitHandler={this.props.submitHandler}
            handleChange={this.props.handleChange}
            actionButtons={this.props.actionButtons}
            />}/>
        <Route path="/step2b/muldivbyfour" render={() =>
          <MulDivByFour
            id="MulDivByFour"
            title="Multiplication/Division facts for 4's"
            reload={this.props.reload}
            renderResults={this.props.renderResults}
            submitHandler={this.props.submitHandler}
            handleChange={this.props.handleChange}
            actionButtons={this.props.actionButtons}
            />}/>
        <Route path="/step2b/muldivbysix" render={() =>
          <MulDivBySix
            id="MulDivBySix"
            title="Multiplication/Division facts for 6's"
            reload={this.props.reload}
            renderResults={this.props.renderResults}
            submitHandler={this.props.submitHandler}
            handleChange={this.props.handleChange}
            actionButtons={this.props.actionButtons}
            />}/>
        <Route path="/step2b/muldivbyseven" render={() =>
          <MulDivBySeven
            id="MulDivBySeven"
            title="Multiplication/Division facts for 7's"
            reload={this.props.reload}
            renderResults={this.props.renderResults}
            submitHandler={this.props.submitHandler}
            handleChange={this.props.handleChange}
            actionButtons={this.props.actionButtons}
            />}/>
        <Route path="/step2b/muldivbyeight" render={() =>
          <MulDivByEight
            id="MulDivByEight"
            title="Multiplication/Division facts for 8's"
            reload={this.props.reload}
            renderResults={this.props.renderResults}
            submitHandler={this.props.submitHandler}
            handleChange={this.props.handleChange}
            actionButtons={this.props.actionButtons}
            />}/>
      </div>
    );
  }
}

export { Step2B };
