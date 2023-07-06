// anotation
var num1 = 5;
// inference
var num2 = 5;
// arry and obj
var datas = {
    id: 5,
    name: "ali",
};
var arry = ["ali", "mamad", "soghra", 12];
console.log(arry);
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
console.log(isLogin('admin', 1111));
// any type 
var testAny = 12;
testAny = 'owu';
console.log(testAny);
// literal type 
var testLiteral = 18;
testLiteral = 20;
console.log(testLiteral);
