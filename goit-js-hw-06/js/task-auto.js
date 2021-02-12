// function filterArray(numbers, value) {
//     const filteredNumbers = [];
    // Пиши код ниже этой строки
  
  
  //    for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] > value) {
  //       filteredNumbers.push(numbers[i]);
  //     }
  // }
//   numbers.forEach(function filterArray(number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   })
   
//     // Пиши код выше этой строки
//     return filteredNumbers;
//    };
// console.log(filterArray([1, 2, 3, 4, 5], 3));//возвращает [4, 5].
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //возвращает [5].
// console.log(filterArray([1, 2, 3, 4, 5], 5));//возвращает [].
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //возвращает [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20));//возвращает [24, 41, 76].

///////Задача 9......

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const result = [];
  numbers.forEach(function changeEven(number) { 

    if (number % 2 === 0) {
        number += value;
    }
     return result.push(number);
  })
    return result;
    
}

console.log(changeEven([1, 2, 3, 4, 5], 10)) //возвращает новый массив [1, 12, 3, 14, 5].
console.log(changeEven([17, 24, 68, 31, 42], 100)) //возвращает новый массив [17, 124, 168, 31, 142].
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)) //возвращает новый массив [144, 13, 81, 192, 136, 154].
//////////задча 21
//  const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]

// const getFriends = (users) => {
//  const onlyFriend = users.flatMap(user=>user.friends);
//   return onlyFriend.filter((user,index, users)=>users.indexOf(user)===index);
// };

// console.log(getFriends(users)) //['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman'].
//   /


  /////////////////////////////задача 32
//  const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

 ////1 вариант 
// const calculateTotalBalance = users.reduce((balance, user) => {
//   return balance + user.balance
// }, 0);
////2 вариант
// const calculateTotalBalance = (users) => {
//    return users.reduce((balance, user) => {
//     return balance + user.balance;
//   }, 0);
// };
// console.log(calculateTotalBalance(users))

/////////задача 33 (вернуть количество всех друзей, число 14)
// const getTotalFriendCount = users => {
//   //  return users.reduce((friends, user) => [...friends,
//   //    ...user.friends], []);// вернет массив и всех друзей
  
//   return users.reduce((friends, user) => {
//     return friends+user.friends.length;
//   }, 0);
  
// };
// console.log(getTotalFriendCount(users))


//////////////////задача 37
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort(
//   (first, second) => first.author.localeCompare(second.author)
// );

// const sortedByReversedAuthorName = [...books].sort(
//   (first, second) => second.author.localeCompare(first.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (first, second) => first.rating-second.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (first, second) => second.rating-first.rating
// );
  
// console.log(sortedByAuthorName)
// console.log(sortedByReversedAuthorName)
// console.log(sortedByAscendingRating)
// console.log(sortedByDescentingRating)


//////////////////////////задача 42
 const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((first, second) => first.friends.length - second.friends.length)
// .map((user)=> user.name)
// //.sort((first, second) =>first.localeCompare(second));
// };

// console.log(getNamesSortedByFriendCount(users))

/////////задача 43
// const getSortedFriends = users => {
//  return users.flatMap(user=>user.friends)
//   .filter((user,index, users)=>users.indexOf(user)===index)
//  .sort((first, second) => first.localeCompare(second))
// };
// console.log(getSortedFriends(users))

/////////задача 44////Дополни функцию getTotalBalanceByGender(users, gender) так,
//чтобы она возвращала общий баланс пользователей(свойство balance),
  //пол которых(свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter((user) => user.gender === gender)
//     .reduce((total, user) => total+user.balance,0)
// };
// console.table(getTotalBalanceByGender(users, 'male'))
