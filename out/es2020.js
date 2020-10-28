"use strict";

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.dom-collections.iterator");

var _false, _ref, _obj$test;

/* es2020 新功能 */
// import.meta
//通过 import.meta 对象访问模块的相关 meta 信息
//返回一个包含 url 属性的对象
// ?? 空值合并
console.log("----------?? 空值合并-----------");
console.log("false ?? 'test1': ", (_false = false) !== null && _false !== void 0 ? _false : 'test1');
console.log("null ?? 'test2': ", (_ref = null) !== null && _ref !== void 0 ? _ref : 'test2');
console.log("NaN ?? 'test3': ", NaN !== null && NaN !== void 0 ? NaN : 'test3');
console.log('--------------------------------', '\n'); // ?. 可选链

console.log("----------?. 可选链-----------");
var obj = {
  test1: {
    log: function log() {
      return '测试1';
    }
  },
  test2: null
};
console.log("obj?.test1?.log(): ", obj === null || obj === void 0 ? void 0 : (_obj$test = obj.test1) === null || _obj$test === void 0 ? void 0 : _obj$test.log());
console.log("obj?.test2 && console.log('测试2')：", (obj === null || obj === void 0 ? void 0 : obj.test2) && console.log('测试2'));
console.log("obj?.test3：", obj === null || obj === void 0 ? void 0 : obj.test3);
console.log('--------------------------------', '\n'); // for in 指定for-in枚举顺序
// globalThis 
// 不同平台全局对象也不同，浏览器中是 window，Node 中是 global，web workers 中是 self。如果，还有更多的运行环境，这个对象也会有不同
// globalThis 对象，它始终会引用着全局对象，而不用关系代码在哪运行

console.log("node env (this):", void 0);
console.log("global === globalThis: ", global === globalThis);
console.log('--------------------------------', '\n'); // BigInt 
//在JS中可以使用更大的整数进行数据处理

console.log("----------BigInt-----------");
var maxNumber = Number.MAX_SAFE_INTEGER + 1;
console.log("Number max , pow(2,53)-1: ", maxNumber);
console.log('MaxNumber + 1: ', maxNumber + 1);
console.log("BigInt: (MaxNumber + 1): ", BigInt(maxNumber + 1));
console.log('--------------------------------', '\n'); // import()
// 动态引入

/*const mathClac = async (fnType) => {
  let mathFn;
  if(fnType === 'add') {
    mathFn = await import('./add.js');
  } else if(fnType === 'sub') {
    mathFn = await import('./sub.js');
  }
  return mathFn
}*/
// String.prototype.matchAll
// 返回一个迭代器，一个接一个的返回所有匹配的组

console.log("----------matchAll-----------");
var reg = /[a-z]/g;
var str = 'abc';
var iterator = str.matchAll(reg);
console.log("abc,matchAll: ");
Array.from(iterator, function (item) {
  return console.log(item);
});
console.log('--------------------------------', '\n'); // Promise.allSettled
//接收一组 Promise，并且会返回所有的结果,而不管是 resolved 还是 rejected

console.log("----------Promise.allSettled-----------");
var promiseArray = [Promise.resolve('测试1'), Promise.reject('测试2'), Promise.reject(new Error('error'))];
Promise.allSettled(promiseArray).then(function (result) {
  console.log("all Promise: ", result);
});
console.log('--------------------------------', '\n');