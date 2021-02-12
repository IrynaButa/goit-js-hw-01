/*Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
Функция проверяет ее на содержание слов spam и sale.Если нашли зарещенное слово то
функция возвращает true, если запрещенных слов нет функция возвращает false.
Слова в строке могут быть в произвольном регистре.

const checkForSpam = function(message) {
  // твой код
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true*/

const checkForSpam = function (message) {
   message = message.toLowerCase();
  console.log(message);
 
  let stopMessage = 'spam';
  let stopMessage2 = 'sale';
  
 
  for (let i = 0; i < message.length; i += 1) { 
    if (message.includes(stopMessage) || message.includes(stopMessage2) ) {
       return true;
    }
  } 
  return false;
  
};
 
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
