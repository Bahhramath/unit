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
const obj = {
    Петя: '100 руб',
    Коля: '101 руб'
};
function zad5(name) {
    return obj[name];
}

// задание 6
const daysOfTheWeek = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'
};

function zad6(day){
    return daysOfTheWeek[day];
}

// задание 7
const objs = {
    js: ['jQuery', 'Angular'], php: 'hello', css: 'world'
};
function zad7(){
    return objs['jQuery'];
}


//задание 8
const user = {};// пустой объект user.
user.name = 'John';//свойство name со значением John
user.surname = 'Smith';//свойство surname со значением Smith
user.name = ' Pete';//изменено значение свойства name на Pete
delete user.name; //удалено свойство name из объекта
function zad8(surname){
    return user[surname];
}

//задание 9
function zad9(arr1){
     arr1 = [1, 2, 3, 4, 5];
    return arr1;
}

//задание 10
function zad10(a) {
    a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    return a[1][0];
}

//задание 11
function zad11() {
const daysTheWeek = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
return daysTheWeek['ru'][0];
}//daysTheWeek['en'][2]


/*задание 12
function zad12(a) {

if (a == 0)
    return 'Верно';
 else {
    return 'Неверно';
}


/*задание 13
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
    zad5:zad5,
    zad6:zad6,
    zad7:zad7,
    zad8:zad8,
    zad9:zad9,
    zad10:zad10,
    zad11:zad11
};