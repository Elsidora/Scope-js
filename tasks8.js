'use strict';

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}
//Task1
function fixAmount(amount) {
  
    amount = amount.toLocaleString().replace(',', '.');
    return parseFloat(amount);
}

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: '2.7 метра ' },
  { price: 1, amount: 'семь единиц' }
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}

console.log('\n');
//Task2
let chars = ['2', '4', 'R', '2', 'd', '2'];
let inputSimbol = '';

function handleKey(char) {
  inputSimbol += char;

  if (inputSimbol.search(/r2d2/i) >= 0) {
    showSpecialPrice();
  }
}

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

for (let char of chars) {
  handleKey(char);
}

console.log('\n');

//Task3
const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];
let names = ['id', 'name', 'amount', 'price'];
let products = [];
function parseData(names, data) {
  
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].split(','); 
    products[i] = {};
    for (let j = 0; j < names.length; j++) {
      
      products[i][names[j]] = data[i][j];
    }
  }
  
  return products;
}  
let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);