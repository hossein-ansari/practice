// anotation
const num1: number = 5;
// inference
const num = 5;
let num3 = 5;
// arry and obj
let datas: { id: number; name: string } = {
  id: 5,
  name: "ali",
};
let arry: (string | number)[] = ["ali", "mamad", "soghra", 12];
// console.log(arry);
// console.log(num3)
// tuple
let arry2: [string, number] = ["mike", 2];
// functions assign value
function isLogin(user: String, password: number):boolean {
  if (user === 'admin' && password === 1111) {
    return true
  }
  else{
    return false
  }
}
// console.log(isLogin('admin',1111))
// any type 
let testAny:any = 12
testAny = 'owu'
// console.log(testAny)
// literal type 
let testLiteral: (18|19|20)=18
testLiteral = 20
// console.log(testLiteral)
// 'unknown' is like 'any' type but 'any' dont have type checking
// type casting 
let typeCasted = 12 as const
let typeCasted2 = <const>12
let btn = document.querySelector('button') as HTMLButtonElement
// let btn = document.querySelector('button')!   another way
// let btn = < HTMLButtonElement>document.querySelector('button')   another way
// console.log((<HTMLButtonElement>btn).innerHTML) another way
// Void property 
const testVoid = (num1:number,num2:number):void =>{
  const result = num1+ num2
  console.log(result)
}
// testVoid(2,3)
// function type 
const testType = (num1:number,num2:number, callBack:(result:number)=>void): void =>{
  const result = num1+ num2
  callBack(result)
}
testType(6,3,number)

function number(result:number) {
  console.log(result)
}
// type never 
function throwError(message: string): never {
  throw new Error(message);
}/