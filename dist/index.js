"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log("The type of x is : " + typeof (x));
function greet(name) {
    return `Hello ${name}!`;
}
function sum(a, b) {
    return a + b;
}
let a = sum(2, 3);
let s = greet("shivam");
console.log(a);
console.log(s);
// problem 2 : return true or false if a use is 18+
function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
// problem 3 : create a fxn that takes another fxn as input and return it after 1 second
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(() => {
    console.log("this is the delayed call");
});
// tsConfig file information : 
// 1)TARGET : specifies the ECMA type version to which typescript compiler will compile the ts code 
// to try it outerHeight, try compiling the following code for target being ES5 and ES2020
// const great = (name: string) => `Hello,${name}`
// 2)ROOTDIR : create a new folder where rootDir is : "./src" where all the ts files will be stored and create the outDir where all the js files created after running npx tsc -b will be stored the compilation ProcessingInstruction
// 3)removeComments : true/false
// 4)noImlicitAny : true indicated if none type is assigned explicitly then value : any will be assigned implicitly
//# sourceMappingURL=index.js.map