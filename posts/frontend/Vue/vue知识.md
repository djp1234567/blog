---
title: vue知识点
date: 2022-01-01
tags: 
    - vue
categories:
    - 前端
---

# vue知识

## 1.异步
### 1.1.promise

Promise 是异步编程的一种解决方案，其实是一个构造函数，自己身上有all、reject、resolve这几个方法，原型上有then、catch等方法。
Promise对象有两个特点:
（1）拥有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
（2）一旦状态改变，就不会再变

Promise主要使用，在于`then()`方法的使用，保证上一步程序出错不会进行下一步的操作。例如：
```js
// 保证某一个功能的完整
promiseClick()
    .then(function(data){
        console.log(data);
        return runAsync2();
    })
    .then(function(data){
        console.log(data);
        return runAsync3();
    })
    .then(function(data){
        console.log(data);
    });
```
#### 1.reject，resolve用法

resolve是对promise成功时候的回调，它把promise的状态修改为 fullfiled
reject就是失败的时候的回调，他把promise的状态修改为rejected

#### 2.all的用法
与then同级的另一个方法，all方法，该方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后并且执行结果都是成功的时候才执行回调。
例如：
　　下列代码中，all接受一个数组参数，需要执行完所有的参数函数之后，才能继续往下运行
    ```js
    function promiseClick1(){
		let p = new Promise(function(resolve, reject){
			console.log(1)
		   })
		   return p
	   }
	   function promiseClick2(){
		let p = new Promise(function(resolve, reject){
			console.log(2)
		   })
		   return p
	   }
	   function promiseClick3(){
		let p = new Promise(function(resolve, reject){
			console.log(3)
		   })
		   return p
	   }
 
	Promise
		.all([promiseClick3(), promiseClick2(), promiseClick1()])
		.then(function(results){
			console.log(results);
		});
    ```
#### 3.race用法
all是等所有的异步操作都执行完了再执行then方法，那么race方法就是相反的


### 2.async和await的用法
async 是异步的意思，await则可以理解为 async wait。所以可以理解async就是用来声明一个异步方法，而 await是用来等待异步方法执行
- 当使用async声明一个函数后，会返回一个promise对象。（通常这类函数会有一个返回值（return））
- - 若是没有return，函数依然会运行，但是最后会返回一个promise对象

- await后面声明一个promise对象后，会先等这个函数执行完。先执行其他的代码
- - 通常用于一个函数有多个async函数，或者循环执行某个异步函数的时候
- - 通常用于一个函数里面有计时器的时候
- - 通常用于try....catch...等情况

```js
async function fetchData() {
  const data = await fetchDataFromAPI();
  // 处理获取到的数据
}
```