# monorepo vue vite architecture

基於 monorepo 建起的前端專案，有包含 apps/projectA、packages/utils、packages/components。
apps/projectA 專案中調用了packages/utils、packages/components。

## Install
```bash
pnpm i

# 事先打包 packages/components，後續 apps/project..即可引入直接調用打包完的 dist
pnpm build-components # ./package.json
```

## File Tree
```bash
├─apps
|  └─projectA
│     └─node_modules
│        ├─components
│        └─utils
|
└─packages
    ├─components
    |  ├─UnKnown
    |  ├─Header
    |  └─Footer
    └─utils
       └─test
```

## Start Project
```bash
pnpm -F @apps/projectA dev
```