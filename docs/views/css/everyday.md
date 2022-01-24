---
title: CSS 日常总结
date: 2020-12-08
tags:
  - CSS
categories:
  - CSS
---

## css 禁止点击事件触发

鼠标不可点击时的**显示状态**


```css
button {
  cursor: not-allowed;
}
```

**禁止触发点击事件**

```css
button {
  pointer-events: none;
}
```
