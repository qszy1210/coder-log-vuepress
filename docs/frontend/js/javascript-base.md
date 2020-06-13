---
title: javascript基本功
date: 2020-06-12
tags: javascript base
---


# javascript 基本功

## 手动模拟实现一个new

> 原文时间: 2019-10-12 10:56:33

思想:

new的主要步骤如下:

1. 创建一个新的 object
2. 将本方法中的内容 apply 到新对象上
3. 返回结果不是 object, 那么返回新创建的 object

我当初的写法

```js

function newObj(fn, ...args) {
    const newObj = {};
    const retResult = fn.apply(newObj, args);
    if (retResult !== null && typeof retResult === 'object') {
        return retResult;
    }
    return newObj;
}

```

进行了稍微的改进

```js
function newF(fn) {
    var obj = Object.create(null);
    var args = arguments.slice(1);
    var ret = fn.apply(obj, args);
    return typeof ret === 'object' ? ret : obj;
}
```

## js隐士转换

> 原文时间 2018-08-04 18:13:10

### 一个有趣的js隐士转换的问题

在chrome的控制台中打印一下表达式

```js
[] + {} //结果为 [object object]
```

然后调整顺序打印

```js
{} + [] //结果为 0
```

然后将两个表达式组合一下

```js
{} + [] === [] + {} //true
```

wtf???

原理解释如下:
一般的类型转换的时候,面对 +, 首先调用 `valueOf` (Date类型除外),如果转换的类型不是基本类型, 那么调用 `toString` 方法进行转换
> 但是 ({}).valueOf() 和 ([]).valueOf()  都是自身, 自然都不是基本类型, 所以如果不是复写的情况下, 默认都是 `toString` 方法的结果

所以 `[] + {}` 即为 `[object Object]`

由于 chrome 中 将 `{}` 默认解析为一个空表达式,
所以 `{} + []` 为 `''`

但是当两个在一起进行比较的时候, 会认为两边的都是一个完整的表达式, 所以

`[] + {} == {} + []`  即 `[object Object] == [object Object]` 返回结果为 `true`

> 说一句题外话, 笔者作为面试官的时候偶尔会问几个简单的隐士转换问题, 倒不至于这么变态, 但是这个样子反而遭到很多应聘者的抵触, 认为对于实际工作没有用. 但恰恰是这些基本原来组成了 js, 了解这其中的工作原来对于排查问题, 理解js的工作机制是非常有用的. 如果是招聘高级的前端, 对于这个问题仍然生疏, 那么就直接 pass 了.

## 再说js隐士转换
> 原文时间 2019-04-16

整理了一下规则

自己整理的一个整体规则如下:

Date 默认 走 toString, 如果 toString 返回的是对象, 那么查看 valueOf
其他对象的转换, 默认走 valueOf, 但是如果 valueOf 返回的是对象, 那么尝试 toString

 ```js
 //比如示例如下:
 //默认的对象隐式转换是走 valueOf
    var o1 = {
        valueOf: function(){
            return 1;
        },
        toString: function(){
            return 9;
        }
    }

    console.log(o1 == 1); // true

 ```

```js

 //Date 默认走 toString
 //比如 new Date("1970/01/02")

new Date("1970/01/02").toString() == "Fri Jan 02 1970 00:00:00 GMT+0800 (中国标准时间)"; //true, 默认的 toString 的内容

new Date("1970/01/02") == "Fri Jan 02 1970 00:00:00 GMT+0800 (中国标准时间)"; //true, 默认的 toString 的内容

new Date("1970/01/02").valueOf() == 57600000 // getTime的内容

```

## 闭包

> 原文标题: 看一个闭包的小问题
> 原文时间: 2019-04-17

```js
var test = (function (){
    var number = 4;
return function(){
    number *= 2;
    console.log(number);
    }
})()

test();//8
test();//16
test();//32

```

另一个对比的方法

```js
var test = function (){
    var number = 4;
return function(){
    number *= 2;
    console.log(number);
    }
}

test()();//8
test()();//8
test()();//8
```

结论: 可以看出这两个地方的区别. 如果形成了闭包, 在外部是可以进行闭包内部的更改的.
但是如果是已经结束返回的, 虽然也算闭包(test()()), 但是已经是一个独立的区域.

可以说第一种情况, 是大家共用了闭包的变量(number), 但第二个则是独立的.(如果这么理解的话)

### 补充一个闭包小题目

```js
function foo() {
    var name = 'qqq';
    var fzz = function(){
        console.log(name);
    }
    setTimeout(fzz);
}
```

这个输出为 qqq

```js
var fzz = function(){
        console.log(name);
    }
function foo() {
    var name = 'qqq';
    setTimeout(fzz);
}

这个输出为 undefined
```

在后边的介绍词法作用域中会介绍为什么如此.

## javascript 优先级
> title: javascript优先级注意点
> date:  2019-05-06

注意一下 && 和 == 号之间的优先级关系

请首先看如下代码, 判断下 && 和 == 的优先级

```javascript
const emptyObj = {name: "kylin"};
if (emptyObj && emptyObj.name === "kylin") {
    console.log("my name is kylin");
}
```

首先说明
** == 的优先级是高于 && 的 **

>  可能大家自己逻辑判断的时候, 其实是想判断下 emptyObj 是非空, 然后再比较 emptyObj.name 与 keylin 的关系, 但这里的执行顺序就有了问题

如果

```js
const emptyObj = null;
if (emptyObj && emptyObj.name === "kylin") { //Uncaught ReferenceError: empty is not defined
    console.log("my name is kylin");
}

```

fix: (需要添加括号修正优先级)

```js
const emptyObj = null;
if ((emptyObj && emptyObj.name) === "kylin") { //Uncaught ReferenceError: empty is not defined
    console.log("my name is kylin");
}

```

## js 事件循环机制

> title: js 队列
> date:  2019-04-20

js都是靠事件驱动的, js中的事件循环机制是什么呢?

> 只是简单写一下自己的理解, 所以不是很全面;

js 程序执行有 主队列 以及 异步队列两种方式

栈中是按照顺序进行执行, 对于一段代码的解释, 按照不同的类型进行解释,
入栈, 然后按照栈的顺序(后进先出)依次进行执行

主队列, 即从上到下的方式依次进行执行

异步队列主要包括macroTask 和 macroTask

1. macroTask, 主要包括 setTimeout setInterval IO UIRendering(只列举常用的)

2. microTask , 主要包括 Promise process Object.observe

**主线程执行完成后, 会首先查看 microTask 队列中是否有, 执行完成后, 再执行 macroTask, 然后再执行 microTask**

例如如下我的测试代码

```js
console.log("1")
setTimeout(function () {
    console.log("2")
})
Promise.resolve().then(function () {
    console.log("3")
    setTimeout(function () {
        console.log("31")
        setTimeout(function () {
            console.log("311")
        })
        Promise.resolve().then(function () {
            console.log("3111")
        })
    })
}).then(function () {
    console.log("4")
})
setTimeout(function () {
    console.log("5")
    Promise.resolve().then(function () {
        console.log("51")
    })
})
console.log("11")

//输出如下: 1 11 3 4 2 5 51 31 3111 311
//macro [2, 5]  [31]
//micro [3, 4]  [51]
```
需要注意的地方:

microTask会阻碍页面的 render, render 是属于 macroTask;

所以如果有 microTask 一直循环执行的话, 会阻碍 ui 的 render;

但是 setTimeout 不会;

另外要注意 rAF(requestAnimationFrame) 的使用, 这个是用来专门进行渲染使用的, 执行速度会比 setTimeout 快很多.

增加一下对前边的解析:

将任务分为3部分, 主栈 arr1, micro: arr2, macro: arr3

1. 第一次执行
 arr1: 有 1, 11,
 arr2: 3, => 4
 arr3 中增加 2, 5

执行为: 1,11,3,4,2,5
2. 第二次执行(查看前边的 arr2 和 arr3 中增加的队列)
 在 arr2 中 3, 4, 后边的有
 arr3: 31
 arr3 中 2,5, 后边的有
 arr2: 51
执行为: 51, 31
3. 第三轮
 arr2中51后边没有
 arr3 中 31 后边有
 arr2: 3111
 arr3: 311
执行为: 3111 311

> 需要注意的是如果多个 promise 平级的时候, then 的执行时交替的,比如
> ```js
> new Promise().then(d=>console.log(1)).then(d=>console.log(2))
> new Promise().then(d=>console.log(1)).then(d=>console.log(2))
> ```
> 输入出是 1,1,2,2

