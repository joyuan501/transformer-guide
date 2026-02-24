# GitHub Pages 部署指南

本指南说明如何将 Transformer 架构初学者指南部署到 GitHub Pages，获得永久 URL。

## 前置要求

- GitHub 账户
- Git 已安装并配置
- 项目已本地构建（`pnpm build`）

## 部署步骤

### 1. 创建 GitHub 仓库

如果还没有创建仓库，请在 GitHub 上创建一个新仓库（可以是公开或私有）。

### 2. 配置 GitHub Pages

在仓库设置中：
1. 进入 **Settings** → **Pages**
2. 在 **Source** 下选择 **Deploy from a branch**
3. 选择分支为 `main`（或 `master`），目录为 `/ (root)`
4. 点击 **Save**

### 3. 部署生产版本

#### 方法 A：使用 GitHub Actions（推荐）

创建文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

然后推送到 GitHub：

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

#### 方法 B：手动部署

1. 构建项目：
```bash
pnpm build
```

2. 创建 `gh-pages` 分支（如果不存在）：
```bash
git checkout --orphan gh-pages
git rm -rf .
```

3. 复制构建文件：
```bash
git checkout main -- dist/public
cp -r dist/public/* .
rm -rf dist
```

4. 提交并推送：
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. 在 GitHub 仓库设置中，将 GitHub Pages 源设置为 `gh-pages` 分支。

### 4. 访问网站

部署完成后，您的网站将在以下 URL 可用：

- 如果仓库名为 `transformer-guide`：
  - `https://<username>.github.io/transformer-guide`

- 如果使用自定义域名，按照 GitHub Pages 文档配置 CNAME 文件。

## 自定义域名（可选）

1. 在项目根目录创建 `CNAME` 文件：
```
yourdomain.com
```

2. 在域名提供商处配置 DNS 记录指向 GitHub Pages。

3. 在 GitHub 仓库设置中配置自定义域名。

## 故障排除

### 网站显示 404

- 确保 `dist/public` 目录中有 `index.html`
- 检查 GitHub Pages 设置中的源分支和目录
- 清除浏览器缓存

### 样式未加载

- 确保 CSS 文件路径正确
- 检查 `dist/public/assets` 目录中是否有 CSS 文件
- 在浏览器开发者工具中检查网络请求

### 图片未显示

- 确保图片 URL 是绝对路径或相对路径正确
- 检查图片是否在 `dist/public` 中

## 更新网站

每次更新代码后：

1. 提交更改：
```bash
git add .
git commit -m "Update content"
```

2. 推送到 GitHub：
```bash
git push origin main
```

3. GitHub Actions 会自动构建并部署，或手动运行部署脚本。

## 参考资源

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
