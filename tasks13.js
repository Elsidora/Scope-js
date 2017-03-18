'use strict';
//Task 1
const PREFIX_KEY = Symbol;
class BarcodeGenerator {
  static get prefix() {
    return PREFIX_KEY;
  }
  constructor(size=1) {
    this.size=size;
  }
  create() {
    let result = [Array(this.size).fill(0).map(value=>Math.round(Math.random() * 9)).join('')];
    
    if (this[BarcodeGenerator.prefix]) {
      result.unshift(this[BarcodeGenerator.prefix]);
    }
    return result.join('-');
  }
}

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());

console.log('\n');

//Task 2 
class HexRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  [Symbol.iterator]() {
    let counter = this.to - this.from;
    return {
      next: () => ({
        value: (this.to - counter).toString(16),
        done: counter-- < 0
      })
    };
  }
}

let queue = new HexRange(247, 253);
console.log(...queue);

let queue2 = new HexRange(1, 10);
for (let value of queue2) {
  console.log(value);
}

console.log('\n');

//Task 3 
class DateRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  [Symbol.iterator]() {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    let fromToToDaysCount = Math.ceil((this.to.getTime() - this.from.getTime())/ONE_DAY) + 1,
    workDates = Array(fromToToDaysCount)
    .fill(0)
    .map((value, index) => new Date(this.from.getTime() + index * ONE_DAY))
    .filter(date => date.getDay() !== 0)
    .filter(date => date.getDay() !== 6),
    counter = 0;
    return {
      next: () => ({
        value: workDates[counter],
        done: counter++ > workDates.length -1
      })
    };
    
  }
}
const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}

let range2 = new DateRange(from, to);
console.log([...range2].map(day => day.toLocaleDateString('ru-Ru')));


/*Домашнее задание к лекции 4.1 «Символы и итераторы»
Перед началом работы
Активируйте строгий режим соответствия.
Задача 1. Генератор штрих-кодов
Для печати наклеек со штрих-кодами на коробки необходимо реализовать класс BarcodeGenerator. Экземпляр этого класса должен создавать и возвращать случайные коды вида AA-1419. В этом коде AA — префикс, все коды получают один и тот же префикс. Префикс может отсутствовать. А 1419 — случайный числовой код. Количество символов в этом коде задаётся в конструкторе генератора. По умолчанию это 1.
Так же реализовать возможность смены префикса через символьное свойство. По умолчанию префикс отсутствует. В этом случае символа - в штрих-коде быть не должно.
Описание конструктора и экземплары
Конструктор
Принимает один аргумента:
size — кол-во символов числовой части кода, число, по умолчанию равен 1.
Экземпляр
Имеет всего один метод:
create
не принимает аргументов, возвращает строку из префикса и кода, разделенных символом -. Если префикса нет, то символ - в код не добавляется. Числовая часть должна быть случайной и иметь такое количество символов, каторое было передано в конструктор генератора при создании.
Пример использования

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());
Если все реализовано верно, вы получите такой вывод:

AA-1419
XX-4031
XX-1600
XX-3184
9318
Процесс реализации
Создайте класс BarcodeGenerator определив конструктор.
Реализуйте в методе create генерацию случайного штрих-кода с заданным количеством символов. Пока без префикса.
Создайте символ для символьного свойства в котором будет храниться префикс.
Используйте символьное свойство с префиксом для генерации штрих-кода.
Проверьте работу вашего кода на примере использования. Так же протестируйте его используя свои примеры.
Задача 2. Электронная очередь
На некоторых планетах, где у нас есть пункт самовывоза, принята шестнадцатиричная система счисления. И поэтому порядковые номера в электронной очереди нужно выдавать в этой системе счисления.
Создайте класс HexRange, который реализует листаемый диапазон шестнадцатиричных чисел.
Описание конструктора и экземплары
Конструктор
Принимает два аргумента:
from — начало диапазона, число в десятиричной системе счисления;
to, — конец диапазона, число в десятиричной системе счисления.
Экземпляр
Не имеет методов. Но его можно листать с помощью for-of или разбирать операторами деструктуризации. Каждый элемент — это строка, шестнадцатиричное представление очередного элемента диапазона.
Пример использования

let queue = new HexRange(247, 253);
console.log(...queue);
Если все реализовано верно, вы получите такой вывод:

f7 f8 f9 fa fb fc fd
Процесс реализации
Создайте класс HexRange описав конструктор.
Сделайте экземпляры этого класса итерируемыми.
Проверьте работу вашего кода на примере использования. Так же протестируйте его используя свои примеры.
Задача 3. Рабочие дни
Для планирования доставки, составления графика работы менеджеров отдела продаж и для решения других задач нам нужна возможность листать только рабочие дни в заданном диапазоне. Рабочими днями у нас будут всегда дни с понедельника по пятницу включительно.
Для использования в разных модулях системы создайте класс DateRange. Если экземпляр этого класса листать через for-of, то можно получить только рабочие дни.
Описание конструктора и экземплары
Конструктор
Принимает два аргумента:
from — дата начала диапазона, объект Date;
to — дата окончания диапазона, объект Date.
Экземпляр
Не имеет свойств и методов. Но при листании через for-of в каждой итерации предоставляет очередной рабочий день — объект Date начиная с даты начала, если это рабочий день, и заканчивая датой окончания, если она выпадает на рабочий день.
Пример использования

const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}
Если все реализовано верно, вы получите такой вывод:

13.03.2017
14.03.2017
15.03.2017
16.03.2017
17.03.2017
20.03.2017
21.03.2017
Процесс реализации
Создайте класс DateRange описав конструктор, принимающий два аргумента.
Сделайте экземпляры этого класса итерируемыми.
Проверьте работу вашего кода на примере использования. Так же протестируйте его используя свои примеры.*/