'use strict';
// Homework9
//Task1
let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

function checkCoupon(code) {
  // Игорь: для массива символов кода лучше использовать новую переменную, т.к. code - строка, а потом превратилась в массив
 code = code.toLowerCase().split(/[^a-z0-9]/i).join('').split('');
 
 // Игорь: вместе if (condition) { return true; } else { return false; } лучше писать просто return condition. И помните про форматирование.

  return code.length >= 10 && code.join('') === code.reverse().join('');
}

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}
console.log('\n'); 

// Игорь (2.1): Добавил пару контрольных примеров. Сейчас a < b && b > c обрабатывается неправильно.
// Task2 - delete HTML-tags
const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!',
  'Картиночка: <img />',
  'a < b && b > c'
];

function stripTags(text) {
  text = text.replace(/<[^\s]\/?[^>]*>/g, ''); //Элла: теперь условие a < b && b > c обрабатывается корректно. 
  return text;
}
for (let text of texts) {
  console.log(stripTags(text));
}

console.log('\n');

// Task3
const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: 'email' },
  { name: 'phone', rule: 'phone' },
];

// Игорь (3.1): добавил пустой объект для проверки - сейчас он воспринимается как валидный, а должен быть нет.
const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' },
  {}
];

function validate(form, validators) {
  // Игорь: every - очень хорошо
  if(Object.keys(form).length !== 0) {
  return validators.every(function(validator) {
    if(form.hasOwnProperty(validator.name)) {
      let field = form[validator.name];
    
      if(validator.rule == 'phone') {
        // Игорь (3.2): тут нужно добавить проверку длины номера
        
         return /^(\+7)(\(\d{3}\)|\d{3})\d{7}$/i.test(field) && field.slice(0, 2) == '+7'; //Элла: добавила проверку длины номера.
         // Игорь (3.4): домашнее задание про регулярные выражения, поэтому лучше эту проверку сделать через них
      } else if(validator.rule == 'email') {
        return /^[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z0-9_\-\.]{2,}$/i.test(field);
      } else if(validator.rule instanceof RegExp) {
        return validator.rule.test(field);
      }
      
      return false;
    }
    
    return true;
  });
  }
}
for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {//Элла: пустой объект теперь не будет восприниматься как валидный.
  // Игорь (3.5): функция validate всё равн овозвращает true и при данном подходе мы не сможем добавлять новые правила валидации добавляя их в массив - нужно будет перечислять поля 2 раза - нужно это обойти.
    
    console.log('Ошибок нет');
  } else {
  
    console.log('Форма заполнена не верно');
  }
}



/*Домашнее задание к лекции 2.3 «Регулярные выражения»
Перед началом работы
Активируйте строгий режим соответствия.
Задача 1. Купон-палиндром.
В нашем интернет-магазине акция! Мы решили дать скидку 50% на все заказы с купоном, код которого является палиндромом. Палиндром — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.
Нужна функция checkCoupon, которая будет проверять код купона и возвращать true, если код является палиндромом без учета регистра символов, и false если нет, либо если длина кода меньше 10 символов.
Описание функции
Функцию checkCoupon принимает:
код купона, строка
Функция должна откинуть всё, что не является буквой латинского алфавита или цифрой, проверить размер строки, вернуть true, если после отбрасывания ненужных символов строка 10 или более символов в длину, и является палиндромом, и false в остальных случаях.
Пример использования функции

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}
Если функция checkCoupon реализована верно, то получим такой вывод в консоль:

Код «Madam, I’m Adam» подходит
Код «A man, a plan, a canal. Panama» подходит
Код «----<-------Eve------->-----» не подходит
Код «[__777-x-44-x-777__]» подходит
Код «1234564321» не подходит
Код «Olson in Oslo» подходит
Процесс реализации
Создайте функцию checkCoupon, принимающую нужное количество аргументов.
Приведите код купона к нижнему регистру и отбросьте ненужные символы.
Проверьте что код купона имеет требуемое количество символов.
Любым удобным способом проверьте что код купона является палиндромом.
Верните результат проверки.
После создания функции проверьте работу кода из примера использования, а так же свои собственные варианты купонов.
Задача 2. Вырезаем теги.
Наш маркетолог начал проходить курс по основам HTML и CSS, и теперь размечает тегами каждое слово в тексте для сайта. Может поэтому ему все еще не выдали диплом.
Для защиты от верстальщика-энтузиаста, нам требуется реализовать функцию stripTags которая будет удалять все HTML-теги из текста. На данном этапе не обязательно реализовывать удаление тегов с атрибутами, потому что наш маркетолог пока не знает о их существовании.
Описание функции
Функция stripTags должна принимать один аргумент: текст с разметкой, строка. Функция должна удалить из текста все HTML-теги, и вернуть текст без них.
Пример использования

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой мечь</EM> в <strong>каждый</strong> дом!'
];

for (let text of texts) {
  console.log(stripTags(text));
}
Если все правильно сделать, то получим такой вывод в консоль:

Наши ховерборды лучшие в мире!
Световой мечь в каждый дом!
Процесс реализации
Создайте функцию stripTags, принимающую нужное количество аргументов.
Удалите все теги из текста переданного в функцию любым удобным способом.
Верните строку без тегов, полученную после их удаления.
После создания функции, убедитесь, что пример использования работает без ошибок, и даёт правильный результат. После чего проверьте работу функции, используя свои варианты размеченного текста.
Задача 3. Валидатор форм.
У нас на сайте множество форм заявок. И наши клиенты часто заполняют их всякой билибердой, что причиняет боль и страдания отделу продаж.
Реализовать функцию validate, которая будет проверять правильность заполнения любой формы и возвращать true если форма заполнена правильно, иначе false.
Описание функции
Функция validate, должна принимать следующие аргументы:
данные формы, объект имена свойств которого соответствуют полям формы, а значения — введенным в них данным; 
требования к данным формы, массив объектов, каждый имеет следующие свойства: 
name
название поля формы, строка;
rule
проверка значения, строка или регулярное выражение;
Функция должна проверить каждое поле из массива требований к данным формы. Если свойство rule — строка, то использовать следующие условия:
email
в поле должен быть правильный адрес электронной почты;
phone
в поле должен быть правильный полный номер телефона в России, начинающийся с +7.
Если поле rule регулярное выражение, то просто проверить поле на соответствие этому выражению.
Пример использования функции

const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: 'email' },
  { name: 'phone', rule: 'phone' },
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' }
];

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена не верно');
  }
}
Если все правильно сделать, то вывод в консоль будет таким:

{ name: 'Ivan Ivanov',
  email: 'ivan@test.co',
  phone: '+79212753690' }
Ошибок нет
{ name: 'III', email: 'ivan@test', phone: '11111' }
Форма заполнена не верно
Процесс выполнения
Создайте функцию validate, принимающую нужное количество аргументов.
Для каждого элемента из массива требований сделайте следующее: 
Получите значение, введенное в соответствующее поле формы, взяв имя поля из свойства name.
Получите правило проверки значения поля из свойства rule.
Если правило является строкой, преобразуйте его в подходящее регулярное выражение из описания функции.
Проверьте значение поля формы на соответствие регулярному выражению.
Если все поля формы соответствуют требованиям, верните true.
Если хотя бы одно из полей не соответствует, верните false.
После создания функции, убедитесь, что пример использования работает без ошибок и даёт правильный результат. После чего проверьте работу функции, используя свои варианты форм и правил проверки.*/