# angular-start

### [ng2学习路线](./ng2学习路线.md)
### [ng2学习路线--技术篇](./ng2学习路线--技术篇.md)

### 环境:
	node + cnpm

### 创建新项目
	`ng new <项目名>`
	
### 启动开发服务器
	```
		cd my-app
		ng serve 
		//ng-serve 命令会启动开发服务器,监听文件变化,并在修改这些文件时重新构建此应用.
		//使用 --open (或 -o ) 参数可以自动打开浏览器并访问 http://localhost:4200/
	```

### 编辑我们的第一个Angular组件
	这个CLI为我们创建了第一个Angular组件.它就是名叫`app-root`的根组件. 你可以在`./src/app/app.component.ts`目录下找到它。
	打开这个组件文件，并且把`title`属性从 Welcome to app!!! 改成 Welcome to my First Angular App!!!
	```
		src/app/app.component.ts
			export class AppComponent{
				title = ‘My First Angular App';
			}
	```
	浏览器会自动刷新，而我们会看到修改之后的标题。
	打开`src/app/app.component.css`更改样式
	```
		src/app/app.component.css
			h1{
				color:#369;
				font-family: Arial ,Helvetica , sans-serif;
				font-size:250%;
			}
	```
	
### src文件夹
	你的应用代码位于`src`文件夹中. 所有的Angular组件、模板、样式、图片以及你的应用所需的任何东西都在那里。这个文件夹之外的文件都是为构建应用提供支持用的。
	
ng2 生成项目结构解析

```
	src
	- app
	- - app.component.css
	- - app.component.html
	- - app.component.spec.ts
	- - app.component.ts
	- - app.module.ts
	- assets
	- - .gitkeep
	- environments
	- - environment.prod.ts
	- - environment.ts
	- favicon.ico
	- index.html
	- main.ts
	- polyfills.ts
	- styles.css
	- test.ts
	- tsconfig.app.json
	- tsconfig.spec.json
```

*File文件*
	`app.app.component.{ts,html,css,spec.ts}
		使用HTML模板、CSS样式和单元测试定义`AppComponent`组件。它是根组件，随着应用的成长它会成为一棵组件树的根节点。
	
	`app/app.module.ts`
		定义`AppModule`，这个根模块会告诉Angular如何组装该应用. 目前，它只声明了`AppComponent`.
	
	`assets/*`
		这个文件夹下你可以放图片等任何东西，在构建应用时，它们全都会拷贝到发布包中。
		
	`environments/*`
		这个文件夹中包括为各个目标环境准备的文件，它们导出了一些应用中要用到的配置变量. 这些文件会在构建应用时被替换。
		比如你可以在产品环境中使用不同的API端点地址，可使用不同的统计Token参数。甚至使用一些模拟服务。所有这些，CLI都替你考虑到了。
		
	`favicon.ico`
		每个网站都期望自己在书签栏中能好看一点。请把它换成你自己的图标。
		
	`index.html`
		这是别人访问你的网站是看到的主页的HTML文件。大多数情况下你都不用编辑它。在构建应用时,CLI会自动把所有`js`和`css`文件添加进去，
		所以你不必在这里手动 添加任何`<scritp>`或`<link>`标签。
		
	`main.ts`
		这是应用的主要入口点。使用 JIT compiler 编译器编译本应用，并启动应用的模块`AppModule`，使其运行在浏览器中。
		你还可以使用 AOT compiler 编译器，而不用修改任何代码 ———— 只要给 `ng build` 或 `ng serve` 传入 `--aot` 参数就可以了。
		
	`polyfills.ts`
		不同的浏览器对Web标准的支持程度也不同。填充库(polyfill) 能帮我们把这些不同点进行标准化。你只要使用`core-js`和`zone.js`通常就够了，
		不过你也可以查看 [浏览器支持指南](https://www.angular.cn/guide/browser-support) 以了解更多信息。
			
	`styles.css`
		这里是你的全局样式 。大多数情况下，你会希望在组件中使用局部样式，以利于维护，不过那些会影响你整个应用的样式你还是需要集中存放在这里。
		
	`test.ts`
		这里是单元测试的主要入口点。它有一些你不熟悉的自定义配置，不过你并不需要编辑这里的任何东西。
	
	`tsconfig.{app|spec}.json`
		TypeScript编译器的配置文件。`tsconfig.app.json`是为Angular应用准备的，而`tsconfig.spec.json`是为单无测试准备的。
		
		
### 根目录
`src/`文件夹是项目的根文件夹之一。其它文件夹是用来帮助你构建、测试、维护、文档化和发布应用的。它放在根目录下，和`src/`平级。

```
	- my-app
	- - e2e
	- - app.e2e-spec.ts
	- - app.po.ts
	- - tsconfig.e2e.json
	- node_modules/...
	- src/...
	- .angular-cli.json
	- .editorconfig
	- .gitignore
	- karma.conf.js
	- package.json
	- protractor.conf.js
	- README.md
	- tsconfig.json
	- tslint.json
```	

File文件
	`e2e/`
		在`e2e/`下是端到端（end-to-end)测试。它们不在`src/`下，是因为端到端测试实际上和应用是相互独立的，它只适用于测试你的应用而已。
		这也就是为什么它会拥有自己的`tsconfig.json`.
	
	`node_modules/`
		`Node.js`创建了这个文件夹，并且把`package.json`中列举的所有第三方模块都放在其中。
	
	`.angular-cli.json`
		Angular CLI的配置文件。在这个文件中，我们可以设置一系列 默认值，还可以配置项目编译时要包含的那些文件。要了解更多，请参阅它的官方文档。
	
	`editorconfig`
		给你的编辑器看一个简单的配置文件，它用来三确保参与你项目的每个人都具有基本的编辑器配置，大多数的编辑器都支持`.editconfig`文件，详情参见[http://editorconfig.org](http://editorconfig.org)
	
	`.gitignore`
		一个Git的配置文件，用来确保某些自动生成的文件不会被提交到源码控制系统中。
		
	`karma.conf.js`
		给 Karma 的单元测试配置，当运行 `ng test`时会用到它。
	
	`package.json`
		`npm`配置文件，其中列出了项目使用到的第三方依赖包。你还可以在这里添加自己的 自定义脚本。
		
	`protractor.conf.js`
		给 Protractor 使用的端到端测试配置文件，当运行 `ng e2e` 的时候会用到它。
		
	`README.md`
		项目的基础文档，预先写入了CLI命令的信息。别忘了用项目文档改进它，以便每个查看此仓库的人都能据此构建出你的应用。
		
	`tsconfig.json`
		TypeScript编辑器的配置，你的IDE会借助它来给你提供更好的帮助。
		
	`tslint.json`
		给[TSLint](https://palantir.github.io/tslint/)和[Codelyzer](http://codelyzer.com/)用的配置信息，当运行`ng lint`时会用到。Lint功能可以帮你保持代码风格的统一。
	
		
		
	