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
        expect(utils.zad2('Привет,',' Мир')).toEqual('Привет, Мир');
    });

});

describe("Задание3", function () {
    it("задание 3", function () {
        expect(utils.zad3).toBeDefined();
        expect(utils.zad3('abcde',0)).toEqual('a');
        expect(utils.zad3('abcde',2)).toEqual('c');
        expect(utils.zad3('abcde',4)).toEqual('e');
    });

});


describe("Задание4", function () {
    it("задание 4", function () {
        expect(utils.zad4).toBeDefined();
        expect(utils.zad4('12345',0)).toEqual(120);
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
        expect(utils.zad7('jQuery')).toEqual('jQuery');
    });

});


describe("Задание8", function () {
    it("задание 8", function () {
        expect(utils.zad8).toBeDefined();
        expect(utils.zad8('surname')).toEqual('Smith');
    });

});

describe("Задание9", function () {
    it("задание 9", function () {
        expect(utils.zad9).toBeDefined();
        expect(utils.zad9()).toEqual([1, 2, 3, 4, 5]);
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

describe("Задание12", function () {
    it("задание 12", function () {
        expect(utils.zad11).toBeDefined();
        expect(utils.zad11()).toEqual('Понедельник');
    });

});