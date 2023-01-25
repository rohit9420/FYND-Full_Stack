// Hoisting refers to the process whereby the interpreter appears to move the decleration to the top of the code before execution
//Hoisting is only possible for declare variable , function or class NOT for initialize var, fun and class




console.log(a)
show()
function show(){
    console.log("Hello");
}

// let a;   //OP--> ReferenceError: Cannot access 'a' before initialization
// a=10;   //OP--> ReferenceError: a is not defined
var a;
// var a;   //OP--> undefine
// const a=1;  //OP--> ReferenceError: Cannot access 'a' before initialization
console.log(a);







