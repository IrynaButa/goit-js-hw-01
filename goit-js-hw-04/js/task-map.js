// пример из видео 25.01.2020 функции обратного вызова

// const users = [
//     { name: "Tanker", age: 20, isAdult: false },
//     { name: "Shrek", age: 15, isAdult: false },
//     { name: "Arnold", age: 20, isAdult: false },

// ];
// const mapArray = (arr, callbackFn) => {
//     let resultArr = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (callbackFn) {
//             callbackFn(arr[i], i);
//         }
//         resultArr.push(arr[i]);
//     }
//     return resultArr;
// };
// const logItem = (item, index) => { 
// console.log(item, `add index ${index+1}`);

// }
// mapArray(users, logItem);

// пример из видео 27.01.2020  метод map как работает
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];
const mapArray = (arr, callbackFn) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        
          const item =  callbackFn(arr[i], i);
        
        result.push(item);
    }
    return result;
};

const addToOrder = ((order, index) => {
    return {
        ...order,
        id: index+1, // будет нумерация с 1-го
    };
})
const getEmailList = (order) => order.email;
const emailList = mapArray(orders, getEmailList);
console.log(emailList); // ["solomon@topmail.ua", "artemis@coldmail.net", "jacob@mail.com"]

const newResult = orders.map(getEmailList);
console.log(newResult); // ["solomon@topmail.ua", "artemis@coldmail.net", "jacob@mail.com"]

const ordersWithId = mapArray(orders, addToOrder);
console.log(ordersWithId); //  [{…}, {…}, {…}] ===>>>> 0: {email: "solomon@topmail.ua", dish: "Burger", id: 1}
// 1: {email: "artemis@coldmail.net", dish: "Pizza", id: 2}
// 2: {email: "jacob@mail.com", dish: "Taco", id: 3}
