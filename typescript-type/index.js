"use strict";
// boolean
var hasValue = true;
// number
var count = 10;
var float = 3.14;
var negative = -0.12;
// string
var single = 'hello';
var doble = 'hello';
var back = "hello";
/*
  ↑上記 型注釈
  ↓下記 型推論
*/
// let hasValue = true;
// let count = 10;
// let float = 3.14;
// let negative = -0.12;
// let single = 'hello';
// let doble = 'hello';
// let back = `hello`;
// object{} ---------------
var person = {
    name: {
        first: 'shun',
        last: 'okamoto',
    },
    age: 24,
};
console.log(person.name);
// -----------------------
// Array[]  --------------
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0];
console.log(fruit);
// Tuple型を利用して決まった配列を作る(型の限定)
var book = ['business', 1500, false];
book.push(21);
console.log(book[0]);
// -----------------------
// enum  -----------------
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.GRANDE;
// -----------------------
// Union型  --------------
var unionType = 10;
var unionTypes = [21, 'hello'];
// -----------------------
// Literal型  ------------
var apple = 'apple';
// -----------------------
// Literal & Union型  ----
var clothSize = 'medium';
var cloth = {
    color: 'white',
    size: 'large',
};
// -----------------------
// function --------------
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello');
}
console.log(sayHello());
var temp;
var anotherAdd = add;
var anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
// 関数の方注釈
var doubleNumber = function (number) { return number * 2; };
var doubleNumber2 = function (num) { return num * 2; };
// コールバック関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// -----------------------
function error(message) {
    throw new Error(message);
}
//# sourceMappingURL=index.js.map