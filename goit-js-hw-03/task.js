
/* 18 задание
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  for(const product of products){
    if (productName === product.name){
     return product.price;
  }
  }
  return null;
  // Пиши код выше этой строки
}
console.log(getProductPrice('Радар')); // 5200

console.log(getProductPrice('Дроид')); // 2800 */





/*19 задание

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const props =[];
  for (const product of products) {
      
      const keys = Object.keys(product);
     
    for (const key of keys) {
      if (propName === key) {
        props.push(product[propName]);
     }
    }
  }
  return props;
 }          
console.log(getAllPropValues('name')) // возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
console.log(getAllPropValues('quantity')) // возвращает [4, 3, 7, 9].
console.log(getAllPropValues('price')) //возвращает [1300, 2700, 400, 1200].
console.log(getAllPropValues('category')) //возвращает []. */

/*20 задание

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
   
  for (const product of products){
      if (Object.values(product).includes(productName)) {     // if (product.name === productName)
          return product.price * product.quantity;
  }
    }
    return 0;
  // Пиши код выше этой строки
}

console.log(calculateTotalPrice('Бластер')) // возвращает 0.
console.log(calculateTotalPrice('Радар'))// возвращает 5200.
console.log(calculateTotalPrice('Дроид') )//возвращает 2800.
console.log(calculateTotalPrice('Захват')) //возвращает 10800.
console.log(calculateTotalPrice('Сканер') )//возвращает 8100. */

/*35 задача

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
                const index = this.books.indexOf(oldName);
              this.books.splice(index, 1, newName)
  },
};

console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'))
// значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'))
//значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов']. */


//41 задача
const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        for (const item of this.potions) {
            if (item.name === newPotion.name)
                 return `Зелье ${newPotion} уже есть в инвентаре!`;    
        }
        this.potions.push(newPotion);
    },
    removePotion(potionName) {
            for (let i = 0; i < this.potions.length; i += 1) {
            const item2 = this.potions[i];
            if (potionName === item2.name) {
                this.potions.splice(i, 1)
                }
                if (item2 === -1) {
            return `Зелья ${potionName} нет в инвентаре!`;
        }
        }
    },
    updatePotionName(oldName, newName) {

        for (let i = 0; i < this.potions.length; i += 1) {
            const item3 = this.potions[i];
            if (oldName === item3.name) { 
            item3.name = newName;
            }
            if (item3 === -1) {
               this.potions.push(oldName); 
                return `Зелья ${oldName} нет в инвентаре!`; 
            }
            
        }
    },
};
  
  

            
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
// atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
// updatePotionName(oldName, newName) {
//     const index = this.potions.indexOf(oldName);


console.table(atTheOldToad.getPotions())   
atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }); 
atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
console.table(atTheOldToad.getPotions())   

atTheOldToad.removePotion('Дыхание дракона'); 
atTheOldToad.removePotion('Зелье скорости');
console.table(atTheOldToad.getPotions()) 

//atTheOldToad.updatePotionName({ name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 }); //, в свойстве `potions` будет массив `[{ name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ]`
atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
console.table(atTheOldToad.getPotions()) 

