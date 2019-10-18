# 深入javascript变量

## 1.内置类型

+ 空值(null)
+ 未定义(undefined)
+ 布尔值(boolean)
+ 数字(number)
+ 字符串(string)
+ 对象(object)
+ 符号(symbol,ES6中新增)

>除对象外，其他统称为“基本类型”

```javascript
//null类型比较特殊，typeof对他的处理存在问题，返回值是object
console.log(typeof null)  //obejct
console.log(typeof undefined)  //undefined
console.log(typeof true)  //boolean
console.log(typeof 42)  //number
console.log(typeof "42")  //string
console.log(typeof { name: tian })  //object
//ES6中新加入的类型
console.log(typeof Symbol())  //symbol
//object的子类型（函数是可调用对象）
console.log(typeof function a(){/* ... */})  //function
//object的子类型
```

## 2.值和类型

+ javascript中的变量是没有类型的，只有值才有
+ javascript中的变量可以随时被赋予(持有)任何类型的值
+ javascript是一门“弱类型”语言，不做“类型强制”
+ 浏览器js引擎不要求变量总是持有与初始值同类型的值

2.1 undefined和undeclared

+ 变量在作用域中声明但未被赋值的时候为undefined。此时`typeof`返回`undefined`

+ 变量在作用域中未声明过的时候为undeclared。但是`typeof`返回`undefined`

+ typeof的安全防范机制：通过typeof ??? !== "undefined"判断变量是否持有值

+ 不同过typeof的安全防范机制的办法：检查所有全局变量是否是全局对象的属性，浏览器的全局对象是window，通过window.???/window.???判断

## 3.数组

+ 和其他的强类型的语言相比，在javascript中，数组可以容纳任何类型的值，可以是字符串、数字、对象，甚至是其他数组(多维数组)

+ 对数组声明后即可向其中加入值，不需要预先设置大小。

+ 数组通过数字进行索引，但有趣的是他们也是对象，所以也可以包含字符串键值和属性(但是这些并不计算在数组长度内)

```javascript
  var a = []
  a[0] = 1
  a["tian"] = 2

  a.length  //1
  a["tian"]  //2
  a.tian  //2
```

+ 如果字符串键值能被强制转换为十进制数字的化，他就会被当作数字索引来处理

```javascript
  var a = []

  a["13"] = 2

  a.length  //14
```

+ 类数组：一组通过数字索引的值

```javascript
  function foo () {
    var array = Array.prototype.slice.call(arguments)
    //或者用ES6中的工具函数
    //var array = Array.from(arguments)
    array.push("tian")
    console.log(array)
  }

  foo("cui", "wang")  //["cui", "wang", "tian"]
```

## 4.字符串

+ 字符串和数组很相似，它们都是类数组，都有length属性和indexOf(...)和concat(...)方法

```javascript
  var a = "foo"
  var b = ["f", "o", "o"]

  a.length  //3
  b.length  //3

  a.indexOf("o")  //1
  b.indexOf("o")  //1

  var c = a.concat("bar")  //foobar
  var d = b.concat(["b", "a", "r"])  //["f", "o", "o", "b", "a", "r"]
```

+ 字符串不可变是指字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符串。而数组的成员函数实在其原始值上操作的。

```javascript
  c = a.toUpperCase()
  a === c  //false
  console.log(a)  //'foo'
  console.log(c)  //'FOO'

  b.push("1")
  console.log(b)  //["f", "o", "o", "1"]
```

+ 许多数组函数用来处理字符串很方便，虽然字符串没有这些函数，但可以通过“借用”数组的非变更方法来处理字符串：

```javascript
  a.join  //undefined
  a.map  //undefined
  var c = Array.prototype.join.call(a, "-")
  var d = Array.prototype.map.call(a, function(v){
    return  v.toUpperCase() + "."
  })
  console.log(c)  //"f-o-o"
  console.log(d)  //"F.O.O"
```

## 5.数字

+ javascript只有一种数值类型：number，包括“整数”和带小数的十进制数。javascript中的“整数”就是没有小数的十进制数。所以42.0相当于42

+ 数字的语法
  + javascript中的数字字面量一般用十进制表示。例如:

  ```javascript
    var a = 42
    var b = 42.4
  ```

  + 小数点前面的0可以省略

  ```javascript
    var a = 0.42
    var b = .42
  ```

  + 小数点后小数部分最后的0可以省略

  ```javascript
    var a = 42.0
    var b = 42.
  ```

  + 特别大和特别小的数字默认用指数格式显示，与toExponential()函数的输出结果相同

  ```javascript
    var a = 5E10
    console.log(a)  //50000000000
    a.toExponential()  //"5e+10"
    var b = a * a
    b  //2.5+21
    var c = 1 / a  //2e-11
  ```

  + 数字字面量还可以用其他格式来表示，如二进制、八进制和十六进制

  ```javascript
    0xf3  //243的十六进制
    0Xf3  //同上
    0363  //243的八进制
  ```

  >从ES6开始，严格模式（strict mode）不再支持0363八进制格式（新格式如下）。0363格式在非严格模式（non-strict mode）中仍然受支持，但考虑将来的兼容性，最好不要再使用。

  ```javascript
    0o363  //243的八进制
    0O363  //同上
    0b11110011  //243的二进制
    0B11110011  //同上
  ```

  + 二进制浮点数最大的问题，是会出现如下情况：

  ```javascript
    0.1 + 0.2 === 0.3
  ```

  从数学角度来说，上面的条件判断应该为true，可结果为什么是false？
  简单来说，二进制浮点数中的0.1和0.2并不是十分精准，他们相加的结果并非刚好等于0.3，而是一个比较接近的数字0.30000000000000004，所以判断为false。
  解决的办法，设置一个误差范围，通常成为“机器精度”，对javascript的数字来说，这个值通常为2^-52
  >从ES6开始，这个值定义在Number.EPSILON，可以直接拿来用。

  + 最大浮点数大约是1.798e+308，定义在Number.MAX_VALUE

  + 最小浮点数大约是5e-324，定义在Number.MIN_VALEUE

  + 能够被“安全”呈现的最大整数是2^53 -1，即9007199254740991；在ES6中定义为：Number.MAX_SATE_VALUE

  + 能够被“安全”呈现的最小整数是-9007199254740991；在ES6中定义为：Number.MIN_SATE_VALUE

  + ES6整数检测: Number.isInteger(...)

  + ES6安全整数检测: Number.isSafeInteger(...)

  + 32位有符号整数：a | 0可以将a转换为32位有符号整数，因为|数位运算符只适用于32位整数（它只关心32位以内的值，其他的数位将会被忽略）

## 6.特殊数值

+ 不是值的值
  + undefined：既是类型又是值，且是该类型唯一的值；null： 即是类型又是值，且是该类型唯一的值
  + undefined和null常被用来表示“空的”值或“不是值”的值。但二者也有细微的差别
  + null指空值；undefined指没有值
  + null指曾被赋过值，但是目前没有值；undefined表示从未被赋值
  + undefined是一个内置标识符（除非被重新定义），它的值为undefined，可以通过void运算符获取到该值

  ```javascript
    var a = 43
    console.log(void a, a)  //undefined 43

    function test () {...}
    console.log(void test())  //undefined
  ```

+ 特殊的数字
  + NaN：指“不是一个数字”（not a number），将它理解为“无效数值”或“失败数值”或“坏数值”肯能更好理解
  >如果数学运算符的操作数不是数字类型（或者无法解析为常规的十进制或十六进制数字），就无法返回一个有效的数字，这种情况下返回值为NaN

  ```javascript
    var a = 2 / "foo"  //NaN
    typeof a === Number  //true
  ```

  + NaN是一个特殊值，它和自身不相等，是唯一一个自反值。而NaN != NaN 为true
  >自反，reflexive，即x === x不成立

  + 无穷数：Infinity和-Infinity

  ```javascript
    var a = 1 / 0  //Infinity
    var b = -1 / 0  //-Infinity
  ```

  + 零值：javascript有一个常规的0（也叫作+0）和一个-0。-0除了可以用作常量以外，也可以是某些数学运算符的返回值。例如：

  ```javascript
    var a = -0 / 3  //-0
    var b = -0 * 3  //-0
  ```

  + 加法和减法运算不会得到负零

## 7.值和引用
