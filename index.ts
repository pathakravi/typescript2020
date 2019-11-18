// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('demo1');
appDiv.innerHTML = `<h1>Welcome to TypeScript !</h1>`;

//1. Basic types In typescript
//boolean
let isDone: boolean = false;

//1.1 number, All numbers in typescript are floating point values
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//1.2 string, both in javascript and typescript both uses single or double quote
let color: string = "blue";
color = 'red';

//embed expression in string
//use (`) backtick for multi line strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;

//Above is equivalent to 
let sentence1: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

//1.3 Tuple - creates an array with a fixed number of elememts whose types are known.
// Declare a tuple type
let x1: [string, number];
// Initialize it
x1 = ["hello", 10]; // OK
console.log(x1[0].substring(1));

let x2: [string, number];
//x2 = [10, "hello"]; // its incorrect
//console.log(x[1].substring(1));  // thorws error

//1.4 enum - By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
console.log('Enum auto value setting: '+c);
//manuallly set values all values in enumm
enum Color1 {Red = 1, Green=2, Blue = 4}
let d: Color1 = Color1.Green;
console.log('Enum manully set value: '+d);
// not sure of value mapped in Color
enum Color2 {Red = 1, Green, Blue}
let colorName: string = Color2[2];
console.log(colorName);

//1.5 Any  - opt out of type checking if values come from dynamic content such as third party libraries
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false
console.log(notSure);

//1.6 Void : commonly used  as a return type of function that do not return a value.
(function warnUser(): void {
    console.log("This is my warning message");
})();

//1.7 null & undefined
//in typescript, null and undefined have their own types unlike javascript.
let u: undefined = undefined;
let n: null = null;

//NOTE 1: DIfference:
//null - reserved keyowrd value as null assigned to a variable.
let life = null;
console.log('null example: '+life);
//undefiend - varibale declared but did not assigned value
let name;
console.log('undefined example 1 : '+name);
let numArray = [1,2,,4];
console.log('undefined example 2: '+numArray);
console.log('undefined example 3: '+typeof(numArray[2]));

//1.8 object : represents the non primitive type i.e anything that is not a number, string, boolean, symbol, null or undefined
//create({ prop: 0 }); // OK
//create(null); // OK
//create(42); // Error
//create("string"); // Error
//create(false); // Error
//create(undefined); // Error

//1.9 Type Assertions - is type casting, changing the type of value
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(typeof(someValue));
console.log(typeof(strLength));

/* ------------------------------------------------------------------ */

//2.0 Variable declarations

//2.1 var keyowrd - are scoped to the imeediate function body i.e function scope.
(function f1(input: boolean) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    return b;
})(true);

//2.2 let keyowrd - are scoped within immediate enclosing scope, block scope.
(function f(input: boolean) {
    let a = 100;
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
        console.log('let example '+ b);
    }
    console.log('let example '+ a);
    // Error: 'b' doesn't exist here
    //return b;
})(true);

//2.3 const keyword - hold read only variable with a constant value that can never change.

/* ------------------------------------------------------------------ */

//3.0 Interfaces and classes






