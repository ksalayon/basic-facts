var BFService = (function(){

  var items = [];

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
    hasDups: (pairs) => {
      return (checkForDuplicates(pairs).length > 0) ? true : false;
    },
    randomPairs: function(operands, min, max, numberOfItems) {
      items = [];
      return randomPairs(operands, min, max, numberOfItems);
    },
    checkPair: checkPair
  }

})();

export { BFService };
