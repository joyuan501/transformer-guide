export const translations = {
  en: {
    // Navigation
    nav: {
      overview: "Overview",
      architecture: "Architecture",
      timeline: "Timeline",
    },
    // Hero Section
    hero: {
      title: "Understand",
      titleHighlight: "Transformer",
      titleEnd: "Architecture",
      description:
        "A comprehensive guide to understanding how Transformer models work, from basic concepts to advanced mechanisms. Perfect for beginners diving into Large Language Models.",
      learnNow: "Learn Now",
      documentation: "Documentation",
    },
    // Overview Section
    overview: {
      title: "What is Transformer?",
      cards: [
        {
          title: "Neural Network Architecture",
          description:
            "Transformer is a revolutionary neural network architecture introduced in 2017 that fundamentally changed how we approach AI and natural language processing.",
        },
        {
          title: "Self-Attention Mechanism",
          description:
            "The core innovation: self-attention allows the model to process entire sequences and capture long-range dependencies more effectively than previous architectures.",
        },
        {
          title: "Foundation of LLMs",
          description:
            "Transformers power all modern large language models including GPT, BERT, and Llama, making them essential to understand for AI enthusiasts.",
        },
      ],
    },
    // Architecture Section
    architecture: {
      title: "Core Components",
      components: [
        {
          title: "1. Embedding Layer",
          description:
            "Text input is divided into tokens (words or subwords), which are converted into numerical vectors called embeddings. Position encodings are added to help the model understand sequence order.",
        },
        {
          title: "2. Self-Attention Mechanism",
          description:
            "Each token computes Query, Key, and Value vectors. The attention mechanism calculates how much focus each token should receive from other tokens, enabling the model to understand context and relationships.",
        },
        {
          title: "3. Transformer Blocks",
          description:
            "Multiple transformer blocks are stacked together. Each block contains an attention layer and a feed-forward network, allowing the model to learn increasingly complex representations.",
        },
      ],
    },
    // Timeline Section
    timeline: {
      title: "Evolution of Transformer Models",
    },
    // Footer
    footer: {
      copyright: "© 2024 Transformer Guide. A beginner-friendly introduction to LLM architecture.",
    },
  },
  zh: {
    // Navigation
    nav: {
      overview: "概览",
      architecture: "架构",
      timeline: "时间线",
    },
    // Hero Section
    hero: {
      title: "深入理解",
      titleHighlight: "Transformer",
      titleEnd: "架构",
      description:
        "一份全面的指南，帮助您理解 Transformer 模型的工作原理，从基础概念到高级机制。非常适合初学者深入学习大语言模型。",
      learnNow: "立即学习",
      documentation: "文档",
    },
    // Overview Section
    overview: {
      title: "什么是 Transformer？",
      cards: [
        {
          title: "神经网络架构",
          description:
            "Transformer 是 2017 年引入的革命性神经网络架构，从根本上改变了我们处理 AI 和自然语言处理的方式。",
        },
        {
          title: "自注意力机制",
          description:
            "核心创新：自注意力机制让模型能够处理整个序列，并比以往架构更有效地捕捉长距离依赖关系。",
        },
        {
          title: "LLM 的基础",
          description:
            "所有现代大语言模型（包括 GPT、BERT 和 Llama）都基于 Transformer，使其成为 AI 爱好者必须理解的技术。",
        },
      ],
    },
    // Architecture Section
    architecture: {
      title: "核心组件",
      components: [
        {
          title: "1. 嵌入层（Embedding Layer）",
          description:
            "文本输入被分割成词元（词或子词），这些词元被转换为称为嵌入的数值向量。位置编码被添加以帮助模型理解序列顺序。",
        },
        {
          title: "2. 自注意力机制（Self-Attention）",
          description:
            "每个词元计算查询、键和值向量。注意力机制计算每个词元应该从其他词元接收多少关注，使模型能够理解上下文和关系。",
        },
        {
          title: "3. Transformer 块（Transformer Blocks）",
          description:
            "多个 Transformer 块堆叠在一起。每个块包含一个注意力层和一个前馈网络，允许模型学习越来越复杂的表示。",
        },
      ],
    },
    // Timeline Section
    timeline: {
      title: "Transformer 模型的演进",
    },
    // Footer
    footer: {
      copyright: "© 2024 Transformer 架构初学者指南。一份面向初学者的 LLM 架构介绍。",
    },
  },
};

export type Language = keyof typeof translations;
