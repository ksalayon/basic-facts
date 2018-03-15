import React from 'react';
import { MulDivByThree } from '../../Scenes/Step2B/MulDivByThree';
import { MulDivByFour } from '../../Scenes/Step2B/MulDivByFour';
import { MulDivBySix } from '../../Scenes/Step2B/MulDivBySix';
import { MulDivBySeven } from '../../Scenes/Step2B/MulDivBySeven';
import { MulDivByEight } from '../../Scenes/Step2B/MulDivByEight';

const Step2BDataSource = (function(){

  var steps = {
      linkHandler: this.handleClick,
      renderResults: this.props.renderResults,
      submitHandler: this.props.submitHandler,
      handleChange: this.props.handleChange,
      actionButtons: this.actionButtons,
      init: this.init,
      renderEquations: this.renderEquations,
      steps:[
        {
          id: 'MulDivByThree',
          comp: MulDivByThree,
          div: 3,
          limit: (3 * 12),
          numberOfItems: 12,
          header: 'Multiplication/Division facts for 3\'s',
          content: (
              <div>
                <p>e.g.</p>
                <p>3 x 2 = __</p>
                <p>21 / 3 = __</p>
              </div>
            ),
          link:'/step2b/muldivbythree'
        },
        {
          id: 'MulDivByFour',
          comp: MulDivByFour,
          div: 4,
          limit: (4 * 12),
          numberOfItems: 12,
          header: 'Multiplication/Division facts for 4\'s',
          content: (
              <div>
                <p>e.g.</p>
                <p>3 x 4 = __</p>
                <p>16 / 4 = __</p>
              </div>
            ),
          link:'/step2b/muldivbyfour'
        },
        {
          id: 'MulDivBySix',
          comp: MulDivBySix,
          div: 6,
          limit: (6 * 12),
          numberOfItems: 12,
          header: 'Multiplication/Division facts for 6\'s',
          content: (
              <div>
                <p>e.g.</p>
                <p>6 x 2 = __</p>
                <p>42 / 6 = __</p>
              </div>
            ),
          link:'/step2b/muldivbysix'
        },
        {
          id: 'MulDivBySeven',
          comp: MulDivBySeven,
          div: 7,
          limit: (7 * 12),
          numberOfItems: 12,
          header: 'Multiplication/Division facts for 7\'s',
          content: (
              <div>
                <p>e.g.</p>
                <p>7 x 4 = __</p>
                <p>28 / 7 = __</p>
              </div>
            ),
          link:'/step2b/muldivbyseven'
        },
        {
          id: 'MulDivByEight',
          comp: MulDivByEight,
          div: 8,
          limit: (8 * 12),
          numberOfItems: 12,
          header: 'Multiplication/Division facts for 8\'s',
          content: (
            <div>
              <p>e.g.</p>
              <p>8 x 4 = __</p>
              <p>40 / 8 = __</p>
            </div>
            ),
          link:'/step2b/muldivbyeight'
        }
      ]

    };

  return {
    steps: steps,
    getSteps: function() {
      return this.steps;
    }
  };

})();

export default Step2BDataSource;
