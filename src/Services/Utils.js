var Utils = (function() {

  var shuffleArray = arr => {
    return arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  return {
    shuffleArray: shuffleArray
  }

})();

export default Utils;
