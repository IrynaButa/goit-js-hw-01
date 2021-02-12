// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//          if(this.pizzas.includes(pizzaName)){
    
//   return onSuccess(pizzaName);
//   }
    
//   return  onError(`Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`);
     
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);



// задача 7. модуль 4

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
  
//  function composeMessage(position) {
//    //console.log( `Готовим ${this.dish} для ${this.email} Ваш заказ ${this.position} в очереди.`);
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position} -й в очереди.`
// }
// const messages = orders.map((order,position) =>  composeMessage.call(order, position+1)  
// );
// console.log(messages); 

// Дополни код так, чтобы в переменной messages, с помощью метода
//map, получился массив сообщений 
//о статусе заказов из массива orders.Переменной`messages`
//с помощью метода`map` присваивают 
//значение - массив,
//     создаваемый вызовом функции`composeMessage`.
//Значение`this` при вызове функции
// переопределяется с помощью метода`call`
// Значение переменной`messages` это массив`['Готовим Burger для solomon@topmail.ua.
//  Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.',
//   'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.']`//

//&*&*&*&***&*&**&*&*&*&*&*&& задача на собесе
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('give this', this); //give this {color: "teal", changeColor: ƒ}
//     //this.color = color;
//   };
//   const sweater = {
//     color: 'teal',
//   };
//   sweater.changeColor = changeColor;
//   sweater.changeColor();
//   return sweater.changeColor;
// };
// const changeColor = makeChangeColor();
// changeColor('blue');

//&*&*&*&*&*&*&*&*&*&*&**&*&*&*&*&*&*&*&*& задача на собесе
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('give this', this); //give this {color: "blue", changeColor: ƒ}
//     this.color = color;
//   };
//     return changeColor;
//   };
//   const hat = {
//     color: 'blue',
//     changeColor: makeChangeColor(),
//   };
  
//   hat.changeColor('orange'); // {color: "orange", changeColor: ƒ}
//   console.log(hat);

