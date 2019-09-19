//задние 1
function zad1(a, b) {
    c = a - b;
    let d;
    d = 7;
    return c + d;
}


//задание 2
function zad2(str1, str2) {
    return str1 + str2
};

//задание 3

function zad3(str, i) {
  return str[i];
}

//задание 4
function zad4(num,i) {
    return num[i] * num[i+1] * num[i+2] * num[i+3] * num[i+4];
}

//задание 5
function zad5(obj,i) {
    return obj[i];
}

/* задание 6
const daysOfTheWeek = {
    '1': 'понедельник',
    '2': 'вторник',
    '3': 'среда',
    '4': 'четверг',
    '5': 'пятница',
    '6': 'суббота',
    '7': 'воскресенье'
};
alert(daysOfTheWeek['7']);//текущий день - воскресенье
let day = 7;
alert(daysOfTheWeek[day]);//7-ой день - воскресенье

/* задание 7
const obj = {
    js: ['jQuery', 'Angular'], php: 'hello', css: 'world'
};
//alert( obj['js'][0]);
alert(obj['js'] = 'jQuery');

//задание 8
let user = {};// пустой объект user.
user.name = 'John';//свойство name со значением John
alert(user.name);//John
user.surname = 'Smith';//свойство surname со значением Smith
user.name = ' Pete';//изменено значение свойства name на Pete
alert(user.name);//Pete
delete user.name; //удалено свойство name из объекта

//задание 9
let arr = [1, 2, 3, 4, 5];
alert(arr);//первый способ создания массива arr

let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
alert(arr);//второй способ создания массива arr

//задание 10
let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
alert(a[1][0]); //4

//задание 11
const daysOfTheWeek = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
alert(daysOfTheWeek['ru'][0]);//понедельник
alert(daysOfTheWeek['en'][2]);//Wednesday

//задание 12
let a = 1; //=0,=-3
if (a == 0) {
    alert('Верно');
} else {
    alert('Неверно');
}
;

//задание 13
let a = 5;//0, -3, 2
if (a > 0 && a < 5) {
    alert('Верно');
} else {
    alert('Неверно');
}
;

//задание 14
let a = 5;//0, -3, 2
if (a === 0 || a === 2) {
    alert(a + 7);
} else {
    alert(a / 10);
}
;

//задание 15
num = 1;
result = '';

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
}
;

//задание 16
let day = 1;//первая декада
if (day <= 10) {
    alert('Первая декада');
}
if (day > 10 && day <= 20) {
    alert('Вторая декада');
}
if (day > 20 && day <= 31) {
    alert('Третья декада');
}
;

//задание 17
let str = 'abcde';
if (str[0] == 'a') {
    alert('да');
} else {
    alert('нет');
}
;

//задание 18
let num = '12345';
if (num[0] == '1' || num[0] == '2' || num[0] == '3') {
    alert('да');
} else {
    alert('нет');
}
;

//задание 19
let num = '465';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
alert(sum);

//задание 20
let num = '465123';
let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5])
if (sum1 == sum2) {
    alert('да');
} else {
    alert('нет')
}
;

//задание 21
let i = 1;
while (i <= 100) {
    alert(i);
    i++;
}
;

for (i = 1; i <= 100; i++) {
    alert(i);
}
;

//задание 22
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
;

//задание 23
let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        alert('Есть!');
        break;
    }
}

//задание 24
const arr = [
    2, 5, 9, 15, 0, 4
];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}
;

// задание 25
let obj = {
    green: 'зеленый', red: 'красный', blue: 'голубой'
};

for (let key in obj) {
    alert(key);
    alert(obj[key]);
}
;

// задание 26
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};

for (let key in obj) {
    alert(key + ' - зарплата ' + obj[key] + ' долларов');
}
;*/


module.exports = {
    zad1:zad1,
    zad2:zad2,
    zad3:zad3,
    zad4:zad4,
    zad5:zad5
};