---
title: 入门须知
date: 2021-07-01
tags:
  - VueBase
categories:
  - VueBase
---

### 插值操作--mustache

```markdown
常见指令使用
1、v-once
 （1）该指令后面不需要跟任何表达式
 （2）该指令表示元素和组件只渲染一次，不会随数据的改变而改变
  eg：<h1 v-once>{{ message }}</h1>
2、v-html 把html代码解析，只显示内容
3、v-text 一般不用,不够灵活
4、v-pre 不解析(用于跳过这个元素和它子元素的编译过程,用于显示原本的 mustache 语法)
   eg：<span v-pre>{{msg}}</span>   即使data里面定义了msg这里仍然是显示的{{msg}}
5、v-cloak 解决文本闪烁问题
  在 vue 解析之前,标签中有一个属性 v-cloak
  在 vue 解析之后,标签中没有一个属性 v-cloak
  [v-cloak]{
    display: none
  }
```

### v-bind指令（v-bind 指令被用来响应地更新 HTML 属性，其实它是支持一个单一 JavaScript 表达式 （v-for 除外））

```markdown
tips: 语法糖是指在不影响功能的情况下，添加某种方法实现同样的效果，从而方便程序开发，简化代码的书写。[](https://github.com/tc39/ecma262)
eg：v-bind:src=''====>:src=''   v-on:click="handleClose"=====>@click="handleClose"
1、绑定一个属性
  <input type="button" value="按钮" :title="myTitle">
2、内联字符串拼接
  <input type="button" value="按钮" :title="myTitle + '1234'">
3、动态绑定 class [参考地址](https://juejin.cn/post/6844903920121151501)
  （1）对象语法
       <div :class="{类名1: true, 类名2: false}"></div>
       如果过于复杂,可以放在一个methods或者computed中
        eg:
        <div :class="classObject"></div>
        data: {
          isActive: true,
          error: null
        },
        computed: {
          classObject: function () {
            return {
              active: this.isActive && !this.error,	//isActive为true，且error不为null
              'text-danger': this.error && this.error.type === 'fatal'
                //error为null且this.error.type === 'fatal'
            }
          }
        }

 （2）数组语法
     <li :class='[{ check_pendingStatus: p.AuditState==1 },{ passStatus: p.AuditState==2 } ,{ rejectStatus: p.AuditState==3 }]'  v-if="p.AuditState==1"></li>
 （3）三元表达式动态切换 class
     <div :class="[isActive ? activeClass : '', errorClass]"></div>
4、style的绑定（不推荐使用）
  （1）对象方式
       v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名：
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
        data: {
          activeColor: 'red',
          fontSize: 30
        }
       直接绑定到一个样式对象通常更好，这会让模板更清晰：
        <div :style="styleObject"></div>
        data: {
          styleObject: {
            color: 'red',
            fontSize: '13px'
          }
        }
  （2）数组语法绑定style
       v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上
       <div v-bind:style="[baseStyles, overridingStyles]"></div>
```

### v-if 和 v-else

```markdown
注：v-if可以与template连用，两个即两个以上的div需要同一个元素控制的时候，用template！！！减少空间浪费
登录切换小案例---input 复用问题

<div v-if='type="name"'>
  <input placeholder="请输入名称">
</div>
<div v-else>
  <input placeholder="请输入电话">
</div>

问题: 如果我们在输入内容的情况下,切换了类型,我们会发现文字依然显示之前的输入的内容
问题解答: 这是因为 Vue 在进行 DOM 渲染时,出于性能考虑,会尽可能的复用已经存在的元素,而不是重新创建新的元素. 在上面的案例中,Vue 内部会发现原来的 input 元素不再使用,直接作为 else 中的 input 来使用了
解决方案: 如果我们不希望 Vue 出现类似重复利用的问题,可以给对应的 input 添加 key,并且我们需要保证 key 的值不同
```

### v-show
```markdown
注：v-if和v-show的作用都把内容显示和隐藏，不同的是，v-if在元素隐藏的时候，是把整个DOM元素删除。v-show是在DOM元素上添加一个样式，把内容隐藏起来。
当内容需要频繁切换的时候，就用v-show，反之则用v-if

注：在使用template时，v-show将失去作用。因为v-show是设置显示与隐藏，而template是没有实际东西的dom，所以v-show与template联合使用将失效。
```


### v-for

```markdown
1、遍历数组
    <div v-for="(item,index) in items" :key="item.name"></div>
    注：key属性的作用主要是为了高效的更新虚拟的DOM，key值不要去index，需要使用每个节点的唯一标识来作为key
    不使用index的原因：如果从一个数组中间第二个位置插入一个值，这样原始第三个值的index会给新插入的第二个值依次类推，导致没有效率

2、遍历对象
  （1）在遍历对象的过程中，如果只是获取一个值，那么获取到的值是 value
    <div v-for="item in info" :key="item">{{item}}</div>
  （2）获取key和value格式：（value，key）
    <div v-for="（value，key） in info"  :key="value">{{value}}---{{key}}</div>
  （3）获取key和value和index格式：（value，key，index）不常用
    <div v-for="（value，key，index） in info" :key="value">{{value}}---{{key}}---{{index}}</div>

3、循环一个迭代的数字
   <p v-for="count in 10" :key="count">这是第{{count}}次循环</p>

```

### Vue可响应式数组方法

```markdown
因为 Vue 是响应式的，所以当数据发生变化时，Vue 会自动检测数据变化，视图会发生对应的更新，Vue 中包含了一组观察数组编译的方法，使用他们改变数组也会触发视图的更新。
1、push 方法
    this.names.push('why','code')
2、pop 方法---删除数组的最后一位元素
    this.names.pop()
3、shift 方法---删除数组的第一个元素
    this.names.shift()
4、unshift 方法---在数组最前面添加元素
    this.names.unshift('why','code')
5、splice 方法---删除元素/替换元素/插入元素
    第一位参数表示开始删除/插入元素的索引值
    删除元素:第二个参数代表删除几个元素,如果没写则代表从开始位置一直删除到最后
    this.names.splice(1,3)
    this.names.splice(1)
    替换元素:第二个参数,表示我们要替换几个元素,后面是用于替换前面的元素
    this.names.splice(1,3,'a','b','c')--可以理解为从 1 的位置开始删除了三个元素,往后又追加了三个值
    插入元素:第二个参数,传入 0,并且后面跟上要插入的元素
    this.names.splice(1,0,'a','b','c')

6、sort 方法---排序数据
7、reserve 方法---翻转数据
    this.names.reserve()


    注:通过索引值修改数组中的元素是不会触发数据响应式的 eg:this.names[0] = 'lyc'，可以用splice纠正this.names.splice(0,1,"lyc")或者用vue内部方法set：Vue.set(this.splice,0,"lyc")
```

### 高阶函数

```markdown
1、filter ---数组过滤（必须返回一个 Boolean 值）
    true：当返回 true 时，函数内部会自动将这次回调的 n 加入新的数组中
    false：当返回 false 时，函数内部会过滤掉这次的 n
    eg：
    var arr = [20,30,50, 96,50]
    var newArr = arr.filter(item => item>40)  
    console.log(newArr)

扩展：
数组去重
    var arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7,8,8,0,8,6,3,4,56,2];
    var arr2 = arr.filter((x, index, self)=>self.indexOf(x)===index)  
    console.log(arr2); //[1, 2, 3, 4, 5, 6, 7, 8, 0, 56]
    详解：filter(x,index,self)可以为数组提供过滤功能，其中x代表元素，index是与X一同传入元素的索引，而self代表数组本身，indexOf始终返回第一次找到匹配该元素的索引

数组去重 es6
    var arr=[1,2,1,'1',null,null,undefined,undefined,NaN,NaN]
    //使用Array.from转成数组
    let res=Array.from(new Set(arr));//{1,2,"1",null,undefined,NaN}
    //or
    let newarr=[...new Set(arr)]

数组对象去重 es6
    let person = [
    {id: 0, name: "小明"},
    {id: 1, name: "小张"},
    {id: 2, name: "小李"},
    {id: 3, name: "小孙"},
    {id: 1, name: "小周"},
    {id: 2, name: "小陈"},
    ];
    
    let obj = {};
    
    let peon = person.reduce((cur,next) => {
    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
    return cur;
    },[]) 
   //设置 cur 默认类型为数组，并且初始值为空的数组

2、map 映射，即原数组映射成一个新的数组；

3、reduce 对数组中所有的内容进行汇总 [https://blog.csdn.net/weixin_36617251/article/details/104787591](例子) 
[https://blog.csdn.net/weixin_42498482/article/details/105810836](详解)
```

### v-model 的使用和原理

```markdown
v-model 其实是一个语法糖，它的背后本质上是包含两个操作：
1、v-bind 绑定一个 value 属性
2、v-on 指令给当前元素绑定 input 事件
    <input type="text" v-model="message">
    等同于
    <input type="text" :value="message" @input=" message = $event.target.value">


修饰符
lazy修饰符  v-model.lazy
默认情况下，v-model默认是在input事件中同步输入框的数据的。也就是说，一旦有数据发生改变对应的data中的数据就会自动发生改变
lazy修饰符可以让数据在失去焦点或者回车时才会更新

number修饰符  v-model.number
默认情况下,在输入框中无论我们输入的是字母还是数字,都会被当做字符串类型进行处理,但是如果希望处理的是数字类型,那么最好直接将内容当做数字处理
number修饰符可以让在输入框中输入的内容自动转换成数字类型


trim修饰符 v-model.trim
如果输入的内容首位有很多空格,通常我们希望将其去除
trim修饰符可以过滤内容左右两边的空格


```
### props  父传子
```markdown
tips:不太建议使用数组形式，常用对象形式

参数对象含有4个属性，type、required、default、validator。

type：设定参数类型，当传入参数类型与type不相符时，控制台会报错

required：设定参数是否是必传，当设为true时，不传该参数会报错

default：设定默认值，当参数类型为复杂类型时，需使用工厂模式生成默认值，否则Vue会在控制台抛出警告。如图所示，就通过工厂模式生成了一个长度为3的空数组。

validator：校验器，是一个函数，拥有一个代表传入值的形参，可以自定义各种校验，当返回false时，会报错，表示没通过校验。

eg：
props: {
    data1: {
        type: String,
        required: true,
        default: 'default value',
        validator (value) {
            return (value.length < 5)
        }
   },
    data2: {
        type: Array,
        required: true,
        default: () => ['', '', '']
    }
}

tip: 子组件接收props属性childMyMessage，在父组件传值的时候即支持驼峰写法childMyMessage，也可以写成这种child-my-message（建议这种的）
<cnp :cinfo="info" :child-my-message ="message"></cnp>

```
### $emit 子传父

### 父访问字  children（不常用） refs
### 子访问父  parent root（根 vue实例）

### 插槽 slot

```markdown

1、具名插槽
父组件
<div slot="left">222</div>

子组件
<slot name="left"></slot>

2、作用域插槽 | 带数据的插槽
//TODO 父组件：
<cpn>
<template solt-scope="slot">
   <span v-for="item in slot.data">{{item}}</span>
</template>
</cpn>


//TODO 子组件：
<div>
<slot :data="pLanguages">
   <span v-for="item in pLanguages">{{item}}</span>
</slot>
</div>

```
### 模块化  CommonJS 、ES6模块化Export import、AMD、CMD


### VueCLI3脚手架 
```markdown
"0"配置
1、可以通过vue ui启动配置服务查看和修改配置
2、通过下载的依赖文件的@vue/cli-service/lib/Service.js查看配置
3、自定义配置:可以通过新建vue.config.js添加配置
```
```markdown
问题：箭头函数中的this是如何查找的？
答案：向外层作用域中，一层层查找this，直到有this的定义
```
### url的hash和html5的history

```markdown
location.hash = 'aaa'===>localhost:8080/aaa
history.pushState({},'','home')===>localhost:8080/home  栈结构先进后出
history.pushState({},'','about')===>localhost:8080/about
history.pushState({},'','My')===>localhost:8080/My
history.back() 会返回到about地址

history.replaceState({},"","/foo/bar")  替换后浏览器的后退按钮是不可点击的


history.go(-1) 等价于 history.back()
history.go(1) 等价于 history.forward()
等于浏览器界面的前进后退
```
### 安装和使用vue-router
```markdown
安装 vue-router
npm install vue-router --save
在模块化工程中使用它（因为是一个插件，所以可以通过Vue.user()来安装路由功能）
1、导入路由对象（import VueRouter from ‘vue-router’），并且调用Vue.use(VueRouter)
2、创建路由实例，并且传入路由映射配置
const routes = []
const router = new VueRouter({
  //配置路由和组件之间的应用关系
   routes
})
3、在Vue实例中挂载创建的路由实例
将router对象传入到vue实例
export default router

使用vue-router的步骤
1、创建路由组件
2、配置路由映射：组件和路径映射关系
3、使用路由：通过<router-link></router-link>和<router-view></router-view>
router-link相关属性
to：用于指定跳转的路径
replace：replace不会留下history记录，所以指定replace的情况下，后退键返回不能返回到上一个页面中
active-class：自定义router-link路由匹配成功时的类名，如果不想在每个router-link上设置，可以在全局映射路由配置那设置linkActiveClass:'active'


redirect路由重定向
路由默认的Hash模式改为History模式



$router 路由跳转
this.$router.push('/home')  push=>pushState

this.$router.replace('/home')  类似router-link的replace


动态路由
1、const router = [{
   path:'/user/:abc',
   component:User
}]

2、首页 <router-link :to="'/user'+userId">用户</router-link>

3、当前页 this.$route.params.abc

```
