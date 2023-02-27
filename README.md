# Base Starter Kit

> 剛剛建立自己的 Starter Kit，沒有實際運用過，所以應該之後還會補東西進來。

> **Warning**  
> clone 下來請先使用 `git remote remove origin` 刪除遠端連結。

## Features

- 使用 React 18 以上
- CSS-in-JS 使用常見的 styled-components
- 使用 TypeScript 開發
- 使用 Webpack 5 以上
- 測試使用 jest 和 React Testing Library
- 格式可以參照 Prettier
- react-router-dom 採用 v6 版本

## Directory Structure

```bash
|___  node_modules
|___  src
|     |___  assets
|     |     |___  css
|     |___  components  // 共用元件
|     |___  features    // 共用功能
|     |___  hooks       // 共用 hook
|     |___  middleware  // middleware 配置
|     |___  pages       // 路由元件
|     |___  resource    // api 統一輸出配置
|     |___  router      // 路由配置
|     |___  utils       // 常用方法
|     |___  webpack
|     |___  config webpack 共用配置
```

### Public Directory

## Scripts

- `start` - 啟動 Web Server。
- `build` - 打包專案, dev。
- `build:prod` - 打包專案, prod。
- `lint` - 使用 ESLint 解決格式問題。
- `test:jest` - 啟動測試。
- `test:jest--coverage` - 啟動測試並產出報告。
