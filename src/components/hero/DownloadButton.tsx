import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

interface ReleaseAsset {
  version: string;
  aarch64Url: string;
  x64Url: string;
}

interface Props {
  locale: 'en' | 'zh';
  release?: ReleaseAsset;
}

type Platform = 'mac' | 'windows' | 'linux';

function detectPlatform(): Platform {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('mac')) return 'mac';
  if (ua.includes('win')) return 'windows';
  return 'linux';
}

function isAppleSilicon(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (gl) {
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      if (ext) {
        const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
        return /apple m/i.test(renderer);
      }
    }
  } catch {}
  return false;
}

const GITHUB_RELEASES = 'https://github.com/clawz-ai/ClawZ/releases';

export default function DownloadButton({ locale, release }: Props) {
  const [platform, setPlatform] = useState<Platform>('mac');
  const [arch, setArch] = useState<'aarch64' | 'x64'>('aarch64');

  useEffect(() => {
    setPlatform(detectPlatform());
    setArch(isAppleSilicon() ? 'aarch64' : 'x64');
  }, []);

  const isMac = platform === 'mac';
  const dmgUrl = release
    ? (arch === 'aarch64' ? release.aarch64Url : release.x64Url)
    : null;
  const downloadUrl = isMac && dmgUrl ? dmgUrl : GITHUB_RELEASES;
  const versionLabel = release?.version ? ` v${release.version}` : '';

  const label = locale === 'zh'
    ? (isMac ? `下载 macOS 版${versionLabel}` : 'macOS 版下载')
    : (isMac ? `Download for macOS${versionLabel}` : 'Download for macOS');
  const comingSoon = locale === 'zh'
    ? (platform === 'windows' ? 'Windows 版即将推出' : 'Linux 版即将推出')
    : (platform === 'windows' ? 'Windows coming soon' : 'Linux coming soon');

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <a
        href={downloadUrl}
        target={dmgUrl ? undefined : '_blank'}
        rel={dmgUrl ? undefined : 'noopener noreferrer'}
        className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-light px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      >
        <Download className="h-5 w-5" />
        {label}
        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
      <a
        href="https://github.com/clawz-ai/ClawZ"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-medium text-text-secondary transition-all hover:border-primary/50 hover:text-white hover:-translate-y-0.5"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        {locale === 'zh' ? '在 GitHub 上查看' : 'View on GitHub'}
      </a>
      {!isMac && (
        <span className="text-xs text-text-muted">{comingSoon}</span>
      )}
    </div>
  );
}
