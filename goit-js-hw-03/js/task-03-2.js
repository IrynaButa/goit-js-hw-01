// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.
// Функция возвращает число - количество свойств.

// const countProps = function(obj) {
//   // твой код
// };

const countProps = function(obj) {
let propCount = 0;

  const keys = Object.keys(obj); // [name,age]
   for(const key of keys){
   propCount += 1;
   } 
  return propCount;
  
 };
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3