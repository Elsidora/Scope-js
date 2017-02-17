//Homework3, task1
'use strict';

var positions = [
        'Отвертка ультразвуковая WHO-D',
        'Ховерборд Mattel 2016',
        'Нейтрализатор FLASH black edition',
        'Меч световой FORCE (синий луч)',
        'Машина времени DeLorean',
        'Репликатор домашний STAR-94',
        'Лингвенсор 000-17',
        'Целеуказатель электронный WAY-Y'
      ];
var listLength = positions.length,
    listName = 'Список наименований:';

  console.log(listName);    
for(var i = 0; i < listLength; i++) {
  console.log(i + 1, positions[i]);
}
console.log('\n');

//Task2
var listName = 'Окончательный список наименований:',
    positionsAdd = [
       'Экзоскелет Trooper-111',
       'Нейроинтерфейс игровой SEGUN',
       'Семена дерева Эйва',
  ];
console.log(listName);  

for(var i = 0; i < positionsAdd.length; i++) {
  positions.push(positionsAdd[i]);
}
for(var j = 0; j < positions.length; j++) {
console.log(j + 1, positions[j]);
}
console.log('\n');
//Для проверки
console.log(positions);
console.log('\n');

//Task3
var listName = 'Принять в первую очередь:',
    itemIndex = positions.indexOf('Машина времени DeLorean'),
    itemSplice = positions.splice(itemIndex, 1);

  positions.unshift(itemSplice[0]);
  console.log(listName);    

for(var j = 0; j <= 2; j++) {
 console.log(j + 1, positions[j]);
}
console.log('\n');
//Для проверки
console.log(positions);
console.log('\n');

//Task4
let[carTime, screwDriver, mattel, flashBlack, force, ...rest] = positions;
console.log('В магазине:');
for(var i = 0; i <=4; i++) {
  console.log([carTime, screwDriver, mattel, flashBlack, force][i]);
}

console.log('Остальные товары:');
console.log(rest);
