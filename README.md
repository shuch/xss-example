# xss攻击
对用户的输入的恶意代码不进行校验，直接拼接到HTML中，返回给浏览器，并执行。

## 反射型
用户在URL参数中输入恶意代码，服务端拼接到HTML中，浏览器执行
