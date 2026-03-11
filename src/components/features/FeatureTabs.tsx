import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Bot, Brain, MessageSquare, BarChart3, Activity } from 'lucide-react';

interface Props {
  locale: 'en' | 'zh';
}

const icons = [Layers, Bot, Brain, MessageSquare, BarChart3, Activity];

const featureData = {
  en: [
    { title: 'Scenario Workshop', desc: 'Browse and deploy pre-built agent scenarios. Each comes with a carefully crafted persona, skills, and tool configurations.' },
    { title: 'Agent Management', desc: 'Create agents, assign personas, bind to messaging channels, and manage their entire lifecycle from a single dashboard.' },
    { title: 'Multi-Provider Models', desc: 'Connect to OpenAI, Anthropic, MiniMax, Zhipu AI, and Qwen. Authenticate via API key or OAuth with one click.' },
    { title: 'Multi-Channel Messaging', desc: 'Set up Telegram, Discord, Feishu, Slack, and WhatsApp with built-in step-by-step guides.' },
    { title: 'Cost Dashboard', desc: 'Track token usage in real time. See daily cost breakdowns by model and provider, in USD or CNY.' },
    { title: 'Log Center', desc: 'Stream agent logs in real time, filter by level and source, and quickly diagnose issues.' },
  ],
  zh: [
    { title: '场景工坊', desc: '浏览并部署预置 Agent 场景。每个场景包含精心设计的人设、技能和工具配置。' },
    { title: 'Agent 管理', desc: '创建 Agent、分配人设、绑定消息渠道，在一个界面管理全生命周期。' },
    { title: '多模型支持', desc: '连接 OpenAI、Anthropic、MiniMax、智谱 AI、通义千问。支持 API Key 和 OAuth 认证。' },
    { title: '多渠道消息', desc: '内置 Telegram、Discord、飞书、Slack、WhatsApp 配置向导，一步到位。' },
    { title: '费用看板', desc: '实时追踪 Token 用量，按模型和 Provider 展示每日成本，支持 USD/CNY。' },
    { title: '日志中心', desc: '实时查看 Agent 日志流，按级别和来源筛选，快速定位问题。' },
  ],
};

// Screenshot file names matching each feature tab
const featureScreenshots = [
  'feature-workshop',
  'feature-agents',
  'feature-models',
  'feature-channels',
  'feature-cost',
  'feature-logs',
];

export default function FeatureTabs({ locale }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const data = featureData[locale];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % data.length);
  }, [data.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [paused, advance]);

  const lang = locale === 'zh' ? 'zh' : 'en';
  const screenshotSrc = `/screenshots/${featureScreenshots[active]}-${lang}.png`;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Tab list */}
      <div className="lg:col-span-4">
        <div className="flex flex-col gap-1">
          {data.map((feature, i) => {
            const Icon = icons[i];
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => { setActive(i); setPaused(true); }}
                className={`group flex items-start gap-3 rounded-xl px-4 py-3.5 text-left transition-all ${
                  isActive
                    ? 'bg-bg-elevated/80 shadow-sm'
                    : 'hover:bg-bg-elevated/40'
                }`}
              >
                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isActive ? 'bg-primary/20 text-primary-light' : 'bg-bg-surface text-text-secondary group-hover:text-text-primary'
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-text-secondary group-hover:text-white'}`}>
                    {feature.title}
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-1 text-xs leading-relaxed text-text-secondary"
                    >
                      {feature.desc}
                    </motion.p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl border border-border/50"
          >
            {/* macOS window chrome */}
            <div className="flex items-center gap-2 border-b border-border/50 bg-bg-surface/80 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs text-text-muted">ClawZ — {data[active].title}</span>
            </div>

            {/* Feature screenshot */}
            <img
              src={screenshotSrc}
              alt={data[active].title}
              className="block w-full"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
