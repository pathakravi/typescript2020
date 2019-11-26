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
console.log('Enum not sure value : '+colorName);

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

//var example
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

//2.3 const keyword - hold read only variable with a constant value that can never change.

/* ------------------------------------------------------------------ */

//3.0 Interfaces : An Interface is a structure which acts as a contract in our application. It defines the syntax for classes to follow, means a class which implements an interface is bound to implement all its members. 
interface LabeledValue {
    label: string;
}
function printLabel(labeledObj: LabeledValue) {
    console.log('Interface Example 1'+labeledObj.label);
    //console.log('Interface Example 2'+labeledObj.size);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
//3.1 Interface optional properties
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
//let mySquare = createSquare({color: "black"});
let mySquare = createSquare({color: "black", width: 5});
//type assertion
//let mySquare = createSquare({color: "black", width: 5} as SquareConfig);
console.log(mySquare);
//3.2 Interfaces Readonly properties : Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property. The interface contains only the declaration of the methods and fields, but not the implementation.
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
console.log(p1.x);
//p1.x = 5;

//3.3 Mutable array - ReadonlyArray<T>
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100; // error!
//a = ro; // error!
//a = ro as number[];
//ro.push(5);

//3.4 Interfcaes with Function types
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

//3.5 Interfaces with Indexable types
interface StringArray {
    [index: number]: string;
    //[index: number]: string | number;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr);

//3.6 union of property types
interface StringArray1 {
    [index: number]: string | number;
}

//3.7 readonly - prevent from re-assignment
interface StringArray2 {
    readonly [index: number]: string | number;
}

//3.8  Class with an Interfcae

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) { }
}

//3.9 Methods(functions) in an interface
interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock1 implements ClockInterface1 {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

//4.0 Symbols - is a primitive data type just like number and string introduced in ECMAScript 2015 or ES6 .
//symbol values are created by calling Symbol Constructor
let sym1 = Symbol();
let sym2 = Symbol("key"); // optional string key

let sym4 = Symbol("key");
let sym3 = Symbol("key");
console.log(sym4 === sym3); // false, symbols are unique and immutable

//4.1 Symbol can be sued as key for object properties
const sym = Symbol();
let obj = {
    [sym]: "value"
};
console.log(obj[sym]); // "value"

//4.2 Symbols can also be combined with computed property declarations to declare object properties and class members.

const getClassNameSymbol = Symbol();
console.log(getClassNameSymbol);
class C {
    [getClassNameSymbol](){
       return "C";
    }
}

let c1 = new C();
let className = c1[getClassNameSymbol]();
console.log(className);

//4.3 namespaces
interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}


// other way round
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

//5.0 Type Compatibility in TypeScript
//Its is based on Structural Typing - Structural typing is a way of relating types based solely on their members. Since both Named and Person has same type as name, so its fine to work.
interface Named {
    name: string;
}
class Person {
    name: string;
}
let p: Named;
// OK, because of structural typing
p = new Person();

//Example : members of target type name is present, so it will not throw an error
interface Named1 {
    name: string;
}
let x: Named1;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;
function greet(n: Named) {
    console.log("Hello, " + n.name);
}
greet(x);

//Comparing two functions
let x11 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;
y1=x11 // OK, every property of x11 is present in y1
//x11=y1 // Error, every property of y1 is not present in x11

//Function with overloads
//Enum : Enum values from different Enum are consideeed as incompatible

enum Status { Ready, Waiting };
enum Color { Violet, Brown, Magenta };
let status = Status.Ready;
//status = Color.Green;  // Error

//6.0 Iterators
//Iterators : An object is considred iterable if it has implementation of Symbol.iterator property. Symbol.iterator function on an object is responsible for returning the list of values to iterate on. Built in types are : Array, Map, Set, String, Int32Array, Uint32Array

//for..in : iterates over the list and returns the list of keys on an Object.

//for..of : iterates over the list and returns the list of values of an object.
let list = [11, 12, 13];

for (let i in list) {
    console.log('For In Example : '+i); // "0", "1", "2",
}

for (let i of list) {
    console.log('For Of Example '+i); // "4", "5", "6"
}

//7.0 Modules : Enternal modules are called modules.
//In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module. Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well)
//We can compile the module by using the "--module" command.
//In modules, we can re-export some of their features either using their original name or rename it.


/*import { StringValidator } from "./namespaces/StringValidator";
export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}*/

//7.1 export original module and but rename it :
//export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";

//8.0 Namespaces : Internal modules are called namespaces.
//The namespace is a way which is used for logical grouping of functionalities. It encapsulates the features and objects that share common relationships. It allows us to organize our code in a much cleaner way.
//We can compile the namespace by using the "--outFile" command.
//In namespaces, we cannot re-export their features or rename it.

//9.0 Decorators : A Decorator is a special kind of declaration that can be applied to classes, methods, accessor, property, or parameter. Decorators are simply functions that are prefixed @expression symbol

function f() {  
    console.log("f(): evaluated");  
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {  
        console.log("f(): called");  
    }  
}  
  
class Cafe {  
    @f()  
    method() {}  
}
//10.0 Ambients : 
//Ambient declarations files need to save with the extension (d.ts).
//A file with extension .d.ts must have the declare keyword prefixed to each root level definition.
//The Ambient declarations allow us to use existing popular JavaScript libraries safely.

//Additon.js //function of some library
var TestSum;    
(function (TestSum) {    
   var Calc = (function () {   
      function Calc() {   
      }   
      Calc.prototype.doSum = function (a, b) {  
         return a + b;  
      }  
   })  
})

//CalcSum.d.ts : Above is a JS file and we have not much time to re-write this library to TypeScript. But still, if we need to use the doSum() function with type safety
/* declare module TestSum1 {   
   export class Calc {   
      doSum(a:number, b:number) : number;   
   }  
} */

//Main.ts
/// <reference path = "CalcSum.d.ts" />   
//var obj11 = new TestSum.Calc();   
//console.log("Sum: " +obj.doSum(15,25)); 

//Compile above code : tsc main.ts
//Run above code : node main.js

//11.0 Generics - TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types. Generics ensures that the program is flexible as well as scalable in the long term

function identity<T>(arg: T): T {    
    return arg;    
}    
let output1 = identity<string>("myString");    
let output2 = identity<number>( 100 );  
console.log('Generics example 1 : '+output1);  
console.log('Generics example 2 : '+output2);

//11.1 Multi type variables
function displayDataType<T, U>(id:T, name:U): void {   
  console.log("DataType of Id: "+typeof(id) + "\nDataType of Name: "+ typeof(name));    
}  
displayDataType<number, string>(101, "Abhishek")

//11.2 The generic type can also be used with the interface.
interface People {  
    name: string  
    age: number  
}  
interface Celebrity extends People {  
    profession: string  
}  
function printName<T extends Celebrity>(theInput: T): void {  
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);  
}  
let player: Celebrity = {  
    name: 'Rohit Sharma', age: 30, profession: 'Cricket Player'  
}  
printName(player);

//-----------------------------------------------------------

/* 12. Declaration Merging :
In declaration merging compiler merges two seperate declarations declared with the same name into a single defintion. The merged definitions has features of both original declarations. Any number of declarations  can be merged , its not limited to two.

Types of declartions merging :
12.1 Interface Merging
 */
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};

/*
Example 3: in the case of interface A merging with later interface A, the second interface will have a higher precedence than the first.
interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}
Note : three interface merge into single creations
interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
}
*/

/*
12.2 Namespace merging
namespace Emp {
    export class Analyst { }
}

namespace Emp {
    export interface developer { numofDevelopers: number; }
    export class SAnalyst { }
}

namespace Emp {
    export class Analyst { }
    export interface developer { numofDevelopers: number; }
    export class SAnalyst { }
}
*/

/* 13.

*/






