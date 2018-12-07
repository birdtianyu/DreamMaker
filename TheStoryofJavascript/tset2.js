// 可以调整浏览器窗口大小试试:
// console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);

// JavaScript 不区分整数值和浮点数值，所有数字在 JavaScript 中均用浮点数值表示
var a = 1+3;
var b = 1+2.5;
var c = 0.1+0.2;
console.log(a, typeof(a));
console.log(b, typeof(b));
console.log(c, typeof(c));

/*
Javacript对象类型：
　　Number（数字）
　　String（字符串）
　　Boolean（布尔）
　　Symbol（符号）（第六版新增）
　　Object（对象）:
    　　Function（函数）
    　　Array（数组）
    　　Date（日期）
    　　RegExp（正则表达式）
　　Null（空）
　　Undefined（未定义）
　　Error（错误）
*/ 

// Math(build-in)内置对象之一
console.log(Math.sin(3.5));
var d = Math.PI;

var fin1 = parseInt("010", 10);  // 10 :字符串转数字, 第二个参数表示字符串所表示数字的基（进制）
var fin2 = parseInt("010");      // 10 :检测出是10进制
var fin3 = parseInt("0x10");     // 16 :检测出是16进制
console.log(fin1);
console.log(fin2);
console.log(fin3);

// parseFloat()只针对10进制字符串转浮点数。

// 上面的方法等同于下面
console.log(+ "42");
console.log(+ "010");
console.log(+ "0x10");

// 判断NaN对象
isNaN(NaN); // true

console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity

// 如果类型为Infinity, -Infinity 或 NaN则返回false：
isFinite(1/0); // false 
isFinite(Infinity); // false 
isFinite(NaN); // false 
isFinite(-Infinity); // false 
isFinite(0); // true 


// 字符串
"hello".length;  // 5
"hello".charAt(0); // "h"
"hello, world".replace("hello", "goodbye"); // "goodbye, world"
"hello".toUpperCase(); // "HELLO"

// Boolen 
/*
1.false、0、空字符串("")、NaN、null 和 undefined 被转换为 false.
2.所有其他值被转换为 true. 
*/


// &&（逻辑与）、|| （逻辑或）和!（逻辑非）


/*三种变量声明方式*/
// 1.let
// let 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值。
let z;
let name = 'Simon';

// myLetVariable1 is *not* visible out here
for (let myLetVariable1 = 0; myLetVariable1 < 5; myLetVariable1++) {
    // myLetVariable1 is only visible in here
}
// myLetVariable1 is *not* visible out here

// 2.const
// const 允许声明一个不可变的常量。这个常量在定义域内总是可见的。
const Pi = 3.14; // 设置 Pi 的值  
/*Pi = 1; // 将会抛出一个错误因为你改变了一个常量的值。*/

// 3.var
/* 
var 是最常见的声明变量的关键字。
它没有其他两个关键字的种种限制。
这是因为它是传统上在 JavaScript 声明变量的唯一方法。
使用 var 声明的变量在它所声明的整个函数都是可见的。
*/

// myVarVariable2 *is* visible out here 
console.log(myVarVariable2);  // undefined
for (var myVarVariable2 = 0; myVarVariable2 < 5; myVarVariable2++) { 
    // myVarVariable2 is visible to the whole function 
} 
// myVarVariable2 *is* visible out here
console.log(myVarVariable2);

var array = [1,2,3,4,5,6,7];
array.push(39);  // 向数组末尾添加元素
var object = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
// for循环
// 方式1：
for (var i = 0; i < 5; i++) {
    // 将会执行五次
}
// 方式2:
for (let value of array) {
    // do something with value
    console.log(value);  //数组循环
}
// 方式3:
for (let property in object) {
    // do something with object property
    if (object.hasOwnProperty(property))  // 过滤掉对象继承的属性，用hasOwnProperty()来实现
    {
        console.log(property); // 'name', 'age', 'city'
    }
}

["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
    // Do something with currentValue or array[index]
    console.log(array[index]); // "dog", "cat", "hen"
    console.log(currentValue); // "dog", "cat", "hen"
});

/*
switch(action) {
    case 'draw':
        drawIt();
        break;
    case 'eat':
        eatIt();
        break;
    default:
        doNothing();
} 
*/

