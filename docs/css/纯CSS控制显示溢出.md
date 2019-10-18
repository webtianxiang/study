# 纯CSS控制显示溢出

## 溢出显示

    1.单行溢出问题：
      overflow:hidden; //超出的文本隐藏
      text-overflow:ellipsis; //溢出用省略号显示
      white-space:nowrap; //溢出不换行
    2.多行溢出问题：
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; //将对象作为弹性伸缩盒子模型显示。
      -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      -webkit-line-clamp:2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
