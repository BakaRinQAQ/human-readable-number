module.exports = function toReadable (number) {
  let singleNumber = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let lessTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let lessHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   if (number === 0) return 'zero';
  function words(number) {
   let word = "";
   if (number < 10) {
    word = singleNumber[number] + ' '
   } else if (number < 20) {
    word = lessTwenty[number - 10] + ' '
   } else if (number < 100) {
    x = words(number % 10)
    word = lessHundred[(number - number % 10) / 10 - 2] + ' ' + x
   } else if (number < 1000) {
    word = singleNumber[Math.trunc(number / 100)] + ' hundred ' + words(number % 100) 
   }
    return word.trim();
  }

  result = words(number);
  return result
}
