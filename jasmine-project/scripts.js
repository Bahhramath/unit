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

module.exports = {
    zad1:zad1,
    zad2:zad2,
    zad3:zad3,
    zad4:zad4
};