import type { TranslationKey } from './en';

export const zh: Record<TranslationKey, string> = {
  // Meta
  'meta.title': 'ClawZ - AI Agent 场景工坊',
  'meta.description': '选择一个场景，5 分钟获得可用的 AI 助手。无需命令行，无需配置文件——原生桌面应用，开箱即用。',

  // Navbar
  'nav.features': '功能',
  'nav.scenarios': '场景',
  'nav.download': '下载',
  'nav.github': 'GitHub',

  // Hero
  'hero.titlePrefix': '你的',
  'hero.titleOpenClaw': 'OpenClaw',
  'hero.titleSuffix': 'AI Agent，',
  'hero.titleHighlight': '一键即达',
  'hero.subtitle': '一键部署、场景驱动、全面管理——打造属于你的 OpenClaw AI Agent。',
  'hero.download': '下载',
  'hero.downloadMac': '下载 macOS 版',
  'hero.downloadWin': '下载 Windows 版',
  'hero.downloadLinux': '下载 Linux 版',
  'hero.viewGithub': '在 GitHub 上查看',
  'hero.platforms': '支持 macOS · Windows 和 Linux 即将推出',

  // Value Proposition
  'value.setup.title': '5 分钟部署',
  'value.setup.desc': '引导式向导，从零到可用 AI 助手。无需终端，无需配置文件。',
  'value.scenarios.title': '场景模板',
  'value.scenarios.desc': '预置 Agent 人设，覆盖写作、日报、邮件、运维等常见场景，开箱即用。',
  'value.channels.title': '多渠道集成',
  'value.channels.desc': '一站式配置 Telegram、Discord、飞书、Slack、WhatsApp 等消息渠道。',

  // Features
  'features.title': '一站式 AI Agent 管理',
  'features.subtitle': '构建、部署、管理 AI Agent 所需的一切。',
  'features.workshop.title': '场景工坊',
  'features.workshop.desc': '浏览并部署预置 Agent 场景。每个场景包含精心设计的人设、技能和工具配置。',
  'features.agents.title': 'Agent 管理',
  'features.agents.desc': '创建 Agent、分配人设、绑定消息渠道，在一个界面管理全生命周期。',
  'features.models.title': '多模型支持',
  'features.models.desc': '连接 OpenAI、Anthropic、MiniMax、智谱 AI、通义千问。支持 API Key 和 OAuth 认证。',
  'features.channels.title': '多渠道消息',
  'features.channels.desc': '内置 Telegram、Discord、飞书、Slack、WhatsApp 配置向导，一步到位。',
  'features.cost.title': '费用看板',
  'features.cost.desc': '实时追踪 Token 用量，按模型和 Provider 展示每日成本，支持 USD/CNY。',
  'features.ops.title': '日志中心',
  'features.ops.desc': '实时查看 Agent 日志流，按级别和来源筛选，快速定位问题。',

  // Scenarios
  'scenarios.title': '预置场景，开箱即用',
  'scenarios.subtitle': '精心设计的 Agent 人设模板，每个场景都包含独特的性格、技能和自动化配置。',
  'scenario.default.name': '默认助手',
  'scenario.default.desc': '开箱即用的全能 AI 助手。编程、写作、信息检索、文件管理——一个 Agent 全搞定。',
  'scenario.writer.name': '内容流水线',
  'scenario.writer.desc': '从大纲到终稿，调节风格和语气，帮你高效产出各类内容。',
  'scenario.morning.name': '每日简报',
  'scenario.morning.desc': '自动化晨间新闻。汇总订阅源、邮件和日历，生成精炼的每日报告。',
  'scenario.email.name': '邮件管家',
  'scenario.email.desc': '智能邮件分拣与回复草拟。自动分类、排序优先级、起草回复。',
  'scenario.ops.name': '运维看板',
  'scenario.ops.desc': '基础设施监控助手。巡检日志、异常告警、提供修复建议。',
  'scenario.debate.name': '左丞右相',
  'scenario.debate.desc': '多 Agent 决策支持。多位 AI 顾问从正反方辩论，帮你做出更好的决策。',

  // How It Works
  'steps.title': '几分钟即可上手',
  'steps.subtitle': '从下载到 AI Agent 上线，只需三步。',
  'steps.1.title': '下载安装',
  'steps.1.desc': '下载 ClawZ，启动后引导向导会帮你完成一切配置。',
  'steps.2.title': '选择场景',
  'steps.2.desc': '挑选预置 Agent 人设或自定义创建。配置 AI 模型与消息渠道。',
  'steps.3.title': 'Agent 上线',
  'steps.3.desc': 'Agent 7×24 运行，通过你的消息应用随时调用。在仪表盘监控费用和日志。',

  // Tech
  'tech.title': '为性能与安全而生',
  'tech.native.title': '原生性能',
  'tech.native.desc': 'Tauri 2 + Rust 驱动，启动迅速，资源占用极低。',
  'tech.crossplatform.title': '跨平台',
  'tech.crossplatform.desc': '支持 macOS、Windows 和 Linux。',
  'tech.bilingual.title': '双语支持',
  'tech.bilingual.desc': '完整的中英文界面。',
  'tech.opensource.title': '开源',
  'tech.opensource.desc': 'MIT 协议，社区驱动开发。',
  'tech.secure.title': '隐私优先',
  'tech.secure.desc': '数据本地存储，API Key 不外泄。',
  'tech.multiagent.title': '多 Agent',
  'tech.multiagent.desc': '编排多个 Agent 扮演不同角色协作。',
  'tech.cron.title': '定时任务',
  'tech.cron.desc': '可视化 Cron 管理，按任意频率调度 Agent 执行。',
  'tech.backup.title': '备份恢复',
  'tech.backup.desc': 'ZIP 格式导入导出全部配置，永不丢失设置。',
  'tech.gateway.title': '网关控制',
  'tech.gateway.desc': '在界面中启停、重启 OpenClaw 网关。',
  'tech.uninstall.title': '一键卸载',
  'tech.uninstall.desc': '一键清理 OpenClaw 及所有相关数据。',

  // CTA
  'cta.title': '今天开始构建你的 AI Agent',
  'cta.subtitle': '下载 ClawZ，5 分钟内让你的第一个 AI 助手运行起来。',

  // Footer
  'footer.tagline': 'AI Agent 场景工坊',
  'footer.product': '产品',
  'footer.resources': '资源',
  'footer.docs': '文档',
  'footer.changelog': '更新日志',
  'footer.builtWith': '使用 Tauri、React 和 Rust 构建',
  'footer.copyright': '2026 ClawZ Contributors. MIT License.',
};
