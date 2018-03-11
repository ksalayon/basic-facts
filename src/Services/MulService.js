import {BFService} from './BFService';

var MulService = (function(BFService){

  var items = [];

  function operands(divisor, limit) {

    var operands = [];
    for(let i = 0; i <= limit; i++) {
      var res = i * divisor;
      if(res <= limit) {
        operands.push({firstOperand: i, secondOperand: divisor});
      }
    }
    return operands;
  }

  return {
    items: (divisor, limit, numberOfItems) => {
      items = [];
      const ops = operands(divisor, limit);
      var pairs = BFService.randomPairs(ops, 0, ops.length - 1, numberOfItems);

      return pairs;
    },
    hasDups: BFService.hasDups
  }

})(BFService);

export {MulService};
