// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы 
//в prompt.Учти, пользователь может ввести имя страны не только буквами нижнего регистра,
//а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
//Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
//'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов


let сountry = prompt('Укажите вашу страну').toLowerCase();
let message;

switch (сountry) { 
case 'китай':
  message = 'Стоимость доставки  в Китай 100 кредитов';
        break;
    case 'чили':
 message = 'Стоимость доставки в Чили 250 кредитов';
        break;
    case 'австралия':
 message = 'Стоимость доставки в Австралия 170 кредитов';
        break;
    case 'индия':
 message = 'Стоимость доставки в Индия 80 кредитов';
        break;
    case 'ямайка':
 message = 'Стоимость доставки в Ямайка 120 кредитов';
        break;
    
    default:
    console.log('В вашей стране доставка не доступна');
}
console.log(message);


// let cost;
// const subscription = 'pro';


// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500

