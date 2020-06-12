# xss攻击
XSS(Cross Site Script) 对用户的输入的恶意代码不进行校验，直接拼接到HTML中，返回给浏览器，并执行。

## 反射型
用户在URL参数中输入恶意代码，服务端拼接到HTML中，浏览器执行

## DOM型
在输入内容时将恶意代码通过 innerHTML 插入页面执行

## 存储型
恶意代码存储在服务端，用户请求时在浏览器执行


# 防范策略
### 特殊字符转义

* 在前端发送请求到服务端时，对内容进行转义
* 服务端收到请求时，对内容进行转义
* 前端接受到服务端内容时，对内容转义

| 特殊字符 | 转义后 |
| :----: | :----: |
|<|\&lt;|
|>|\&gt;|
|/s|\&nbsp;|
|"|\&quot;|
|\n|\<br>|

### 增加攻击难度
* 设置响应头 httponly
* 设置https 响应头 secure
* 利用 content-security-policy
    - default-src
    - script-src
    - style-src
* 设置响应头 x-xss-protection


