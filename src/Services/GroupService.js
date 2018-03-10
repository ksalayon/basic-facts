var GroupService = (function(){

  var items = [];

  function operands(divisor, limit) {

    var operands = [];
    for(let i = 0; i <= limit; i++) {
      var res = i * divisor;
      if(res <= limit) {
        operands.push({firstOperand: res, secondOperand: (limit - res)});
      }
    }
    return operands;
  }

  function checkPair(tmpItems, pair) {
    var exists = false;
    tmpItems.forEach((item, index) => {
      if(item.firstOperand === pair.firstOperand && item.secondOperand === pair.secondOperand) {
        exists = true;
      }
    });

    return exists;
  }



  function randomPairs(operands, min, max, numberOfItems) {
    min = Math.ceil(min);
    var maxPlus = (Math.floor(max) + 1);


    for(let i = 0; i <= numberOfItems; i++) {
      var tmpItems = [...items];
      if(tmpItems.length >= numberOfItems){
        break;
      }

      var randomRes = Math.floor(Math.random() * (maxPlus - min)); //The maximum is exclusive and the minimum is inclusive
      let pair = Object.assign({}, operands[randomRes]);

      if(tmpItems.length > 0) {
        var exists = false;

        exists = checkPair(tmpItems, pair);

        if(!exists) {
          items.push(pair);
        } else {
          randomPairs(operands, min, max, numberOfItems);
        }

      } else {
        items.push(pair);
        tmpItems = [...items];
      }
    }

    return items;
  }

  function checkForDuplicates(pairs) {
    var dups = [];
    pairs.forEach((pair, index) => {
      pairs.forEach((obj, idx) => {
        if(obj.firstOperand === pair.firstOperand && obj.secondOperand === pair.secondOperand && idx !== index) {
          dups.push(pair);
        }
      });
    });

    return dups;
  }

  return {
    items: (divisor, limit, numberOfItems) => {
      const ops = operands(divisor, limit);
      var pairs = randomPairs(ops, 0, ops.length - 1, numberOfItems);

      return pairs;
    },
    hasDups: (pairs) => {
      return (checkForDuplicates(pairs).length > 0) ? true : false;
    }
  }

})();

export { GroupService };
