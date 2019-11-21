1. Typescript : 
  TypeScript is an open-source pure object-oriented programing language Maintained by Microsoft.
  It Transpile to a configurable JavaScript version.
  Its uses ES6 syntax.
  It adds types to a variable, so as refered as typescript.
  It is a strongly typed superset of JavaScript which compiles to plain JavaScript.

  Note:
  TypeScript cannot run directly on the browser. It needs a compiler to compile the file and generate it in JavaScript file, which can run directly on the browser. The TypeScript source file is in ".ts" extension. We can use any valid ".js" file by renaming it to ".ts" file. TypeScript uses TSC (TypeScript Compiler) compiler, which convert Typescript code (.ts file) to JavaScript (.js file).
  
2. Beenefits :
  Mistakes are dedected at up front.
  Autocomplete itself using intellisense.
  Its saves lot of time from endless type checking.
3. Compiler of typescript is called as tsc. This compiler is implemented cross platform. It can run on Mac, Windows or linux.
4. Download nodejs.org
5. npm i -g typescript
6. Editors :
  Visual Studio Code
  Visual Studio 
  Sublime Text
  Atom 
  Webstorm
7. Download and install from http://code.visualstudiocode.com.

--------------------------------------------------------
tsconfig.json

1. tsconfig.json - is the root of typescript project.
It provides an options for compiler to compile the typescript project.
{
    "compilerOptions": {
        "module": "system",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "outFile": "../../built/local/tsc.js",
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ],
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
    ]
}

* matches zero or more characters

---------------------------------------------------------------

4.0 namespaces: are previously refered as internal node_modules


