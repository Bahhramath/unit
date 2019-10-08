const utils = require("../scripts.js");

describe("Задание1", function () {

    it("задание 1", function () {
        expect(utils.zad1).toBeDefined();
        expect(utils.zad1(17, 10)).toEqual(14);
    });
});

describe("Задание2", function () {
    it("задание 2", function () {
        expect(utils.zad2).toBeDefined();
        expect(utils.zad2()).toEqual('Привет, Мир!');
    });

});

describe("Задание3", function () {
    it("задание 3", function () {
        expect(utils.zad3).toBeDefined();
        expect(utils.zad3(0)).toEqual('a');

    });

});


fdescribe("Задание4", function () {
    it("задание 4", function () {
        expect(utils.zad4).toBeDefined();
        expect(utils.zad4()).toEqual(120);
    });

});

describe("Задание5", function () {
    it("задание 5", function () {
        expect(utils.zad5).toBeDefined();
        expect(utils.zad5('Петя')).toEqual('100 руб');
    });

});

describe("Задание6", function () {
    it("задание 6", function () {
        expect(utils.zad6).toBeDefined();
        expect(utils.zad6(7)).toEqual('воскресенье');
    });

});


describe("Задание7", function () {
    it("задание 7", function () {
        expect(utils.zad7).toBeDefined();
        expect(utils.zad7({js: ['jQuery', 'Angular'], php: 'hello', css: 'world'})).toEqual('jQuery');
    });

});


describe("Задание8", function () {
    it("задание 8", function () {
        expect(utils.zad8).toBeDefined();
        expect(utils.zad8()).toEqual(Object({surname: 'Smith'}));
    });

});

describe("Задание9", function () {
    it("задание 9", function () {
        expect(utils.zad9).toBeDefined();
        expect(utils.zad9()).toEqual([1, 2, 3, 4, 5]);
        expect(utils.zad9_1()).toEqual([1, 2, 3, 4, 5]);
    });

});

describe("Задание10", function () {
    it("задание 10", function () {
        expect(utils.zad10).toBeDefined();
        expect(utils.zad10()).toEqual(4);
    });

});

describe("Задание11", function () {
    it("задание 11", function () {
        expect(utils.zad11).toBeDefined();
        expect(utils.zad11()).toEqual('Понедельник');
    });

});

fdescribe("Задание12", function () {
    it("задание 12", function () {
        expect(utils.zad12).toBeDefined();
        expect(utils.zad12(1)).toEqual('Неверно');
    });

});

describe("Задание13", function () {
    it("задание 13", function () {
        expect(utils.zad13).toBeDefined();
        expect(utils.zad13(1)).toEqual('Верно');
    });

});


describe("Задание14", function () {
    it("задание 14", function () {
        expect(utils.zad14).toBeDefined();
        expect(utils.zad14(5)).toEqual(0.5);
    });

});

describe("Задание15", function () {
    it("задание 15", function () {
        expect(utils.zad15).toBeDefined();
        expect(utils.zad15(43)).toEqual('Нет таких значений');
    });

});

describe("Задание16", function () {
    it("задание 16", function () {
        expect(utils.zad16).toBeDefined();
        expect(utils.zad16(1)).toEqual('Первая декада');
    });

});

describe("Задание17", function () {
    it("задание 17", function () {
        expect(utils.zad17).toBeDefined();
        expect(utils.zad17('abcde')).toEqual('да');
    });

});

describe("Задание18", function () {
    it("задание 18", function () {
        expect(utils.zad18).toBeDefined();
        expect(utils.zad18('12345')).toEqual('да');
    });

});

describe("Задание19", function () {
    it("задание 19", function () {
        expect(utils.zad19).toBeDefined();
        expect(utils.zad19('465')).toEqual(15);
    });

});

describe("Задание20", function () {
    it("задание 20", function () {
        expect(utils.zad20).toBeDefined();
        expect(utils.zad20('465123')).toEqual('нет');
    });

});

describe("Задание21", function () {
    it("задание 21", function () {
        expect(utils.zad21).toBeDefined();
        expect(utils.zad21(1)).toEqual(1);
        expect(utils.zad21_1(1)).toEqual(1);
    });

});

describe("Задание22", function () {
    it("задание 22", function () {
        expect(utils.zad22).toBeDefined();
        expect(utils.zad22('100')).toEqual(5050);
    });

});

describe("Задание23", function () {
    it("задание 23", function () {
        expect(utils.zad23).toBeDefined();
        expect(utils.zad23([1, 2, 5, 9, 4, 13, 4, 10])).toEqual('Есть!');
    });

});

describe("Задание24", function () {
    it("задание 24", function () {
        expect(utils.zad24).toBeDefined();
        expect(utils.zad24([2, 5, 9, 15, 0, 4])).toEqual(5);
    });

});

describe("Задание25", function () {
    it("задание 25", function () {
        expect(utils.zad25).toBeDefined();
        expect(utils.zad25({green: 'зеленый', red: 'красный', blue: 'голубой'})).toEqual('green');
        expect(utils.zad_25({green: 'зеленый', red: 'красный', blue: 'голубой'})).toEqual('зеленый');
    });

});

describe("Задание26", function () {
    it("задание 26", function () {
        expect(utils.zad26).toBeDefined();
        expect(utils.zad26({Коля: '200', Вася: '300', Петя: '400'})).toEqual('Коля - зарплата 200 долларов');
    });

});