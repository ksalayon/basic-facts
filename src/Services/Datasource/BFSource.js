import React from 'react';

import { Step2AGroups } from '../../Scenes/Step2A/Step2AGroups';
import { Step2AMulDivByTwo } from '../../Scenes/Step2A/Step2AMulDivByTwo';
import { Step2AMulDivByFive } from '../../Scenes/Step2A/Step2AMulDivByFive';
import { Step2AMulDivByTen } from '../../Scenes/Step2A/Step2AMulDivByTen';
import { Step2AGroupsHundreds } from '../../Scenes/Step2A/Step2AGroupsHundreds';

import { MulDivByThree } from '../../Scenes/Step2B/MulDivByThree';
import { MulDivByFour } from '../../Scenes/Step2B/MulDivByFour';
import { MulDivBySix } from '../../Scenes/Step2B/MulDivBySix';
import { MulDivBySeven } from '../../Scenes/Step2B/MulDivBySeven';
import { MulDivByEight } from '../../Scenes/Step2B/MulDivByEight';

const BFSource = (function(){

  var step2aItems = [
        {
          id: 'Step2AGroups',
          comp: Step2AGroups,
          div: 3,
          limit: (3 * 12),
          numberOfItems: 12,
          header: 'Groups within 100 using 5\'s',
          content: (
              <div>
                <p>Groups within 100 using 5's</p>
                <p>e.g 35 + __ = 100</p>
              </div>
            ),
          link:'/step2a/groups'
        },
        {
          id: 'Step2AMulDivByTwo',
          comp: Step2AMulDivByTwo,
          div: 4,
          limit: (4 * 12),
          numberOfItems: 12,
          header: 'Multiplication/Division facts for 2\'s',
          content: (
              <div>
                <p>e.g 3 x 2 = __</p>
                <p>e.g 18 / 2 = __</p>
              </div>
            ),
          link:'/step2a/muldivbytwo'
        },
        {
          id: 'Step2AMulDivByFive',
          comp: Step2AMulDivByFive,
          div: 6,
          limit: (6 * 12),
          numberOfItems: 12,
          header: 'Multiplication/Division facts for 5\'s',
          content: (
              <div>
                <p>e.g 5 x 3 = __</p>
                <p>e.g 40 / 5 = __</p>
              </div>
            ),
          link:'/step2a/muldivbyfive'
        },
        {
          id: 'Step2AMulDivByTen',
          comp: Step2AMulDivByTen,
          div: 7,
          limit: (7 * 12),
          numberOfItems: 12,
          header: 'Multiplication/Division facts for 10\'s',
          content: (
              <div>
                <p>e.g 5 x 10 = __</p>
                <p>e.g 50 / 10 = __</p>
              </div>
            ),
          link:'/step2a/muldivbyten'
        },
        {
          id: 'Step2AGroupsHundreds',
          comp: Step2AGroupsHundreds,
          div: 8,
          limit: (8 * 12),
          numberOfItems: 12,
          header: 'Addition Groups within 1000',
          content: (
            <div>
              <p>e.g 320 + __ = 1000</p>
              <p>e.g 805 + __ = 1000</p>
            </div>
            ),
          link:'/step2a/groups-hundreds'
        }
      ];

      var step2bItems = [
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
      ];

  return {
    step2aItems: step2aItems,
    step2bItems: step2bItems
  };

})();

export default BFSource;
