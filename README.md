<p align="center">
  <img width="300" src="https://camo.githubusercontent.com/720ed473d178f9380291709d2223860ade4f3c7bc368e3fea1ad057b8dc9c6f5/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667">
</p>

## 介绍
    个人博客服务端项目
>


## 目录结构

```bash
├── controller
│   └── user.js                # 数据库操作
├── db
│   └── config.js              # 数据库配置
│   └── mysql.js               # 数据库连接
├── models
│   └── Result.js              # 返回JSON格式
├── router
│   ├── index.js               # 路由中间件
│   ├── jwt.js                 # jwt
│   └── user.js                # 用户路由
├── utils
│   ├── constant.js            # 常用变量
│   └── index.js               # 常用方法
├── app.js                     # 入口文件
├── package.json               # package.json
└── README.md                  # README.md
```



## 开发

```
克隆项目    git clone https://github.com/YangWenLong123/alog-node.git

安装依赖    cnpm install

运行项目    nodemon app.js
```