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


fdescribe("Задание4", function () {
    it("задание 4", function () {
        expect(utils.zad4).toBeDefined();
        expect(utils.zad4('12345',0)).toEqual('120');
    });

});