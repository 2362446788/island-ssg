## 搭建cli工具
选用cac进行cli脚手架搭建，使用pnpm安装typescript，初始化tsconfig.json：
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "target": "ESNext"
  }
}
```
然后开启tsc的观察模式，将编写的ts转化为js；
编写cli逻辑，使用cac的语法编写dev和build命令；
接着需要调试这个island命令，通过npm link的方式将其挂在到全局使用，并且将package.json中添加以下配置：
```json
{
  "bin": {
    "island": "bin/island.js"
  }
}
```

## 搭建dev server
借用vite的createServer功能进行创建。