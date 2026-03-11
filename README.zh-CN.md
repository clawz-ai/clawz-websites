[English](README.md) | [中文](README.zh-CN.md)

<p align="center">
  <img src="public/logo-icon.png" width="80" alt="ClawZ Logo" />
</p>

<p align="center">
  <strong><a href="https://github.com/clawz-ai/ClawZ">ClawZ</a> 官方网站 — OpenClaw AI Agent 场景工坊。</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/clawz-ai/clawz-websites" alt="License" /></a>
</p>

## 技术栈

- [Astro 5](https://astro.build/) — 静态优先框架
- [React](https://react.dev/) — 交互式岛屿架构
- [Tailwind CSS v4](https://tailwindcss.com/) — 样式
- [Framer Motion](https://motion.dev/) — 动画
- [TypeScript](https://www.typescriptlang.org/)

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 项目结构

```
src/
├── components/     # Astro & React 组件
│   ├── hero/       # 首屏 + 下载按钮
│   ├── features/   # 功能标签页（含截图）
│   ├── scenarios/  # 场景展示
│   ├── steps/      # 使用步骤
│   ├── tech/       # 技术亮点
│   ├── cta/        # 下载 CTA
│   ├── layout/     # 导航栏 & 页脚
│   └── ui/         # 通用 UI 组件
├── i18n/           # 中英文翻译
├── layouts/        # HTML 基础布局
├── pages/          # 路由页面（en + zh）
├── data/           # 静态数据（功能、场景）
└── styles/         # 全局 CSS & Tailwind 主题
public/
├── screenshots/    # 应用截图（中英文）
└── ...             # Logo、favicon
```

## 国际化

网站支持英文（默认）和中文。英文在 `/`，中文在 `/zh/`。

翻译文件：`src/i18n/en.ts` 和 `src/i18n/zh.ts`。

## 许可证

[MIT](LICENSE)
