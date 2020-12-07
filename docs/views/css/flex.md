---
title: CSS Flexbox 布局
date: 2020-12-07
tags:
  - CSS
categories:
  - frontEnd
  - frontStart
---

## 开启 Flexbox

flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。

flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。

## 布局

```bash

<style>
.flex{
  display: flex;
  height: 100px;
}
</style>

<div class="flex">
  <div class="flex1">Flex 1</div>
  <div class="flex2">Flex 2</div>
  <div class="flex3">Flex 3</div>
</div>

```

<img :src="$withBase('/images/flex/flex-1.png')" alt="" style="width: 100%;height: 95px">

可以看到.flex 里边的三个元素自动变成了一行，因为 flex 默认是按行进行排列的。Flexbox 布局是一维布局方式，要么按行排列，要么按列排列。

## 对齐方式

### justify-content

控制主轴（即水平方向）对齐方式使用 justify-content 属性，它有下边几种对齐方式

### flex-start

flex-start 是默认值，靠左对齐。

### center

居中对齐，此时整个 flex 容器被居中到了页面中间：

<img :src="$withBase('/images/flex/flex-2.png')" alt="" style="width: 100%;height: 100px">

### flex-end

靠右对齐。

### space-between

两端对齐，这种对齐方式是第一个和最后一个元素贴边，中间的元素平分剩余的空间：

<img :src="$withBase('/images/flex/flex-3.png')" alt="" style="width: 100%;height: 100px">

### space-evenly

分散对齐，所有的元素都平分空间：

<img :src="$withBase('/images/flex/flex-4.png')" alt="" style="width: 100%;height: 100px">

### space-around

跟 space-evenly 类似，但是左右两边的留白为平分空间的 1/2.(个人理解三个元素各占 33.3%再居中分配)

<img :src="$withBase('/images/flex/flex-5.png')" alt="" style="width: 100%;height: 100px">

## align-items

控制交叉轴方向（即垂直方向）上的对齐方式使用 align-items 属性，有下边几种对齐方式：

### stretch

stretch 是 align-items 的默认值，它会自动把子元素拉伸成容器的高度，所以之前的例子里子元素在垂直方向上都占满了容器，只要改变容器的 align-items 的值，它就会变成内容的高度。

<img :src="$withBase('/images/flex/flex-6.png')" alt="" style="width: 100%;height: 100px">

### flex-start

靠上对齐，在交叉轴开始的最上方，可以看到子元素不再占满容器高度：

<img :src="$withBase('/images/flex/flex-7.png')" alt="" style="width: 100%;height: 100px">

### center

居中对齐：

<img :src="$withBase('/images/flex/flex-8.png')" alt="" style="width: 100%;height: 100px">

### flex-end

靠下对齐：

<img :src="$withBase('/images/flex/flex-9.png')" alt="" style="width: 100%;height: 100px">

### baseline

基线对齐，如果子元素文字尺寸和行高不同，则子元素会按照文字的基线进行对齐：

```css
.flex2 {
  font-size: 24px;
}
```

<img :src="$withBase('/images/flex/flex-10.png')" alt="" style="width: 100%;height: 100px">

## 子元素覆盖对齐方式

子元素可以通过设置 align-self 来控制自己在交叉轴上的对齐方式，例如把 .flex3 子元素在垂直方向上靠下对齐：

```css
.flex {
  display: flex;
  align-items: flex-start;
}

.flex3 {
  align-self: flex-end;
}
```

<img :src="$withBase('/images/flex/flex-11.png')" alt="" style="width: 100%;height: 100px">

在水平方向上控制子元素对齐并没有 justify-self 属性，而是使用 margin 属性，通过把左或右边距设置为 auto 来控制水平对齐，比如把 flex3 放到最右边：(**常用**)

<img :src="$withBase('/images/flex/flex-12.png')" alt="" style="width: 100%;height: 100px">

## 排列方式

flex 支持按行排布，也支持按列排布。按列排布时，主轴和交叉轴换了方向，但是 align-items 和 justify-content 控制的轴线不变，即 align-items 还是控制交叉轴(水平方向)，justify-content 控制主轴（垂直方向）

要使 flex 按列排布，只需要设置：

```css
.flex {
  flex-direction: column;
}
```

举例如下:

### 水平居中对齐 (块级元素子类变成了行内元素)

```css
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

<img :src="$withBase('/images/flex/flex-13.png')" alt="" style="width: 100%;height: 100px">

### 垂直居中对齐

```css
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

<img :src="$withBase('/images/flex/flex-14.png')" alt="" style="width: 100%;height: 100px">

另外 flex 布局也可以支持反向按行和列布局，相当于按容器中心线进行 180 度翻转：

### row-reverse

```css
.flex {
  display: flex;
  flex-direction: row-reverse;
}
```

<img :src="$withBase('/images/flex/flex-15.png')" alt="" style="width: 100%;height: 100px">

### column-reverse

```css
.flex {
  display: flex;
  flex-direction: column-reverse;
}
```

<img :src="$withBase('/images/flex/flex-16.png')" alt="" style="width: 100%;height: 100px">

## 空间占比

子元素可以通过设置 flex 属性来调整空间的占比，例如让 flex2 在水平方向上占据其他子元素的 2 倍大小，可以设置：

```css
.flex1,
.flex3 {
  flex: 1;
}
.flex2 {
  flex: 2;
}
```

<img :src="$withBase('/images/flex/flex-17.png')" alt="" style="width: 100%;height: 100px">

## Flex-basis

在介绍 flex-basis 之前，先讲一个概念 main size，即主轴方向的尺寸，那么，在行排布模式下，也就是水平方向的尺寸，其实就是子元素的宽度，而在列模式下，它是子元素的高度，相对应的也有 cross size，即行模式下是子元素的高度，列模式下是宽度。 而 flex-basis 是用来设置 main size 的，它的优先级会高于 width。它的默认值是 auto，即在行模式下，如果子元素设置了宽度，它就取自这个宽度值，没有设置的话，就是内容的宽度。使用 flex-basis，可以同时管理行模式下的宽度和列模式下的高度。

让每个子类宽度设置为 200 像素

```css
.flex > * {
  flex-basis: 200px;
}
```

<img :src="$withBase('/images/flex/flex-18.png')" alt="" style="width: 100%;height: 100px">

如果再添加 width 属性，发现并不会生效：但是，可以通过设置 min-width 来强制设置最小宽度：

```css
.flex > * {
  flex-basis: 200px;
  min-width: 250px;
}
```

同理的，在列模式下，flex-basis 变成了高度，因为容器高度为 100px，这里把子元素高度设置成了 30px 总计 90px

```css
.flex {
  flex-direction: column;
}

.flex > * {
  flex-basis: 30px;
}
```

同样的，也可以用 min-height 来控制最小高度。

## 缩放

### flex-grow

flex-grow，这个属性是说 flex 容器在有剩余空间的时候，子元素占据剩余空间的占比。例如，给.flex2 子元素设置：

```css
.flex2 {
  flex-grow: 1;
}
```

其它的元素保持默认的宽度（即内容的宽度，flex-basis 为 auto)，那么 .flex2 就会自动增长并占据整个剩余空间：

<img :src="$withBase('/images/flex/flex-19.png')" alt="" style="width: 100%;height: 100px">

如果把三个元素全部设置成 1，那么所有元素都会自动增长，并各自占据 1/3 的空间，这里就不一一举例了。

### flex-shrink

子元素的收缩是说：**当它们的宽度超过 flex 容器之后**，该如何进行收缩。通过 flex-shrink 来设置一个数值，数值越大，收缩程度也越大，比如 flex-shrink: 2 的元素会比 flex-shrink:1 收缩的值大 2 倍：

```css
.flex1,
.flex3 {
  flex-basis: 600px;
  flex-shrink: 1;
}
.flex2 {
  flex-basis: 600px;
  flex-shrink: 2;
}
```

这里为了方便演示，我把所有的 flex 子元素的 main size (宽度) 都设置成了 600px。在我的显示器下，flex 容器的宽度是 728px，三个子元素总和 1800px，
显然超出了容器的宽度，那么根据上边定义的收缩规则，.flex2 将收缩 2 倍于 .flex 和 .flex3 收缩的空间。下边的例子中，
.flex1 和 .flex3 的宽度变成了 332px，相比于 600px 收缩了 268px，那么 .flex2 就要收缩 536px (268px \* 2) 的宽度，那么它最后就会剩下 64px (600px - 536px) 的宽度：

<img :src="$withBase('/images/flex/flex-20.png')" alt="" style="width: 100%;height: 100px">

## felx 属性

说完 flex-grow、flex-shrink 和 flex-basis 之后，再来看一下这个 flex 属性，它其实是前边三个属性的缩写，默认值是 0 1 auto，即不增长，但收缩，收缩比例为 1，flex-basis 为 auto，即取自用户定义的宽度或内容的宽度。

flex 的值可以是下边几种：

指定一个数字 - 例如 flex: 1，就等同于是 flex: 1 1 0，即自动缩放，比例为 1，flex-basis 为 0。
auto - 等同于 flex: 1 1 auto。
指定两个数字 - 第一个为 flex-grow，第二个，如果是数字则认为是 flex-shrink，如果是宽度，则是 flex-basis。
指定三个值 - 分别为 flex-grow，flex-shrink 和 flex-basis。
所以说，通过 flex 属性可以方便的同时设置 flex-grow、flex-shrink 和 flex-basis 这三个值

## 折行

如果子元素有固定宽度，并且超出了容器的宽度，还不允许收缩的话，那么可以使用 flex-wrap 属性来让元素进行折行排列，使得每行的元素都不超过容器的宽度。
这里跟 css grid 布局的主要区别是，它无法控制单独控制行、列的占比，比如跨行、夸列，也不能自由定位元素到特定的位置。
下边的示例新增了 2 个元素，一共 5 个，每个元素的 main size 为 300px，然后超出宽度后折行：

```css
.flex {
  flex-wrap: wrap;
}

.flex > * {
  flex-shrink: 0;
  flex-basis: 300px;
}
```

<img :src="$withBase('/images/flex/flex-21.png')" alt="" style="width: 100%;height: 100px">

### align-content

如果 flex 容器开启了折行，那么两行及以上的内容可以通过 align-content 属性来控制各行之间在交叉轴上的排列规则，它的取值和 justify-content 基本相同，
这里演示其中几个，还是使用之前三个元素的 flex 容器，每个容器宽度为 300px，超出后换行

```css
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex > * {
  flex-basis: 300px;
}
```

### center

垂直居中

```css
.flex {
  height: 100px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
}
```

<img :src="$withBase('/images/flex/flex-22.png')" alt="" style="width: 100%;height: 100px">

### space-between

两端对齐：

```css
.flex {
  height: 100px;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
}
```

<img :src="$withBase('/images/flex/flex-23.png')" alt="" style="width: 100%;height: 100px">

## 嵌套的 flex 容器的问题

如果 HTML 结构复杂，有嵌套的 flex 容器，很有可能会遇到嵌套的 flex 容器并不能自动收缩的问题，即使设置了 flex-shrink。比如有下边一个 html 结构：

```html
<div class="flex">
  <div class="flex1">Flex 1</div>
  <div class="flex2">Flex 2</div>
  <div class="flex3">Flex 3</div>
  <div class="flex4">
    <p>
      这是一段很长很长很长很长很长很长很长很长很长很长很长很长长很长很长很长很长很长长很长很长很长很长很长的文本
    </p>
  </div>
</div>
```

这里给之前的 flex 容器添加了一个新的子元素.flex4，这 4 个子元素都设置成 flex: 1 来平分空间，但是 .flex4 自己本身也是一个 flex 布局的容器，里边有一长串文本，我想让它超长之后自动显示省略号，它的 CSS 代码：

```css
.flex {
  display: flex;
}
.flex > * {
  flex: 1;
}
.flex4 {
  display: flex;
  flex: 1;
}
.flex4 > p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

<img :src="\$withBase('/images/flex/flex-24.png')" alt="" style="width: 1000px;max-width:1000px;height: 100px;">

可以看到，最后本应该占 1/4 空间的.flex4，因为文本不能换行，直接把 flex 容器撑开了，并且把其他的三个子元素挤成了最小空间，它本应该把文字截短并显示省略号，这是为什么呢？原来，
flex 容器的 min-width 属性值为 auto，是由浏览器自行计算的，在这里它取了 p 元素的宽度，使得宽度成为了一整行 的宽度。
那么要解决这个问题，可以把.flex4 这个嵌套 flex 容器的 min-width 改为 0，即最小宽度是 0，那么就可以正常收缩了

```css
.flex4 {
  display: flex;
  flex: 1;
  min-width: 0;
}
```

<img :src="$withBase('/images/flex/flex-25.png')" alt="" style="width: 100%;height: 100px">

## 总结

1. 开启 flex 布局使用 display: flex 属性。
2. flex 布局有主轴和交叉轴，分别使用 justify-content 和 align-items 控制对齐方式。
3. 支持按行或列进行排列，使用 flex-direction，另外也支持 row-reverse 和 column-reverse 反向排列。
4. 子元素可以通过 flex 简写形式，或者 flex-grow，flex-shrink，flex-basis 来调整元素的空间占比和缩放。
5. 通过 flex-wrap 可以设置 flex 子元素折行显示。
6. 嵌套 flex 容器的缩放问题。
