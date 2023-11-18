---
title: Npm库类
date: 2021-3-1
tags:
 - node
categories:
 - 前端
---

# Npm库类

## 1.globby模式匹配目录文件
在开发中，我我们经常会看到一种配置语法，一般出现在 gitignore里、webpack 配置里、vscode查找文件的时候，如下：
```
    ?.js
    **/*.js
    dist/**/*.js
```
这种语法其实叫 glob。

**安装**
```sh
$ yarn add glob -D
```

**使用方式**
```js
var glob = require("glob")
glob("**/*.js", function (er, files) {
  // files 就是它模糊查找到的文件
})
const jsfiles = await glob('**/*.js', { ignore: 'node_modules/**' })

//或者
import {globby} from 'globby';

const paths = await globby(['*', '!cake']);

console.log(paths);

```

**语法**
1.基本语法
```
*	匹配任意长度任意字符
**	代表0或多个层级的目录
?	匹配任意单个字符
[list]	匹配指定范围内（list）任意单个字符，也可以是单个字符组成的集合
[^list]	匹配指定范围外的任意单个字符或字符集合
[!list]	同[^list]
{str1,str2,...}	匹配 srt1 或者 srt2 或者更多字符串，也可以是集合
() 小括号必须跟在 ?、*、+、@、! 后面使用，且小括号里面的内容是一组以 | 分隔符的模式集合，例如：abc|a?c|ac*。
```

2、专用字符集
```
[:alnum:] 任意数字或者字母
[:alpha:] 任意字母
[:space:] 空格
[:lower:] 小写字母
[:digit:] 任意数字
[:upper:] 任意大写字母
[:cntrl:] 控制符
[:graph:] 图形
[:print:] 可打印字符
[:punct:] 标点符号
[:xdigit:] 十六进制数
[:blank:] 空白字符（未验证）
```

## 2.gray-matter
读取 markdown 的 meta data 的插件
解析后为：
```json
{
  "content": "<h1>Hello world!</h1>",
  "data": {
    "title": "Hello",
    "slug": "home"
  }
}
```