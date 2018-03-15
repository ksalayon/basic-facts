import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import { Step2AGroups } from './Step2AGroups';
import { Step2AMulDivByTwo } from './Step2AMulDivByTwo';
import { Step2AMulDivByFive } from './Step2AMulDivByFive';
import { Step2AMulDivByTen } from './Step2AMulDivByTen';
import { Step2AGroupsHundreds } from './Step2AGroupsHundreds';
import {
  Card, Header, Segment, Grid
} from 'semantic-ui-react';

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
      <Segment className="step-menu" id="Step2AList">
        <Header>This is the Step 2A Stage - Good Luck!</Header>
        <Grid columns={2}>
          <Grid.Column>

            <Grid.Row stretched>
              <Grid columns={3}>
                <Grid.Column>
                  <Card>
                    <Card.Content header={'Groups within 100 using 5\'s'} />
                    <Card.Content>
                      <p>Groups within 100 using 5's</p>
                      <p>e.g 35 + __ = 100</p>
                    </Card.Content>
                    <Card.Content extra>
                      <Link to="/step2a/groups" onClick={this.handleClick}>Go</Link>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content header={'Multiplication/Division facts for 2\'s'} />
                    <Card.Content>
                      <p>e.g 3 x 2 = __</p>
                      <p>e.g 18 / 2 = __</p>
                    </Card.Content>
                    <Card.Content extra>
                      <Link to="/step2a/muldivbytwo" onClick={this.handleClick}>Go</Link>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content header={'Multiplication/Division facts for 5\'s'} />
                    <Card.Content>
                      <p>e.g 5 x 3 = __</p>
                      <p>e.g 40 / 5 = __</p>
                    </Card.Content>
                    <Card.Content extra>
                      <Link to="/step2a/muldivbyfive" onClick={this.handleClick}>Go</Link>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid>
            </Grid.Row>

            <Grid.Row stretched>
              <Grid columns={3}>
                <Grid.Column>
                  <Card>
                    <Card.Content header={'Multiplication/Division facts for 10\'s'} />
                    <Card.Content>
                      <p>e.g 5 x 10 = __</p>
                      <p>e.g 50 / 10 = __</p>
                    </Card.Content>
                    <Card.Content extra>
                      <Link to="/step2a/muldivbyten" onClick={this.handleClick}>Go</Link>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content header={'Addition Groups within 1000'} />
                    <Card.Content>
                      <p>e.g 320 + __ = 1000</p>
                      <p>e.g 805 + __ = 1000</p>
                    </Card.Content>
                    <Card.Content extra>
                      <Link to="/step2a/groups-hundreds" onClick={this.handleClick}>Go</Link>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Segment className="steps">
              <Route path="/step2a/groups" render={() =>
                <Segment as={Step2AGroups}
                  title="Groups within 100 using 5's"
                  reload={this.props.reload}
                  renderResults={this.props.renderResults}
                  submitHandler={this.props.submitHandler}
                  handleChange={this.props.handleChange}
                  actionButtons={this.props.actionButtons}
                  />}/>
              <Route path="/step2a/muldivbytwo" render={() =>
                <Segment as={Step2AMulDivByTwo}
                  title="Multiplication/Division facts for 2's"
                  reload={this.props.reload}
                  renderResults={this.props.renderResults}
                  submitHandler={this.props.submitHandler}
                  handleChange={this.props.handleChange}
                  actionButtons={this.props.actionButtons}
                  />}/>
              <Route path="/step2a/muldivbyfive" render={() =>
                <Segment as={Step2AMulDivByFive}
                  title="Multiplication/Division facts for 5's"
                  reload={this.props.reload}
                  renderResults={this.props.renderResults}
                  submitHandler={this.props.submitHandler}
                  handleChange={this.props.handleChange}
                  actionButtons={this.props.actionButtons}
                  />}/>
              <Route path="/step2a/muldivbyten" render={() =>
                <Segment as={Step2AMulDivByTen}
                  title="Multiplication/Division facts for 10's"
                  reload={this.props.reload}
                  renderResults={this.props.renderResults}
                  submitHandler={this.props.submitHandler}
                  handleChange={this.props.handleChange}
                  actionButtons={this.props.actionButtons}
                  />}/>
              <Route path="/step2a/groups-hundreds" render={() =>
                <Segment as={Step2AGroupsHundreds}
                  title="Addition Groups within 1000"
                  reload={this.props.reload}
                  renderResults={this.props.renderResults}
                  submitHandler={this.props.submitHandler}
                  handleChange={this.props.handleChange}
                  actionButtons={this.props.actionButtons}
                  />}/>
            </Segment>
          </Grid.Column>
        </Grid>



      </Segment>
    );
  }
}

export { Step2A };
