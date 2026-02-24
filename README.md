# Transformer 架构初学者指南

一个面向初学者的网站，深入浅出地讲解 LLM Transformer 架构的核心原理。

## 项目概述

本项目使用现代 Web 技术栈构建，采用**科技极简主义**设计风格，旨在帮助初学者理解 Transformer 这一革命性的神经网络架构。

### 设计特色

- **色彩方案**：深蓝色（#1a3a52）代表技术深度，亮橙色（#ff6b35）用于强调关键信息
- **排版**：Poppins 字体用于标题（现代感），Inter 字体用于正文（高可读性）
- **布局**：左侧导航 + 右侧内容，大量留白让复杂概念易于理解
- **动画**：微妙的淡入、悬停效果和滚动视差，强化技术感

## 内容结构

1. **首页（Hero Section）** - 引人入胜的介绍和架构概览
2. **核心概念** - Transformer 是什么及其重要性
3. **架构讲解** - 嵌入层、注意力机制、多头注意力、前馈网络
4. **应用展示** - 模型演进时间线和实际应用
5. **交互学习** - 可视化演示和常见问题解答

## 技术栈

- **前端框架**：React 19 + TypeScript
- **样式**：Tailwind CSS 4 + shadcn/ui
- **路由**：Wouter
- **构建工具**：Vite
- **字体**：Google Fonts (Poppins + Inter)

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 `http://localhost:3000` 查看网站。

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 项目结构

```
transformer-guide/
├── client/
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css
│       ├── pages/
│       │   ├── Home.tsx
│       │   └── NotFound.tsx
│       ├── components/
│       │   └── ErrorBoundary.tsx
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       ├── hooks/
│       ├── lib/
│       └── ui/
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 核心概念

### Transformer 架构三大组件

1. **嵌入层（Embedding）**
   - 将文本词元转换为数值向量
   - 添加位置编码帮助模型理解序列顺序

2. **注意力机制（Attention）**
   - 核心创新：自注意力让词元相互通信
   - 多头注意力从不同角度捕捉关系
   - 计算注意力分数确定关注焦点

3. **前馈网络（Feed-Forward）**
   - 对每个词元独立进行精化处理
   - 与注意力层配合提升模型表现

## 设计理念

本网站采用**科技极简主义**风格，强调：

- **极简而精准**：去除所有装饰，只保留必要元素
- **功能优先**：每个设计元素都有明确的信息传达目的
- **对比鲜明**：使用高对比度突出关键信息
- **网格驱动**：严格的网格系统确保秩序感

## 部署

本项目可以部署到 GitHub Pages 或任何支持静态网站的平台。

### GitHub Pages 部署

1. 创建 GitHub 仓库
2. 运行 `pnpm build` 生成生产版本
3. 将 `dist` 文件夹推送到 `gh-pages` 分支
4. 在 GitHub 仓库设置中启用 GitHub Pages

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！

## 参考资源

- [Attention is All You Need](https://arxiv.org/abs/1706.03762)
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/)
