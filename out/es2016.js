"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.string.includes");

/* es2016 新功能 */
//Exponentiation Operator
//求幂运算符
console.log("---------- Exponentiation Operator(求幂运算符) -----------");
console.log("2的3次平方，使用Math方法(Math.pow(2,3))：", Math.pow(2, 3));
console.log("2的3次平方，使用求幂运算符2**3)", Math.pow(2, 3));
console.log('--------------------------------', '\n'); //(Array/String).prototype.includes

console.log("---------- (Array/String).prototype.includes -----------");
var originArray = ["test1", "test2"];
var originString = "test1test2";
console.log(`${JSON.stringify(originArray)} includes('test1'): `, originArray.includes("test1"));
console.log(`${JSON.stringify(originString)} includes('test1'): `, originString.includes("test1"));
console.log('--------------------------------', '\n');