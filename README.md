<p align="center">
  <img width="500" src="">
</p>


#### node-admin-design是一个基于nodejs+ mysql为技术栈...

>
> ##### github项目地址： []()
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
// 克隆项目
git clone

// 安装依赖
npm install

// 开发
npm run dev
```