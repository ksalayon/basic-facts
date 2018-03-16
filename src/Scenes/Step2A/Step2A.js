import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import { Equation } from '../../Components/Equation/Equation';

import BFSource from '../../Services/Datasource/BFSource';
import {
  Card, Header, Segment, Grid
} from 'semantic-ui-react';

class Step2A extends Component {

  constructor(props) {
    super(props);
    this.stepList = BFSource.step2aItems;
  }

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
                {
                  this.stepList.map((step, idx) => {
                    return <Grid.Column key={step.id}>
                      <Card>
                        <Card.Content header={step.header} />
                        <Card.Content>
                          {step.content}
                        </Card.Content>
                        <Card.Content extra>
                          <Link to={step.link} onClick={this.handleClick}>Go</Link>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  })
                }
              </Grid>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Segment className="steps">
              {
                this.stepList.map((step, idx) => {
                  return <Route path={step.link} key={step.id} render={() =>
                    <Segment as={step.comp}
                      id={step.id}
                      title={step.header}
                      reload={this.props.reload}
                      renderResults={this.props.renderResults}
                      submitHandler={this.props.submitHandler}
                      handleChange={this.props.handleChange}
                      actionButtons={this.props.actionButtons}
                      renderEquations={this.props.renderEquations}
                      />}/>
                })
              }
            </Segment>
          </Grid.Column>
        </Grid>



      </Segment>
    );
  }
}

export { Step2A };
