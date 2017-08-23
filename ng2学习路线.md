ng2 学习路线

----2222
1.
Anuglar三大核心概念
Component,Module,Route

2.
Angular架构特色
依赖注入、数据绑定

http://blog.thoughtram.io/angular/2016/02/22/augular-2-change-detection-explained.html

http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html

https://vsavkin.com/change-detection-in-angular-2-4f216b855d4c

3.
UI库

ionic 库

4.
参考资源推荐

ng2-admin

jhipster


#### 1.更改淘宝镜像
`https://npm.taobao.org/`

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

#### 2.安装 angular/cli

`https://www.npmjs.com/package/angular-cli#installation`

`cnpm install -g @angular/cli`

#### 3.新建项目
`ng new <project-name>`


---

### 克隆项目
`git clone https://git.oschina.net/mumu-osc/NiceFish.git`

### 安装淘宝镜像
`npm i -g cnpm --registry=https://registry.npm.taobao.org`

### 安装 @angular/cli
`cnpm i -g  @angular/cli`

### 安装依赖包
`cnpm install`

### 启动服务
`ng serve`

如果你想让加载的包更小,请使用以下方式启动 angular-cli 内置的轻量级 http server

`ng serve --prod`

"@angular/cli": "1.3.0",   prod不能用

注意:假如发现 ng server 起不来,或者 起来有报错,请把 NiceFish  根目录下的 node_modules 目录删掉,
然后重新执行 cnpm install ,全局的 @angular/cli 也需要删掉重装


假如遇到 端口被占用的， 先把之前的终止




----------------
444
----------------

Responsive web design  RWD

屏幕分辨率

RWD核心技术

响应式设计

用什么步骤 设计

最火RWD框架  Bootstrap框架


RWD核心理念
-页面整体布局应该能够自动适应不同的设备

-图片应该能够自动适应

-字体应该能够自动适应


关于屏幕分辨率的一些基本概念
1英寸 = 2.54cm

-屏幕尺寸---实际的物理宽高



视口  view-port --- 移动端浏览器

width       设定布局视口宽带（min/max-width)

height      设定布局视口高度（min/max-height)

zoom        设定页面初始缩放比例（auto、0-10.0、%)

user-zoom   设定用户是否可以缩放（zoom/fixed)

min-zoom    设定最放大比例（auto、0-10.0、%）

max-zoom    设定最小缩小比例（auto、0-10.0、%）

orientation 设定页面显示方向（auto、portrait、landscape）


问题：
根据“物理尺寸” 来设计尺寸


RWD的核心技术

---
实现“响应式”的技术核心：
有一种方式能够获取到 用户用什么 打开

Media Type

Media Query  不支持 IE8-

媒体查询 在不同的屏幕大小 样式不同

@media screen and (min-width:40em){
    background:red;
}



--
网格布局

bootstrap 12列 （ 12？  1 2 3 4 6 12 整除）

--
响应式图片

在不同的图片显示不同的效果

-响应式图片方案1： W3C的新标准

根据不同的 屏幕加载不同的图片 （ 草案 ）
```
<picture>
    <source media="(min-width:45em)" src="images/flower-large.jpg"></source>
    <source media="min-width:18em)" src="images/flower-medium.jpg"></source>
    <img src="images/flower-small.jpg" alt=" a flower">

</pictrue>   
```

-响应式图片方案2：使用js插件

`Picturefull`

-响应式图片方案3：由服务端控制

UserAgent Parser 识别客户端类型

判断客户端网络环境

--
响应式字体

维基百科


--
响应式导航



---
响应式设计应该用什么样的步骤进行？

响应式设计的方法

- 渐进增强 ：小屏幕优先

    基准样式        首先设计出最基本的布局和样式，公共基础样式

    手机            设计出针对手机屏幕的布局样式

    平板
```
//小于 36em 样式
@media only screen and (min-width:36em){

}
```


- 切分断点（临界值）

主断点      次断点
320
            480
            640
720
            768
1024






