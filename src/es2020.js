/* es2020 新功能 */

// import.meta
  //通过 import.meta 对象访问模块的相关 meta 信息
  //返回一个包含 url 属性的对象

// ?? 空值合并
  console.log("----------?? 空值合并-----------")
  console.log("false ?? 'test1': ", false ?? 'test1')
  console.log("null ?? 'test2': ", null ?? 'test2')
  console.log("NaN ?? 'test3': ", NaN ?? 'test3');
  console.log('--------------------------------', '\n');

// ?. 可选链
  console.log("----------?. 可选链-----------")
  const obj = {
    test1: {
      log: () => '测试1'
    },
    test2: null
  }
  console.log("obj?.test1?.log(): ", obj?.test1?.log());
  console.log("obj?.test2 && console.log('测试2')：", obj?.test2 && console.log('测试2'));
  console.log("obj?.test3：", obj?.test3);
  console.log('--------------------------------', '\n');

// for in 指定for-in枚举顺序

// globalThis 
  // 不同平台全局对象也不同，浏览器中是 window，Node 中是 global，web workers 中是 self。如果，还有更多的运行环境，这个对象也会有不同
  // globalThis 对象，它始终会引用着全局对象，而不用关系代码在哪运行
  console.log("node env (this):", this);
  console.log("global === globalThis: ", global === globalThis);
  console.log('--------------------------------', '\n');

// BigInt 
  //在JS中可以使用更大的整数进行数据处理
  console.log("----------BigInt-----------")
  const maxNumber = Number.MAX_SAFE_INTEGER + 1;
  console.log("Number max , pow(2,53)-1: ", maxNumber);
  console.log('MaxNumber + 1: ', maxNumber + 1);
  console.log("BigInt: (MaxNumber + 1): ", BigInt(maxNumber + 1));
  console.log('--------------------------------', '\n');

// import()
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
  console.log("----------matchAll-----------")
  const reg = /[a-z]/g
  const str = 'abc'
  const iterator = str.matchAll(reg)
  console.log("abc,matchAll: ");
  Array.from(iterator, item => console.log(item))
  console.log('--------------------------------', '\n');

// Promise.allSettled
  //接收一组 Promise，并且会返回所有的结果,而不管是 resolved 还是 rejected
  console.log("----------Promise.allSettled-----------")
  const promiseArray = [
    Promise.resolve('测试1'),
    Promise.reject('测试2'),
    Promise.reject(new Error('error')),
  ]
  Promise.allSettled(promiseArray).then((result) => {
    console.log("all Promise: ", result);
  })
  console.log('--------------------------------', '\n');