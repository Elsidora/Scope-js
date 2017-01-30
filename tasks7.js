//Homework 7
'use strict';
// Task 1
var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный завод',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];
var i,
item = positions[i];

function lotCalculator(item, amount) {
  let sum = {};
  sum.lots = Math.ceil(amount/item.producer.lot);
  sum.total = Math.ceil(amount/item.producer.lot) * item.producer.lot * item.price;
  console.log(item.title, `${amount}: заказать партий`, sum.lots,`, стоимость`, sum.total, `Q`);
  return sum;
}

var result1 = lotCalculator(positions[0], 20);
console.log(result1);

var result2 = lotCalculator(positions[1], 30);
console.log(result2);

var result3 = lotCalculator(positions[2], 15);
console.log(result3);

console.log('\n');

// Task 2
'use strict';
var producer = [
  {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
  
  },
  {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
    
  },
  {
  
      name: 'Тульский оружейный завод',
      deferPeriod: 5,
  
  }
];

var i,
contractor = producer[i];

function deferPay(contractor, amount, dateShip) {
 
 let costDay = dateShip.getDate() + contractor.deferPeriod;
 let paymentDate = dateShip.setDate(costDay);
 paymentDate = dateShip.toLocaleDateString(); 
 const deferPayments = [];
 
 let total = {};
    total.contractor = contractor;
    total.paymentDate = dateShip.toLocaleDateString();
    total.amount = amount;
 deferPayments.push(total);
 
 console.log('\n');   
 console.log(deferPayments.length);
 console.log(deferPayments[0].contractor.name);
 console.log(deferPayments[0].amount);
 console.log(deferPayments[0].paymentDate);
 console.log('\n');
 console.log(deferPayments[0].paymentDate,`:`,deferPayments[0].contractor.name,`, сумма`, deferPayments[0].amount,`Q`);
}
deferPay(producer[2], 8900, new Date(2030, 4 - 1, 15));
deferPay(producer[1], 9200, new Date(2030, 2 - 1, 28));
deferPay(producer[0], 6500, new Date(2030, 4 - 1, 13));
  
console.log('\n');

//Task 3
'use strict';
var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский Оружейный Завод',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];
const itemPrototype = {
  hold(amount = 1) {
    if (this.available < amount) {
      return false;
    }
    this.available -= amount;
    this.holded += amount;
    return true;
  },
  unhold (amountFromReserve = this.holded) {
  if (this.holded < amountFromReserve) {
    return false;
  }
  this.available += amountFromReserve;
  this.holded -= amountFromReserve;
  return true;
 },
 
  toString() {
    return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
  }
};

function createItem(title, amount) {
  const item = Object.create(itemPrototype);
  item.title = title;
  item.available = amount;
  item.holded = 0;
  return item;
}

const items = [];
for (let item of positions) {
  items.push(createItem(item.title, item.producer.lot));
}

items[0].hold(2);
items[0].unhold(1);
items[0].unhold();
items[1].hold(8);
items[1].unhold();
items[2].hold(1);
items[2].unhold();

for (let item of items) {
  console.log(`Товар ${item}`);
}