export interface Feature {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
}

export const features: Feature[] = [
  { id: 'workshop', icon: 'Layers', titleKey: 'features.workshop', descKey: 'features.workshop' },
  { id: 'agents', icon: 'Bot', titleKey: 'features.agents', descKey: 'features.agents' },
  { id: 'models', icon: 'Brain', titleKey: 'features.models', descKey: 'features.models' },
  { id: 'channels', icon: 'MessageSquare', titleKey: 'features.channels', descKey: 'features.channels' },
  { id: 'cost', icon: 'BarChart3', titleKey: 'features.cost', descKey: 'features.cost' },
  { id: 'ops', icon: 'Activity', titleKey: 'features.ops', descKey: 'features.ops' },
];
