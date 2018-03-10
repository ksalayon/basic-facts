var EquationService = (function(){

  function add() {
      const args = Array.from(arguments);
      return args.reduce((ac, cv) => (ac + cv));
  }

  function subtract() {
    const args = Array.from(arguments);
    return args.reduce((ac, cv) => (ac - cv));
  }

  function multiply() {
    const args = Array.from(arguments);
    return args.reduce((ac, cv) => (ac * cv));
  }

  function divide() {
    const args = Array.from(arguments);
    return args.reduce((ac, cv) => (ac / cv));
  }

  function execute(firstOp, secondOp, operator) {
    var result = null;
    switch (operator) {
      case '+':
          result = add(firstOp, secondOp);
        break;

      case '-':
          result = subtract(firstOp, secondOp);
        break;

      case 'x':
          result = multiply(firstOp, secondOp);
        break;

      case '/':
          result = divide(firstOp, secondOp);
        break;

      default:
        result = null;
    }
    return result;
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    execute: execute
  };

})();

export {EquationService};
