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
function zad7(obj){
    return obj['js'] = 'jQuery';
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


//задание 12
function zad12(a) {

    if (a == 0)
        return 'Верно';
    else {
        return 'Неверно';
    }
}

//задание 13
    function zad13(a) {

        if (a > 0 && a < 5) {
            return 'Верно';
        } else {
            return 'Неверно';
        }
    }
//задание 14
function zad14(a) {
            if (a === 0 || a === 2) {
                return(a + 7);
            } else {
                return(a / 10);
            }
}

//задание 15
function zad15(num) {

switch (num) {
    case 1:
        return 'зима';
        break;
    case 2:
        return 'весна';
        break;
    case 3:
        return 'лето';
        break;
    case 4:
        return 'осень';
}}

//задание 16
function zad16(day) {
    if (day <= 10) {
        return 'Первая декада';
    }
    if (day > 10 && day <= 20) {
        return 'Вторая декада';
    }
    if (day > 20 && day <= 31) {
        return 'Третья декада';
    }
}

//задание 17
    function zad17(str) {
        if (str[0] == 'a') {
            return 'да';
        } else {
            return 'нет';
        }
    }

//задание 18
function zad18(num) {
    if (num[0] == '1' || num[0] == '2' || num[0] == '3') {
        return 'да';
    } else {
        return 'нет';
    }
}

//задание 19
function zad19(num) {
    const sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
    return sum;
}


//задание 20
function zad20(num) {
    const sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
    const sum2 = Number(num[3]) + Number(num[4]) + Number(num[5])
    if (sum1 == sum2) {
        return 'да';
    } else {
        return 'нет'
    }
}

//задание 21
function zad21(i) {

    while (i <= 100) {
        return i;
        i++;
    }
    ;

    for (i = 1; i <= 100; i++) {
        return i;
    }
}

//задание 22
function zad22(n){
    let sum = 0;
    for(i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}


//задание 23
function zad23(arr) {

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        return 'Есть!';
        break;
    }
}}

//задание 24
function zad24(arr) {

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        return arr[i];
    }
}}

// задание 25
function zad25(obj) {

for (let key in obj) {
    return (key);

}}

function zad_25(obj) {

    for (let key in obj) {
        return(obj[key]);
    }}

// задание 26
function zad26(obj) {
    for (let key in obj) {
    return key + ' - зарплата ' + obj[key] + ' долларов';
}}


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
    zad11:zad11,
    zad12:zad12,
    zad13:zad13,
    zad14:zad14,
    zad15:zad15,
    zad16:zad16,
    zad17:zad17,
    zad18:zad18,
    zad19:zad19,
    zad20:zad20,
    zad21:zad21,
    zad22:zad22,
    zad23:zad23,
    zad24:zad24,
    zad25:zad25,
    zad_25:zad_25,
    zad26:zad26
};