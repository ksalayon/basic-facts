import React, {Component} from 'react';
import { GroupService } from '../../Services/GroupService';
import { Equation } from '../../Components/Equation/Equation';

class Step2AGroups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      divisor: 5,
      limit: 100,
      numberOfItems: 10,
      operator: '+'
    };
  }

  renderEquations(){
    const items = GroupService.items(this.state.divisor, this.state.limit, this.state.numberOfItems);
    return items.map((item, idx) => {
      return <Equation
        key={item.o1 + this.state.operator + item.o2}
        firstOperand={item.o1}
        secondOperand={item.o2}
        operator={this.state.operator}
        showAnswer={true} />
    });
  }

  render() {


    return (
      this.renderEquations()
    );
  }
}

export { Step2AGroups };
