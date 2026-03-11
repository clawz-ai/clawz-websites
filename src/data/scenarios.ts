export interface Scenario {
  id: string;
  emoji: string;
  nameKey: string;
  descKey: string;
  tags: string[];
  tagsZh: string[];
}

export const scenarios: Scenario[] = [
  {
    id: 'default',
    emoji: '✨',
    nameKey: 'scenario.default',
    descKey: 'scenario.default',
    tags: ['General', 'Coding', 'Writing', 'Productivity'],
    tagsZh: ['通用', '编程', '写作', '效率'],
  },
  {
    id: 'writer',
    emoji: '✍️',
    nameKey: 'scenario.writer',
    descKey: 'scenario.writer',
    tags: ['Writing', 'Content', 'Creative'],
    tagsZh: ['写作', '内容', '创意'],
  },
  {
    id: 'morning',
    emoji: '🌅',
    nameKey: 'scenario.morning',
    descKey: 'scenario.morning',
    tags: ['Automation', 'News', 'Daily'],
    tagsZh: ['自动化', '新闻', '日报'],
  },
  {
    id: 'email',
    emoji: '📧',
    nameKey: 'scenario.email',
    descKey: 'scenario.email',
    tags: ['Email', 'Automation', 'Productivity'],
    tagsZh: ['邮件', '自动化', '效率'],
  },
  {
    id: 'ops',
    emoji: '🔧',
    nameKey: 'scenario.ops',
    descKey: 'scenario.ops',
    tags: ['DevOps', 'Monitoring', 'Infrastructure'],
    tagsZh: ['运维', '监控', '基础设施'],
  },
  {
    id: 'debate',
    emoji: '🎯',
    nameKey: 'scenario.debate',
    descKey: 'scenario.debate',
    tags: ['Multi-Agent', 'Decision', 'Analysis'],
    tagsZh: ['多Agent', '决策', '分析'],
  },
];
