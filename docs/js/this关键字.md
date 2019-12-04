# this 关键字学习

## this关键字的值取决于其所处的位置（上下文环境）

1.在全局环境中，this的值指向全局对象（浏览器环境为window，node环境为global）

```javascript
var foo = 'test'
console.log(this.foo)  // test
console.log(window.foo)  // test
```

2.在函数内部，this的取值取决于其所在函数的调用方式，也就是说：this的值是在函数被调用的时候确定的，在创建函数时无法确定。

+ 全局中调用：指向全局对象window/global，foo相当于window.foo在严格模式下有所不同

```javascript
var foo = 'test'
var fn1 = function() {
  console.log(this.foo)
}
fn1()  // test
var fn2 = function() {
  "use strict"
  console.log(this)
}
fn2()  // undefined
```

+ 作为对象的方法属性：指向调用函数的对象，在调用继承的方法也是如此

```javascript
var obj = {
  foo: 'test1',
  fn: function() {
    console.log(this.foo)
  }
}
obj.fn() // test1
```

+ new关键字调用：构造函数只不过是一个函数名称第一个字母大写的普通函数而已，在用new关键字调用时，this指向新创建的对象

```javascript
var Fn = function() {
  this.name = "tian"
  this.age = "21"
}
Fn.prototype.getInfo = function () {
  console.log(this.name)
  console.log(this.age)
  console.log(this === tian)
}
var tian = new Fn()
tian.getInfo() // tian,21,true
```

+ call/apply/bind：call/apply/bind可以修改函数的this指向，bind绑定的this指向将无法被修改

```javascript
var a = 'test'
var foo1 = {
  a: 'test1',
  fn: function() {
    console.log(this.a)
  }
}
var foo2 = {
  a: 'test2'
}
var fn = foo1.fn
fn()  // test
foo1.fn()  // test1
fn.call(foo2)  // test2
```

3.箭头函数是个例外：箭头函数本身不存在this，而在箭头函数中使用this获取到的便是箭头函数所在作用域（上下文）的this

```javascript
var a = 'test'
var foo1 = {
  a: 'test1',
  fn: () => console.log(this.a),
  test: function() {
    this.fn()
  }
}
foo1.fn()  // test
foo1.fn.call(foo1)  // test
```
