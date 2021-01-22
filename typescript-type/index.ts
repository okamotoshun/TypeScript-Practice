// boolean
let hasValue: boolean = true;
// number
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
// string
let single: string = 'hello';
let doble: string = 'hello';
let back: string = `hello`;

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
const person: {
  name: {
    first: string;
    last: string;
  };
  age: number;
} = {
  name: {
    first: 'shun',
    last: 'okamoto',
  },
  age: 24,
};
console.log(person.name);
// -----------------------

// Array[]  --------------
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
const fruit = fruits[0];
console.log(fruit);

// Tuple型を利用して決まった配列を作る(型の限定)
const book: [string, number, boolean] = ['business', 1500, false];
book.push(21);
console.log(book[0]);

// -----------------------

// enum  -----------------

enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI',
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.GRANDE;
// -----------------------

// Union型  --------------
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];
// -----------------------

// Literal型  ------------
const apple: 'apple' = 'apple';
// -----------------------

// Type  -----------------
type ClothSizee = 'small' | 'medium' | 'large';
// -----------------------

// Literal & Union型  ----
let clothSize: 'small' | 'medium' | 'large' = 'medium';

const cloth: {
  color: string;
  size: ClothSizee;
} = {
  color: 'white',
  size: 'large',
};
// -----------------------

// function --------------

function add(num1: number, num2: number): number {
  return num1 + num2;
}
function sayHello(): void {
  console.log('hello');
}
console.log(sayHello());
let temp: undefined;

const anotherAdd: (num1: number, num2: number) => number = add;

const anotherAdd2: (num1: number, num2: number) => number = function (
  num1: number,
  num2: number
): number {
  return num1 + num2;
};

// 関数の方注釈
const doubleNumber = (number: number): number => number * 2;
const doubleNumber2: (number: number) => number = (num) => num * 2;

// コールバック関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});
// -----------------------

function error(message: string) :never{
  throw new Error(message);
}
