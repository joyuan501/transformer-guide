# Transformer 架构网站 - GitHub Pages 部署图文教程

本教程将逐步指导您如何将 Transformer 架构初学者指南网站部署到 GitHub Pages，获得永久 URL。

## 📋 部署流程概览

```
创建 GitHub 仓库 → 初始化 Git → 构建项目 → 推送代码 → 启用 GitHub Pages → 自动构建 → 网站上线
```

---

## 第 1 步：创建 GitHub 仓库

### 操作步骤

1. 访问 [GitHub.com](https://github.com)，登录您的账户
2. 点击右上角 **+** 图标，选择 **New repository**
3. 填写仓库信息：
   - **Repository name**: `transformer-guide`
   - **Description**: `A beginner-friendly guide to understanding LLM Transformer architecture`
   - **Visibility**: 选择 **Public**（如果希望网站公开访问）或 **Private**
   - 勾选 **Add a README file**（可选）

4. 点击蓝色的 **Create repository** 按钮

![Step 1: Create GitHub Repository](https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/wWyNXiFqmx6nC2BozSm5i8-img-1_1771947703000_na1fn_ZGVwbG95bWVudC1zdGVwMQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)

---

## 第 2 步：启用 GitHub Pages

### 操作步骤

1. 进入您创建的仓库页面
2. 点击顶部的 **Settings** 标签
3. 在左侧菜单中找到 **Pages** 选项，点击它
4. 在 **Source** 部分：
   - 选择 **Deploy from a branch**
   - 分支选择：**main**
   - 目录选择：**/ (root)**
5. 点击 **Save** 按钮

系统会显示您的网站将发布在：`https://your-username.github.io/transformer-guide`

![Step 2: Enable GitHub Pages](https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/wWyNXiFqmx6nC2BozSm5i8-img-2_1771947713000_na1fn_ZGVwbG95bWVudC1zdGVwMg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)

---

## 第 3 步：在本地准备项目

### 前置要求

确保您已安装：
- Git
- Node.js 20+
- pnpm

### 操作步骤

1. **打开终端**，进入项目目录：
```bash
cd /home/ubuntu/transformer-guide
```

2. **初始化 Git 仓库**（如果还未初始化）：
```bash
git init
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

3. **添加所有文件到 Git**：
```bash
git add .
git commit -m "Initial commit: Transformer architecture guide website"
```

4. **添加远程仓库**：
```bash
git remote add origin https://github.com/YOUR_USERNAME/transformer-guide.git
```

5. **重命名分支为 main**（如果需要）：
```bash
git branch -M main
```

---

## 第 4 步：构建项目

### 操作步骤

1. **安装依赖**（如果还未安装）：
```bash
pnpm install
```

2. **构建生产版本**：
```bash
pnpm build
```

构建完成后，您会看到类似的输出：
```
✓ 1616 modules transformed.
✓ built in 3.61s
../dist/public/index.html                   0.99 kB
../dist/public/assets/index-DmdIsgE4.css   24.67 kB
../dist/public/assets/index-BIOTyDZe.js   293.82 kB
```

这表示生产版本已成功构建到 `dist/public` 目录。

---

## 第 5 步：推送代码到 GitHub

### 操作步骤

在终端中执行以下命令：

```bash
# 推送代码到 GitHub
git push -u origin main
```

![Step 3: Push Code to GitHub](https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/wWyNXiFqmx6nC2BozSm5i8-img-3_1771947715000_na1fn_ZGVwbG95bWVudC1zdGVwMw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)

成功后，您会看到：
```
To https://github.com/YOUR_USERNAME/transformer-guide.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 第 6 步：自动部署（GitHub Actions）

### 工作原理

项目中已包含 GitHub Actions 工作流（`.github/workflows/deploy.yml`），它会：

1. 监听 `main` 分支的推送事件
2. 自动安装依赖
3. 自动构建项目
4. 自动部署到 GitHub Pages

### 查看部署状态

1. 进入您的 GitHub 仓库
2. 点击 **Actions** 标签
3. 您会看到正在运行的工作流
4. 等待工作流完成（通常需要 2-5 分钟）

工作流完成后，您会看到一个绿色的 ✓ 标记。

---

## 第 7 步：访问您的网站

### 永久 URL

部署完成后，您的网站将在以下 URL 可用：

```
https://YOUR_USERNAME.github.io/transformer-guide
```

**例如**：如果您的 GitHub 用户名是 `john-doe`，则网站 URL 为：
```
https://john-doe.github.io/transformer-guide
```

### 验证部署

1. 在浏览器中访问上述 URL
2. 您应该能看到 Transformer 架构初学者指南网站
3. 尝试点击导航菜单，确保所有功能正常

![Step 4: Deployment Complete](https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/wWyNXiFqmx6nC2BozSm5i8-img-4_1771947706000_na1fn_ZGVwbG95bWVudC1zdGVwNA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)

---

## 📊 完整部署流程图

![Deployment Flowchart](https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/wWyNXiFqmx6nC2BozSm5i8-img-5_1771947703000_na1fn_ZGVwbG95bWVudC1mbG93Y2hhcnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)

---

## 🔧 更新网站内容

每次更新网站内容后，只需执行以下步骤：

### 1. 修改代码

编辑项目文件（例如 `client/src/pages/Home.tsx`）

### 2. 提交更改

```bash
git add .
git commit -m "Update: Add new content about Transformer"
```

### 3. 推送到 GitHub

```bash
git push origin main
```

GitHub Actions 会自动：
- 检测到新的推送
- 重新构建项目
- 自动部署到 GitHub Pages

您的网站会在 2-5 分钟内更新。

---

## ❓ 常见问题

### Q1: 网站显示 404 错误

**解决方案**：
- 确保 GitHub Pages 已启用（Settings → Pages）
- 检查分支是否为 `main`
- 清除浏览器缓存（Ctrl+Shift+Delete）
- 等待 5-10 分钟后重新访问

### Q2: 样式或图片未加载

**解决方案**：
- 检查浏览器开发者工具（F12）中的网络请求
- 确保 CSS 和图片文件在 `dist/public/assets` 中
- 尝试硬刷新（Ctrl+Shift+R）

### Q3: 如何使用自定义域名？

**步骤**：
1. 在项目根目录创建 `CNAME` 文件，内容为您的域名
2. 在域名提供商处配置 DNS 记录
3. 在 GitHub Pages 设置中配置自定义域名

### Q4: 如何回滚到之前的版本？

**步骤**：
```bash
# 查看提交历史
git log

# 回滚到指定提交
git reset --hard <commit-hash>

# 推送更改
git push -f origin main
```

---

## 📚 相关资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Git 教程](https://git-scm.com/doc)
- [项目 README](./README.md)
- [部署指南](./DEPLOYMENT.md)

---

## ✅ 部署检查清单

- [ ] 创建了 GitHub 仓库
- [ ] 启用了 GitHub Pages
- [ ] 初始化了本地 Git 仓库
- [ ] 安装了项目依赖
- [ ] 成功构建了项目
- [ ] 推送代码到 GitHub
- [ ] GitHub Actions 工作流成功完成
- [ ] 网站在永久 URL 可访问
- [ ] 验证了所有功能正常工作

---

祝您部署顺利！如有任何问题，请参考上述常见问题或查阅 GitHub 官方文档。🚀
