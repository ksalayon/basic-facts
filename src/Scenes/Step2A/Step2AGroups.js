import React, {Component} from 'react';
import { GroupService } from '../../Services/GroupService';

class Step2AGroups extends Component {

  constructor(props) {
    super(props);
    this.divisor = 5;
    this.limit = 100;
    this.numberOfItems = 10;
  }

  renderEquations(){
    const items = GroupService.items(this.divisor, this.limit, this.numberOfItems);
    return items.map((item, idx) => {
      return <div key={'row' + idx} className="board-row">
        <p>{item.o1} + {item.o2} = { (item.o1 + item.o2) }</p>
      </div> ;

    });
  }

  render() {


    return (
      this.renderEquations()
    );
  }
}

export { Step2AGroups };
