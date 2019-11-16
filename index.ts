// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('demo1');
appDiv.innerHTML = `<h1>Welcome to TypeScript !</h1>`;

//Basic types In typescript
//boolean
let isDone: boolean = false;

//number, All numbers in typescript are floating point values
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;