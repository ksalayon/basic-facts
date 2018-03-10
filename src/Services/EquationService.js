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

    switch (operator) {
      case '+':
          return add(firstOp, secondOp);
        break;

      case '-':
          return subtract(firstOp, secondOp);
        break;

      case 'x':
          return multiply(firstOp, secondOp);
        break;

      case '/':
          return divide(firstOp, secondOp);
        break;

      default:
        return null;
    }
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
