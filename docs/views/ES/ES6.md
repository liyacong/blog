---
title: 入门须知
date: 2020-10-09
tags:
  - ES
categories:
  - ES6
---

## ECMAScript 简介

ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言。

## 兼容性

[可查看兼容性](http://kangax.github.io/compat-table/es6/)

## let 变量

```javascript
1) 不允许重复声明
2) 块儿级作用域（全局, 函数, eval）
3) 不存在变量提升
console.log(song);  //在定义变量前输出变量,不会输出undefined,而会报错Uncaught ReferenceError: Cannot access 'song' before initialization
let song = '歌曲';
4) 不影响作用域链
{
    let name = 'lyc';
    function fn(){
        console.log(name);
    }
    fn();
}
//输出: lyc


# let经典案例
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>JQ</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ES6</li>
        </ul>
    </body>
    <script>
        //使用let声明变量i,i就只在本轮循环中有效;如果使用var进行变量声明的话,就是全局变量,最后输出的就都是第8个
        var list = document.getElementsByTagName('li');
        for(let i = 0; i < list.length; i++){
            list[i].onmouseover = function(){
                str = list[i].innerText;
                this.innerText += '我是第' + (i+1) + '个'
                this.style.fontSize = '22px'
                this.style.color = '#f00'
            }
            list[i].onmouseout = function(){
                this.style.color = 'black'
                this.style.fontSize = '16px'
                this.innerText = str;
            }
        }

    </script>
</html>


tip:
用 let 声明的变量只在当前作用域中起作用，循环一次｛｝中就会有一个 i 值，当点击元素之后，就会获取到当前环境中的 i 值，从而结果是对应的。
如果用 var 声明且不添加自执行的匿名函数的话，for循环会先执行完毕，当点击元素的时候才会执行绑定的点击事件，点击事件环境中没有 i 值，就会沿着作用域向上找，找到的就是for循环中的 i 值。
这个时候for循环已经执行完毕了，i值为7（越界），所以无论划过哪一个按钮，后台都会报错。
```

## const 常量

```javascript

1) 声明必须赋初始值
2) 标识符一般为大写
   const A = 100;
3) 不允许重复声明
4) 值不允许修改
5) 块儿级作用域
6) 对于数组和对象的元素修改, 不算做对常量的修改, 不会报错(注意: 对象属性修改和数组元素变化不会出发 const 错误)
  const Arr = ["UZI", "MXLG", "Ming", "Letme"];
  Arr[0] = "lyc";
  console.log(Arr);


  ## tips:
  声明对象类型使用 const，非对象类型声明选择 let

```

## 变量的解构赋值

### ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

```javascript
//数组的解构赋值
const arr = ["张学友", "刘德华", "黎明", "郭富城"];
let [zhang, liu, li, guo] = arr;

//对象的解构赋值
const lin = {
  name: "林志颖",
  tags: ["车手", "歌手", "小旋风", "演员"]
};
let { name, tags } = lin;

//复杂解构
let wangfei = {
  name: "王菲",
  age: 18,
  songs: ["红豆", "流年", "暧昧", "传奇"],
  history: [{ name: "窦唯" }, { name: "李亚鹏" }, { name: "谢霆锋" }]
};
let {
  songs: [one, two, three],
  history: [first, second, third]
} = wangfei;

//注意：频繁使用对象方法、数组元素，就可以使用解构赋值形式
```

## 模板字符串

```markdown
模板字符串（template string）是增强版的字符串，用反引号（`）标识，特点：

1. 字符串中可以出现换行符
2. 可以使用 \${xxx} 形式输出变量
```

```javascript
let str = `<ul>
                    <li>沈腾</li>
                    <li>贾玲</li>
                    <li>华晨宇</li>
                    <li>关晓彤</li>
                    </ul>`;
//3. 变量拼接
let lovest = "宋亚轩";
let out = `${lovest}加入WP!!`;
console.log(out);
```

## 简化对象写法

```javascript
//ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
//这样的书写更加简洁
let name = "LYC";
let change = function () {
  console.log("你会更棒的!!");
};

//原先繁琐的写法
/*const school = {
  name:name,
  change:change,
  improve: function () {
    console.log("你真厉害！！");
  },
};*/

//简化后的写法
const school = {
  name,
  change,
  improve() {
    console.log("你真厉害！！");
  }
};

console.log(school);
```

## 箭头函数

#### ES6 允许使用「箭头」（=>）定义函数。

#### 1、this 是静态的，this 始终指向函数声明时所在作用域下的 this 的值

```javascript
function getName() {
  console.log(this.name);
}
let getName2 = () => {
  console.log(this.name);
};

window.name = "YK菌";
const person = {
  name: "yk"
};

// 直接调用
getName(); // YK菌
getName2(); // YK菌

// call 方法调用
getName.call(person); // yk
getName2.call(person); // YK菌   （this指向没有改变）
```

#### 2、不可以当作构造函数实例化对象，即不可以使用 new 命令，否则会抛出一个错误

#### 3、不可以使用 arguments 对象，该对象在函数体内不存在。（如果要用，可以用 rest 参数代替）

```javascript
let fn = () => {
  console.log(arguments);
};
fn(1, 2, 3);
```

#### 4、不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数

### 箭头函数简写

```javascript
1) 省略小括号, 当形参有且只有一个的时候
 let add = n => {
    return n + n;
 }
 console.log(add(9));
2) 省略花括号, 当代码体只有一条语句的时候, 此时 return 必须省略
 而且语句的执行结果就是函数的返回值
 let pow = (n) => n * n;
 console.log(pow(8));
3) 最后放在一起省略就是
let pow = (n) => n * n;
```

### 箭头函数应用

```javascript
//案例一:
let ad = document.getElementById("ad");
ad.addEventListener("click", function () {
  setTimeout(() => {
    this.style.backgroud = "pink"; //指向的就是ad
  }, 2000);
});

//案例二
const arr = [1, 2, 3, 4, 5, 6];
const result = arr.filter(item => item % 2 === 0);
```

### 总结归纳

```markdown
箭头函数适合与 this 无关的回调. 定时器, 数组的方法回调
箭头函数不适合与 this 有关的回调. 事件回调, 对象的方法
```

### Set 集合

#### Set 基础

```javascript
let s = new Set(["喜事儿", "小事儿", "大事儿"]); //声明一个set

//获取元素个数
console.log(s.size);

//向Set中添加元素
s.add("喜事儿");

//从Set中删除元素
s.delete("大事儿");

//判断某元素是否存在
console.log(s.has("喜事儿"));

//清除所有元素。
s.clear();

//Set转数组
let arr = [...s];
```

#### Set 实践

```javascript
//1. 数组去重
let arr = [1, 2, 2, 4, 5, 5, 6];
console.log([...new Set(arr)]);

//2. 交集
let arr2 = [4, 5, 6];
let intersection = [...new Set(arr)].filter(item => new Set(arr2).has(item));

//3. 并集
let union = [...new Set([...arr, ...arr2])];

//4. 差集
let diff = [...new Set(arr)].filter(item => !new Set(arr2).has(item));
```

### Map Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

```javascript
//声明 Map
let m = new Map();

//添加元素
m.set("name", "尚硅谷");
m.set("change", function () {
  console.log("我们可以改变你!!");
});
let key = {
  school: "ATGUIGU"
};
m.set(key, ["北京", "上海", "深圳"]);

//获取大小size
console.log(m.size);

//删除
m.delete("name");

//获取
console.log(m.get("change"));
console.log(m.get(key));

//清空
// m.clear();

//Map 进行遍历
//for...of
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
/* 这个 entries 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组。 */

// 将会显示两个log。 一个是 "0" 另一个是 "1"
for (var key of myMap.keys()) {
  console.log(key);
}
/* 这个 keys 方法返回一个新的 Iterator 对象， 它按插入顺序包含了 Map 对象中每个元素的键。 */

// 将会显示两个log。 一个是 "zero" 另一个是 "one"
for (var value of myMap.values()) {
  console.log(value);
}
/* 这个 values 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的值。 */

//forEach()
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 将会显示两个 logs。 一个是 "0 = zero" 另一个是 "1 = one"
myMap.forEach(function (value, key) {
  console.log(key + " = " + value);
}, myMap);
```
