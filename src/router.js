import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './Scenes/Home/Home';
import { Step2A } from './Scenes/Step2A/Step2A';
import { Step2AGroups } from './Scenes/Step2A/Step2AGroups';
import { Step2AMulDivByTwo } from './Scenes/Step2A/Step2AMulDivByTwo';
import { Step2B } from './Scenes/Step2B/Step2B';
import { BFSetttings } from './Scenes/Settings/BFSettings';

const BFRouter = () => (
  <Router>
    <div>
      <ul>
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
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/step2a" component={Step2A} />
      <Route path="/step2a/groups" component={Step2AGroups} />
      <Route path="/step2a/muldivbytwo" component={Step2AMulDivByTwo} />
      <Route path="/step2b" component={Step2B} />
      <Route path="/settings" component={BFSetttings} />
    </div>
  </Router>
);
export { BFRouter }
