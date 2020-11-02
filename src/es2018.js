/* es2018 新功能 */

  //Asynchronous Iterators for JavaScript
    // 异步iterator的next()方法返回一个包含{ value, done }的promise
    /*
      const { value, done } = syncIterator.next();
      asyncIterator.next().then(({ value, done }) => //TODO)
    */

  //for-await-of
    //对异步 iterator 进行遍历
    /*
      async function* asyncGenerator() {
        var i = 0;
        while (i < 3) {
          yield i++;
        }
      }

      (async function() {
        for await (num of asyncGenerator()) {
          console.log(num);
        }
      })();
    */

  //Promise.prototype.finally
    //在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数
    Promise.resolve(0).then(() => {
      console.log("---------- Promise.prototype.finally -----------")
    })
    Promise.resolve(1).finally(() => {
      console.log("Promise.resolve，执行了finally回调");
    })
    Promise.reject(2)
      .then(() => {}, () => {})
      .finally(() => {
        console.log("Promise.reject，执行了finally回调");
      })
    Promise.reject(3)
      .then()
      .catch(() => {
        console.log('--------------------------------', '\n')
      })

  // Unicode property escapes in regular expressions
    //支持根据 Unicode 属性进行匹配,我们可以用它来匹配出表情、标点符号、字母
    //Unicode属性转义是一种新的转义序列，可以在设置了u标志的正则表达式中使用。
    console.log("---------- 正则表达式支持unicode属性 -----------")
    const testStr = '中了 ¥2000 》😂.';
    const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
    //Unicode 属性：p{Sc}(货币符号), p{P}(各种标点符号)
    const regexpSign = /\p{Sc}|\p{P}/gu;
    console.log(`${testStr} 匹配emoji：`, testStr.match(regexpEmojiPresentation));
    console.log(`${testStr} 匹配特殊符号：`, testStr.match(regexpSign));
    console.log('--------------------------------', '\n')

  // RegExp Lookbehind Assertions
    //(?<=...)确保其中包含的模式先于断言之后的模式

  //Object Rest/Spread Properties
    //剩余属性与扩展属性
    console.log("---------- Object Rest/Spread Properties -----------")
    const testObject = {a: 1, b: 2, c: 3}
    const {a, ...rest} = testObject
    console.log(`{a, ...rest}: `, JSON.stringify(rest))
    const spread = {d: 4, f: 5}
    const result = {g: 6, ...spread}
    console.log(`{g:6, ...spread}: `, JSON.stringify(result))
    console.log('--------------------------------', '\n')
  
  //RegExp Named Capture Groups
    //(?<name>...) 编号的捕获组允许引用正则表达式匹配的字符串的某些部分
    console.log("---------- RegExp Named Capture Groups -----------")
    const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
    const reResult = re.exec('2020-11-02');
    console.log(`${re} groups:`, JSON.stringify(reResult));
    console.log('groups.year: ', reResult.groups.year);
    console.log('groups.month: ', reResult.groups.month);
    console.log('groups.day: ', reResult.groups.day);
    console.log('---------------------------------', '\n')

  //s (dotAll) flag for regular expressions
    //使.匹配任何字符
    console.log("---------- 正则表达式s修饰符 -----------")
    const regStr = 'ecmascript\nnew\nfeature'
    const sReg = /ecmascript./s
    console.log(`ecmascript\\nnew\\nfeature 使用s修饰符用.匹配\\n: `, JSON.stringify(regStr.match(sReg)));
    console.log('---------------------------------', '\n')
  
  // Template Literal Revision
    //模板字符串改进（非法转义序列的修订）
    //去除\u或者\x的限制

    console.log("---------- 模板字符串修订 -----------")
    const today = new Date().toLocaleDateString()
    const tempalteStr = `\u4eca\u5929${today} test template str`;
    console.log("\\u4eca\\u5929${today} test template str", String.raw({raw: tempalteStr}));
    console.log('---------------------------------', '\n')
