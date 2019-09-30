module.exports = function check(str, bracketsConfig) {
  let expr = [];

  for (let i = 0; i < str.length; i++) {
    expr.push(str[i]);    
  }

  function algorithm(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        let pair = bracketsConfig[j][0] + bracketsConfig[j][1];
        let myPair = arr[i] + arr[i+1];

        if (pair === myPair) {
          arr.splice(i, 2);
          i = -1;
        }
      }

      if (arr.length === 0) {
        break;
      }
    }

    if (arr.length === 0) {
      return true;
    }
    else { 
      return false;
    }
  }

  return algorithm(expr);
}
