'use strict';
//Задача № 1
var previousSum = 0;
var rateOfTax = 73;
function amountOfTaxes(cost = 0)  {
  var sumTax = cost * rateOfTax/100;
  return previousSum += sumTax;
}
amountOfTaxes(1500);
amountOfTaxes(3000);
amountOfTaxes(5600);
console.log(`Налог с продаж (${rateOfTax}%) к оплате: ${previousSum} Q`);

console.log('\n');

//Задача № 2

var wrappingPaper = 30;
function orderPackaging(width, height, length) {
  var squareBox = (width * height + length * height + width * length) * 2;
  if (squareBox <= wrappingPaper) {
    wrappingPaper -= squareBox;
    console.log(`Заказ (${width}/${height}/${length} метра) упакован, осталось упаковочной бумаги ${wrappingPaper} м2`);
    return true;
  }
  else {
    console.log(`Заказ (${width}/${height}/${length} метра) не упакован, осталось упаковочной бумаги ${wrappingPaper} м2`);
    return false;
  }
}
orderPackaging(10, 20, 10);
orderPackaging(2, 0.5, 1);
orderPackaging(2, 5, 3);

console.log('\n');

// Задача № 3
var chargeTeleports = [7, 2, 1];
var chargeCounter = [];
function charge(i) {
  return function() {

  if (chargeTeleports[i] > 0) {
    chargeTeleports[i]--;
    console.log(`Телепорт ${i + 1} использован, заряд ${chargeTeleports[i]} единиц`);
  }else {
    console.log(`Телепорт ${i + 1} недоступен, требуется перезарядка`);
  }

};
}
for (var i = 0; i < chargeTeleports.length; i++) {
  chargeCounter.push(charge(i));
  
}
chargeCounter[0]();
chargeCounter[1]();
chargeCounter[2]();
chargeCounter[0]();
chargeCounter[1]();
chargeCounter[2]();
chargeCounter[0]();
chargeCounter[1]();
chargeCounter[2]();