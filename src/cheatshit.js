// anotation
var num1 = 5;
// inference
var num = 5;
var num3 = 5;
// arry and obj
var datas = {
    id: 5,
    name: "ali",
};
var arry = ["ali", "mamad", "soghra", 12];
// console.log(arry);
// console.log(num3)
// tuple
var arry2 = ["mike", 2];
// functions assign value
function isLogin(user, password) {
    if (user === 'admin' && password === 1111) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isLogin('admin',1111))
// any type 
var testAny = 12;
testAny = 'owu';
// console.log(testAny)
// literal type 
var testLiteral = 18;
testLiteral = 20;
// console.log(testLiteral)
// 'unknown' is like 'any' type but 'any' dont have type checking
// type casting 
var typeCasted = 12;
var typeCasted2 = 12;
var btn = document.querySelector('button');
// let btn = document.querySelector('button')!   another way
// let btn = < HTMLButtonElement>document.querySelector('button')   another way
// console.log((<HTMLButtonElement>btn).innerHTML) another way
// Void property 
var testVoid = function (num1, num2) {
    var result = num1 + num2;
    console.log(result);
};
// testVoid(2,3)
// function type 
var testType = function (num1, num2, callBack) {
    var result = num1 + num2;
    callBack(result);
};
testType(6, 3, number);
function number(result) {
    console.log(result);
}
