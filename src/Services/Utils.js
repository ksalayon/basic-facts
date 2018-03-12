var Utils = (function() {

  var shuffleArray = arr => {
    return arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  var arrayRanPick = (arr) => {
    var ran = Math.floor(Math.random() * ((arr.length) - 0));
    if(typeof arr[ran] === 'object') {
      return Object.assign({}, arr[ran]);
    }

    return arr[ran];
  }

  return {
    shuffleArray: shuffleArray,
    arrayRanPick: arrayRanPick
  }

})();

export default Utils;
