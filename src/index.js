module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  const result= [];
  const arr = str.split('');

  bracketsConfig.map((item) => {
    openBrackets.push(item[0]);
    closeBrackets.push(item[1]);
  });  

  for (let i = 0; i < arr.length; i++) {
    const openBraket = openBrackets[openBrackets.indexOf(arr[i])];
    const closeBraket = closeBrackets[closeBrackets.indexOf(arr[i])];
    const pairBraket = openBrackets[closeBrackets.indexOf(arr[i])];

    if ((openBraket === closeBraket && result[result.length-1] === openBraket) 
    || closeBraket && result[result.length-1] === pairBraket) {
      result.pop();
      continue;
    }

    result.push(arr[i]);
  }

  return result.length !== 0 ? false : true;
}
