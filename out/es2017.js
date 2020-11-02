"use strict";

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.values");

require("core-js/modules/es.string.pad-end");

require("core-js/modules/es.string.pad-start");

/* es2017 新功能 */
//Shared memory and atomics
//共享内存和原子也称为共享阵列缓冲区，它是更高级的并发抽象的基本构建块。
//它允许在多个工作者和主线程之间共享SharedArrayBuffer对象的字节（缓冲区是共享的，用以访问字节，将其包装在类型化的数组中）
//Async functions
//异步函数 async
console.log("---------- 异步函数 -----------");
var asyncFnString = `
    async function test () {
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 0)
      })
    }
    const result = await test()
    console.log(result)
  `;
console.log(asyncFnString);
console.log('--------------------------------', '\n'); //Trailing commas in function parameter lists and calls
//允许在函数参数列表后加逗号

console.log("---------- 函数参数列表后加逗号 -----------");
var fnParamCommas = `
    function test (param1, param2, ) {
      //doSomething
    }
  `;
console.log(fnParamCommas);
console.log('--------------------------------', '\n'); //Object.getOwnPropertyDescriptors
//返回一个对象，所有原对象的属性名都是该对象的属性名，对应的属性值就是该属性描述对象
//主要是为了解决 Object.assign() 无法正确拷贝 get 属性和 set 属性的问题

console.log("---------- Object.getOwnPropertyDescriptors -----------");
var obj = {
  do: function _do() {
    return 1;
  },
  test: 2,

  get value() {
    return 3;
  }

};
console.log(`${JSON.stringify(obj)} getOwnPropertyDescriptors: `, Object.getOwnPropertyDescriptors(obj));
console.log('--------------------------------', '\n'); //String padding(padStart/padEnd)
//字符串补全

console.log("---------- String padding(padStart/padEnd) -----------");
var originStr = "123456";
var padLen = 2;
var targetLength = originStr.length + padLen;
var resultPadStart = originStr.padStart(targetLength, "0");
var resultPadEnd = originStr.padEnd(targetLength, "0");
console.log(`${originStr}字符串前加0: `, resultPadStart);
console.log(`${originStr}字符串前加0: `, resultPadEnd);
console.log('--------------------------------', '\n'); //Object.values / Object.entries
//对象方法

console.log("---------- Object.values / Object.entries -----------");
var originObj = {
  test1: 1,
  test2: 2
};
console.log(`${JSON.stringify(originObj)} values: `, JSON.stringify(Object.values(originObj)));
console.log(`${JSON.stringify(originObj)} entries: `, JSON.stringify(Object.entries(originObj)));
console.log('--------------------------------', '\n');