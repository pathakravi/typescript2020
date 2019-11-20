TypeScript Topics :

1. What is typescript ?
2. Understanding and installing compiler.
3. Editor choices
4. Installing and configuring VS Code.
5. Using tsc command line arguments.
6. Applying source maps.
7. Referencing other typescript files.
--------------------------------------------------

1. TypeScript is an Open Source Project Maintained by Microsoft.
  It Transpile to a configurable JavaScript version.
  Its uses ES6 syntax.
  It adds types to a variable, so as refered as typescript.
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

--------------------------------------------------
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

