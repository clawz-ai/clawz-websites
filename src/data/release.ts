const API_URL = 'https://api.github.com/repos/clawz-ai/ClawZ/releases/latest';

export interface ReleaseAsset {
  version: string;
  aarch64Url: string;
  x64Url: string;
}

let cached: ReleaseAsset | undefined;

export async function getLatestRelease(): Promise<ReleaseAsset | undefined> {
  if (cached) return cached;

  try {
    const res = await fetch(API_URL, {
      headers: { 'User-Agent': 'clawz-website' },
    });
    if (!res.ok) return undefined;

    const data = await res.json();
    if (!data?.assets) return undefined;

    const aarch64 = data.assets.find(
      (a: { name: string }) => a.name.endsWith('.dmg') && a.name.includes('aarch64')
    );
    const x64 = data.assets.find(
      (a: { name: string }) => a.name.endsWith('.dmg') && a.name.includes('x64')
    );

    if (aarch64 && x64) {
      cached = {
        version: data.tag_name?.replace(/^v/, '') || '',
        aarch64Url: aarch64.browser_download_url,
        x64Url: x64.browser_download_url,
      };
      return cached;
    }
  } catch {}

  return undefined;
}
