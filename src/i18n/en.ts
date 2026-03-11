export const en = {
  // Meta
  'meta.title': 'ClawZ - AI Agent Scenario Workshop',
  'meta.description': 'Select a scenario, 5 minutes to get a working AI assistant. No CLI, no config files — just a beautiful native desktop app.',

  // Navbar
  'nav.features': 'Features',
  'nav.scenarios': 'Scenarios',
  'nav.download': 'Download',
  'nav.github': 'GitHub',

  // Hero
  'hero.titlePrefix': 'Your',
  'hero.titleOpenClaw': 'OpenClaw',
  'hero.titleSuffix': 'AI Agents,',
  'hero.titleHighlight': 'One Click Away',
  'hero.subtitle': 'One-click deploy, scenario-driven, fully managed — build your own OpenClaw AI agents.',
  'hero.download': 'Download for',
  'hero.downloadMac': 'Download for macOS',
  'hero.downloadWin': 'Download for Windows',
  'hero.downloadLinux': 'Download for Linux',
  'hero.viewGithub': 'View on GitHub',
  'hero.platforms': 'Available for macOS · Windows & Linux coming soon',

  // Value Proposition
  'value.setup.title': '5-Minute Setup',
  'value.setup.desc': 'From zero to a working AI assistant with a guided step-by-step wizard. No terminal, no config files.',
  'value.scenarios.title': 'Scenario Templates',
  'value.scenarios.desc': 'Pre-built agent personas for common use cases — writing, daily briefings, email, DevOps, and more.',
  'value.channels.title': 'Multi-Channel',
  'value.channels.desc': 'Deploy across Telegram, Discord, Feishu, Slack, and WhatsApp — all configured from one place.',

  // Features
  'features.title': 'Everything You Need',
  'features.subtitle': 'A comprehensive toolkit for building, deploying, and managing AI agents.',
  'features.workshop.title': 'Scenario Workshop',
  'features.workshop.desc': 'Browse and deploy pre-built agent scenarios. Each comes with a carefully crafted persona, skills, and tool configurations.',
  'features.agents.title': 'Agent Management',
  'features.agents.desc': 'Create agents, assign personas, bind to messaging channels, and manage their entire lifecycle from a single dashboard.',
  'features.models.title': 'Multi-Provider Models',
  'features.models.desc': 'Connect to OpenAI, Anthropic, MiniMax, Zhipu AI, and Qwen. Authenticate via API key or OAuth with one click.',
  'features.channels.title': 'Multi-Channel Messaging',
  'features.channels.desc': 'Set up Telegram, Discord, Feishu, Slack, and WhatsApp with built-in step-by-step guides.',
  'features.cost.title': 'Cost Dashboard',
  'features.cost.desc': 'Track token usage in real time. See daily cost breakdowns by model and provider, in USD or CNY.',
  'features.ops.title': 'Log Center',
  'features.ops.desc': 'Stream agent logs in real time, filter by level and source, and quickly diagnose issues.',

  // Scenarios
  'scenarios.title': 'Pre-Built Scenarios for Every Use Case',
  'scenarios.subtitle': 'Get started instantly with expertly crafted agent personas. Each scenario includes a unique personality, skills, and automation.',
  'scenario.default.name': 'Default Assistant',
  'scenario.default.desc': 'A versatile AI assistant ready out of the box. Coding, writing, research, file management — one agent handles it all.',
  'scenario.writer.name': 'Content Pipeline',
  'scenario.writer.desc': 'From outline to final draft. Adjust style and tone for efficient content production across formats.',
  'scenario.morning.name': 'Daily Briefing',
  'scenario.morning.desc': 'Automated morning news digest. Summarizes your feeds, emails, and calendar into a concise daily report.',
  'scenario.email.name': 'Email Manager',
  'scenario.email.desc': 'Intelligent email triage and response drafting. Categorize, prioritize, and draft replies automatically.',
  'scenario.ops.name': 'Ops Dashboard',
  'scenario.ops.desc': 'Infrastructure monitoring assistant. Watches logs, alerts on anomalies, and suggests remediation steps.',
  'scenario.debate.name': "Devil's Advocate",
  'scenario.debate.desc': 'Multi-agent decision support. Multiple AI advisors debate pros and cons to help you make better decisions.',

  // How It Works
  'steps.title': 'Up and Running in Minutes',
  'steps.subtitle': 'Three simple steps from download to a live AI agent.',
  'steps.1.title': 'Download & Install',
  'steps.1.desc': 'Download ClawZ. Launch it and the guided wizard takes care of the rest.',
  'steps.2.title': 'Choose a Scenario',
  'steps.2.desc': 'Pick from pre-built agent personas or create your own. Configure your AI model and messaging channels.',
  'steps.3.title': 'Your Agent is Live',
  'steps.3.desc': 'Your agent runs 24/7, accessible from your favorite messaging apps. Monitor costs and logs from the dashboard.',

  // Tech
  'tech.title': 'Built for Performance & Security',
  'tech.native.title': 'Native Performance',
  'tech.native.desc': 'Powered by Tauri 2 and Rust. Launches fast with minimal resource usage.',
  'tech.crossplatform.title': 'Cross-Platform',
  'tech.crossplatform.desc': 'Available for macOS, Windows, and Linux.',
  'tech.bilingual.title': 'Bilingual',
  'tech.bilingual.desc': 'Full Chinese and English interface.',
  'tech.opensource.title': 'Open Source',
  'tech.opensource.desc': 'MIT licensed. Community-driven development.',
  'tech.secure.title': 'Privacy First',
  'tech.secure.desc': 'Your data stays local. API keys never leave your machine.',
  'tech.multiagent.title': 'Multi-Agent',
  'tech.multiagent.desc': 'Orchestrate multiple agents with different roles.',
  'tech.cron.title': 'Cron Scheduling',
  'tech.cron.desc': 'Visual cron job management. Schedule agents to run on any cadence.',
  'tech.backup.title': 'Backup & Restore',
  'tech.backup.desc': 'Export and import all configurations as ZIP. Never lose your setup.',
  'tech.gateway.title': 'Gateway Control',
  'tech.gateway.desc': 'Start, stop, and restart the OpenClaw gateway from the UI.',
  'tech.uninstall.title': 'One-Click Uninstall',
  'tech.uninstall.desc': 'Cleanly remove OpenClaw and all related data with one click.',

  // CTA
  'cta.title': 'Start Building Your AI Agents Today',
  'cta.subtitle': 'Download ClawZ and have your first AI assistant running in 5 minutes.',

  // Footer
  'footer.tagline': 'AI Agent Scenario Workshop',
  'footer.product': 'Product',
  'footer.resources': 'Resources',
  'footer.docs': 'Documentation',
  'footer.changelog': 'Changelog',
  'footer.builtWith': 'Built with Tauri, React, and Rust',
  'footer.copyright': '2026 ClawZ Contributors. MIT License.',
} as const;

export type TranslationKey = keyof typeof en;
