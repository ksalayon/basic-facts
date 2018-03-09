var GroupService = (function(){

  function generate(divisor, limit) {

    var operands = [];

    for(let i = 0; i <= limit; i++) {
      var res = i * divisor;
      if(res <= limit) {
        operands.push({o1: res, o2: (limit - res)});
      }
    }

    return operands;
  }

  function getRandomPairs(operands, min, max) {
    min = Math.ceil(min);
    max = (Math.floor(max) + 1);
    const randomRes = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    return operands[randomRes];
  }

  return {
    generate: (divisor, limit) => {
      var operands = generate(divisor, limit);
      return getRandomPairs(operands, 0, operands.length + 1);
    }
  }

})();

export { GroupService };
