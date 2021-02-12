/*Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную
строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  // твой код
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force' */

const findLongestWord = function(string) {
  let wordSpace = string.split (' ');
  let bigWord = wordSpace[0];
  for (const word of wordSpace) {
  if(bigWord.length < word.length){
   bigWord = word;
  }
  }
  
return bigWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force' */