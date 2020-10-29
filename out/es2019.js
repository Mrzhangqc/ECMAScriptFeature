"use strict";

require("core-js/modules/es.array.flat");

require("core-js/modules/es.array.flat-map");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.unscopables.flat");

require("core-js/modules/es.array.unscopables.flat-map");

require("core-js/modules/es.object.from-entries");

require("core-js/modules/es.string.split");

require("core-js/modules/es.string.trim");

require("core-js/modules/es.string.trim-end");

require("core-js/modules/es.string.trim-start");

/* es2019 新功能 */
//Array.prototype.{flat,flatMap}
//数组扁平化
//flat按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
//flatMap 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组
console.log("---------- flat -----------");
var testArray1 = [1, 2, [3, 4]];
var testArray2 = [1, [2, 3, [4, 5], [6]], [7, 8]];
console.log(`${JSON.stringify(testArray1)} flat:`, testArray1.flat());
console.log(`${JSON.stringify(testArray2)} flat:`, testArray2.flat());
console.log(`${JSON.stringify(testArray2)} flat(3):`, testArray2.flat(3));
console.log("---------- flatMap -----------");
var testArray3 = ["a-b", "c-d", "e-f"];
console.log(`${JSON.stringify(testArray3)} flatMap():`, testArray3.flatMap(function (item) {
  return item.split("-");
}));
console.log('--------------------------------', '\n'); //String.prototype.{trimStart-trimLeft,trimEnd-trimRight}
//字符串首尾去空格

console.log("---------- trim,trimStart,trimEnd -----------");
var str1 = " abc def ";
console.log(`str(${str1})trim     :-`, str1.trim(), "-");
console.log(`str(${str1})trimStart:-`, str1.trimStart(), "-");
console.log(`str(${str1})trimEnd  :-`, str1.trimEnd(), "-");
console.log('--------------------------------', '\n'); //Well-formed JSON.stringify
//修复了一些unicode字符显示的问题
//Object.fromEntries
//将键值对列表转换为一个对象

console.log("---------- Object.fromEntries -----------");
var testObject = [["test1", 1], ["test2", 2]];
console.log(`${JSON.stringify(testObject)}-fromEntries: `, Object.fromEntries(testObject));
console.log('--------------------------------', '\n'); //Function.prototype.toString (revision)
//修正：现在返回精确字符，包括空格和注释
//JSON superset
//扩展： 支持了所有的json文本，同样允许未转义的换行符的存在
//Optional catch binding
//允许在不使用绑定的情况下省略捕获绑定
//允许省略捕获绑定及其周围的括号

/*
  try {
    // ...
  } catch {
    // ...
  }
*/