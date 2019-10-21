# 使用Set提高代码性能

## Set有何不同

+ 数组是一个索引集合，这说明数组中的数据值按索引排序。

```javascript
const arr [a,b,c,d]
console.log(arr.indexOf(a))  //0
console.log(arr.indexOf(c))  //2
```

+ set是一个键的集合。set不使用索引，而是使用键对数据排序。

+ set中的元素按插入顺序是可迭代的，它不能包含任何重复的数据。换句话说，set中的每一项都必须是惟一的。

## 使用Set的主要好处是什么

set相对于数组有几个优势，特别是在运行时间方面：

+ 查看元素：使用`indexOf()`或`includes()`检查数组中的项是否存在是比较慢的。

+ 删除元素:在Set中，可以根据每项的的`value`来删除该项。在数组中，等价的方法是使用基于元素的索引的`splice()`。与前一点一样，依赖于索引的速度很慢。

+ 保存NaN：不能使用`indexOf()`或`includes()`来查找值`NaN`，而Set可以保存此值。

+ 删除重复项: Set对象只存储惟一的值,如果不想有重复项存在，相对于数组的一个显著优势，因为数组需要额外的代码来处理重复。

## 时间复杂度

+ 数组用来搜索元素的方法时间复杂度为`0(N)`。这意味着运行时间的增长速度与数据大小的增长速度相同。

+ Set用于搜索、删除和插入元素的方法的时间复杂度都只有`O(1)`，这意味着运行时间与数据的大小无关。

## Set究竟有多快

数组和Set对于方法执行的时间可能会有很大的差异，具体时间还受限于所使用的系统，所提供的数据大小及其他变量。为了更直观的看到Set的速度，我们通过实例测试直观看结果：
**初始化数组和set**
在运行任何测试之前，创建一个数组和一个Set，每个数组和Set都有100万个元素。

```javascript
let arr = [], set = new Set() ,n = 1000000
for (let i = 0; i < n; i++) {
  arr.push(i)
  set.add(i)
}
```

**test1:查找元素**
在查找元素方法执行过程中的性能比较

```javascript
let result
console.time('Array')
result = arr.indexOf(6666666) !== -1
console.timeEnd('Array')
console.time('Set')
result = set.has(6666666)
console.timeEnd('Set')
```

![set提高代码性能执行结果-查找元素执行结果](/图片/set提高代码性能执行结果-查找元素执行结果.png)

**test2:添加元素**
在添加元素方法执行中，也是有时间差异的

```javascript
console.time('Array')
arr.push(n)
console.timeEnd('Array')
console.time('Set')
set.add(n)
console.timeEnd('Set')
```

![set提高代码性能执行结果-添加元素执行结果](/图片/set提高代码性能执行结果-添加元素执行结果.png)

**test3:删除元素**
最后，删除一个元素，由于数组没有内置方法，首先先创建一个辅助函数：

```javascript
const deleteFromArr = (arr, item) => {
  let index = arr.indexOf(item)
  return index !== -1 && arr.splice(index, 1)
}

console.time('Array')
deleteFromArr(arr, n)
console.timeEnd('Array')
console.time('Set')
set.delete(n)
console.timeEnd('Set')
```

![set提高代码性能执行结果-删除元素执行结果](/图片/set提高代码性能执行结果-删除元素执行结果.png)

## 案例学习

+ 从数组中删除重复的值

```javascript
const duplicateArray = ['a', 'b', 'c', 'd', 'a', 'a', 'v', 'b', 'b', 'd', 'd']
//将数组转换为Set
let uniqueArray = new Set(duplicateArray)
console.log(uniqueArray)  // Set(4) {'a', 'b', 'c', 'd', 'v'}
let uniqueArray = [...new Set(duplicateArray)]
console.log(uniqueArray)  // ['a', 'b', 'c', 'd', 'v']
```

+ 谷歌面试题

给定一个整数无序数组和变量sum，如果存在数组中任意两项和使等于sum的值，则返回true。否则,返回 false。例如，数组 [3,5,1,4]和sum=9，函数应该返回 true，因为4+5=9。
解决方法：
当我们遇到3时，我们可以把6加到Set中, 因为我们知道我们需要找到9的和。然后，每当我们接触到数组中的新值时，我们可以检查它是否在Set中。当遇到5时，在Set 加上4。最后，当我们最终遇到4时，可以在Set中找到它，就返回 true。

```javascript
//复杂实现版
const judgeSum = (arr, val) => {
  let searchValues = new Set()
  serachValues.add(val - arr[0])
  for (let i = 0;i < arr.length; i++) {
    let searchValue = val - arr[i]
    if (searchValues.has(arr[i])) {
      return true
    } else {
      searchValues.add(searchValue)
    }
    return false
  }
}
//简洁版
const judgeSum = (arr, sum) =>
  arr.some((set => n => set.has(n) || !set.add(sum-n))(new Set))

//=>理解
var judgeSum = function judgeSum(arr, sum) {
  return arr.some(function (set) {
    return function (n) {
      return set.has(n) || !set.add(sum - n)
    }
  }(new Set()))
}
```

因为Set.prototype.has()的时间复杂度仅为 O(1)，所以使用Set来代替数组，最终使整个解决方案的线性运行时为O(N)。
如果使用Array.prototype.indexOf()或Array.prototype.includes()，它们的时间复杂度都为O(N)，则总运行时间将为 O(N²)，慢得多！
