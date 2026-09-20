# Vue3 TodoList 待办管理项目
> 前端实习作品集项目，基于 Vite + Vue3 组合式API开发

## 🧰 技术栈
- 构建工具：Vite
- 框架：Vue3（Composition API）
- 状态管理：Pinia
- 网络请求：Axios（封装请求拦截器）
- 路由：Vue Router
- UI组件库：Element Plus
- 本地存储：localStorage

## ✨ 项目功能
- 待办新增、删除、修改、状态切换（完成/未完成）
- 待办筛选：全部 / 已完成 / 未完成
- 持久化存储，刷新页面数据不丢失
- 组件拆分：父子组件通信，Props校验
- 使用 computed、watch、ref/reactive 等Vue核心API
- Axios请求统一封装，配置请求/响应拦截器

## 🚀 项目启动
```bash
# 安装依赖
npm install

# 本地开发启动
npm run dev

# 打包构建
npm run build
vue3-pinia-axios-practice
├── public          # 静态资源
├── src
│   ├── api         # 请求接口
│   ├── assets      # 图片资源
│   ├── components  # 公共组件
│   ├── router      # 路由配置
│   ├── stores      # Pinia状态仓库
│   ├── views       # 页面组件
│   ├── App.vue
│   └── main.js
├── .gitignore
├── index.html
└── package.json
📌项目亮点
1. Axios 统一封装，配置请求 / 响应拦截器，统一处理错误
2. 使用 Pinia 全局管理待办数据，组件解耦，数据共享方便
3. 合理拆分组件，父子组件通信规范，添加 Props 类型校验
4. 本地持久化存储，刷新页面数据不丢失，优化用户体验
5. 引入 Element Plus 组件库，快速搭建页面
6. 代码结构清晰，适合前端实习作品集
🔗 仓库地址
GitHub：[https://github.com/wangyixiao2024/vue_todo_demo]
Gitee:  [https://gitee.com/wang-yi-xiao01/vue_todo_demo]