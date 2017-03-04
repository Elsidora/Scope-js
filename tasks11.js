//Homework11 (Lecture2.5), 
'use strict';
//Task1
const clients = [{
<<<<<<< HEAD
  name: 'Филип Фрай', 
=======
  name: 'Филип Фрай',
>>>>>>> fcec1b679d4fdebdac5e438ad35b7d7f839a4892
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

clients.findByName = function(name) {
<<<<<<< HEAD
  return this.find(function(client) {
    return client.name === name;
  });
=======
  for (var client of clients) {
    if(client.name === name) {
    return client;
    }
  }
>>>>>>> fcec1b679d4fdebdac5e438ad35b7d7f839a4892
};

let client = clients.findByName('Доктор Джон Зоидберг');
console.log(client.email); // zoidberg-md@list.un
    client = clients.findByName('Люрр');
console.log(typeof client); // undefined
console.log('\n');

//Task2;
function compareByTotalSumm(left, right) {
<<<<<<< HEAD
    let summ = function(memo, el) {
      return memo + el;
    };
    let leftSumm = left.orders.reduce(summ, 0);
    let rightSumm = right.orders.reduce(summ, 0);
=======
  
    let leftSumm = left.orders.reduce(function(memo, el) {
      return memo + el;
    }, 0);
    let rightSumm = right.orders.reduce(function(memo, el) {
      return memo + el;
    }, 0);
>>>>>>> fcec1b679d4fdebdac5e438ad35b7d7f839a4892
    
  return rightSumm - leftSumm;
}

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));
console.log('\n');

//Task3;
function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}
function getSubscribedEmails(list) {
<<<<<<< HEAD
  
  return list.reduce(function(memo, people) {
   
   return people.isSubscribed === true ? memo.concat(people.email) : memo;
  }, []);
=======
  const emails = [];
  for(let people of list) {
    if(people.isSubscribed === true) {
      emails.push(people.email);
    }
  }
  return emails;
>>>>>>> fcec1b679d4fdebdac5e438ad35b7d7f839a4892
}
getSubscribedEmails(clients).forEach(sendMail);

/*Домашнее задание к лекции 2.5 «Прототип и конструктор массива»
Перед началом работы
Активируйте строгий режим соответствия.
Добавьте в редактор следующий блок кода: 

const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];
Задача 1. Поиск клиентов.
У нас огромная база клиентов. В массиве clients представлен её фрагмент для экспериментов. Нам нужно реализвать возможность получить всю информацию о клиенте по его имени.
Описание функции
Реализовать метод findByName в массиве clients, который будет принимать имя клиента и возвращать объект клиента с таким именем (свойство name, строгое соответствие). Метод принимает следующие аргументы:
name — имя клиента, строка
Функция должна вернуть объект клиента с таким именем, либо undefined, если такого клиента нет в нашем списке.
Пример использования функции

const client = clients.findByName('Доктор Джон Зоидберг');
console.log(client.email); // zoidberg-md@list.un

const client = clients.findByName('Люрр');
console.log(typeof client); // undefined
Процесс реализации
Создайте свойство в массиве clients с именем findByName присвоив туда функцию.
В теле функции найдите подходящий элемент самым оптимальным и очевидным способом.
Верните найденный объект или undefined.
Убедитесь, что пример использования функции работает так как описано. И попробуйте свои варианты использования созданного метода.
Задача 2. Сортируем по сумму покупок.
Бывает, что нам нужно отсортировать список клиентов по убыванию суммы их покупок. Все суммы покупок доступны в свойстве orders.
Описание функции
Реализовать функцию compareByTotalSumm которая принимает два объекта пользователя и возвращает 1 если второй объект имеет сумму покупок больше первого, 0 если суммы покупок равны и -1, если второй объект имеет меньшую сумму покупок.
left — клиент из массива clients, объект
right — клиент из массива clients, объект
Возвращает 1, 0 или -1. Для того чтобы получить общую сумму объекта left или rigth нужно просуммировать все элементы массива в свойстве orders.
Функция будет использоваться для передачи в метод sort массива.
Пример использования функции

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));
Если функция compareByTotalSumm реализована правильно, то вы увидите такой результат:

Филип Фрай
Бендер Сгибатель Родригес
Доктор Джон Зоидберг
Процесс реализации
Создайте функцию compareByTotalSumm.
Посчитайте сумму продаж для клиента из аргумента left.
Посчитайте сумму продаж для клиента из аргумента rigth.
Сравните их и верните результат.
Задача 3. Рассылка писем.
Перед началом работы добавьте в редактор следующий код:

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}
Наш отдел маркетинга рассылает письма с информацией по акциям всем клиентам, кто подписан на рассылку. У таких клиентов свойство isSubscribed равно true.
Описание функции
Создать функцию getSubscribedEmails, которая принимает список клиентов, получает электронные адреса подписанных пользователей и возвращает их массив. Принимает аргументы:
list — список клиентов, аналогичный массиву clients, массив
Функция должна вернуть массив электронных адресов подписанных клиентов. Либо пустой массив.
Пример использования функции

getSubscribedEmails(clients).forEach(sendMail);
Если функция getSubscribedEmails реализована верно, то получим такой вывод:

Письмо отправлено на адрес bender.rodriges@rambler.un
Письмо отправлено на адрес zoidberg-md@list.un
Процесс реализации
Создайте функцию getSubscribedEmails.
Получите оптимальным и логичным способом все электронные адреса клиентов у которых isSubscribed равно true.
Верните полученный массив электронных адресов.*/