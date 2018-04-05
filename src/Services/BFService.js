var BFService = (function(){

  function checkPair(tmpItems, pair) {
    var exists = false;
    tmpItems.forEach((item, index) => {
      if(item.firstOperand === pair.firstOperand && item.secondOperand === pair.secondOperand) {
        exists = true;
      }
    });

    return exists;
  }



  function randomPairs(ops, minimun, maximum, numOfItems) {
    let items = [];

    return (function randomizer(operands, min, max, numberOfItems){
      min = Math.ceil(min);
      let maxPlus = (Math.floor(max) + 1);
      for(let i = 0; i <= numberOfItems; i++) {
        let tmpItems = [...items];
        if(tmpItems.length >= numberOfItems){
          break;
        }

        let randomRes = Math.floor(Math.random() * (maxPlus - min)); //The maximum is exclusive and the minimum is inclusive
        let pair = Object.assign({}, operands[randomRes]);

        if(tmpItems.length > 0) {
          let exists = false;

          exists = checkPair(tmpItems, pair);

          if(!exists) {
            items.push(pair);
          } else {
            console.log('operands, min, max, numberOfItems: ', operands, min, max, numberOfItems);
            randomizer(operands, min, max, numberOfItems);
          }

        } else {
          items.push(pair);
          tmpItems = [...items];
        }
      }
      return items;
    })(ops, minimun, maximum, numOfItems);

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
    randomPairs: randomPairs,
    checkPair: checkPair
  }

})();

export { BFService };
