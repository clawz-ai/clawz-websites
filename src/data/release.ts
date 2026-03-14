const API_URL = 'https://api.github.com/repos/clawz-ai/ClawZ/releases/latest';

export interface ReleaseAsset {
  version: string;
  arm64Url: string;
  x64Url: string;
}

let cached: ReleaseAsset | undefined;

function findAssetUrl(
  assets: Array<{ name?: string; browser_download_url?: string }>,
  pattern: RegExp
): string | undefined {
  return assets.find((asset) => asset.name?.endsWith('.dmg') && pattern.test(asset.name))?.browser_download_url;
}

export async function getLatestRelease(): Promise<ReleaseAsset | undefined> {
  if (cached) return cached;

  try {
    const res = await fetch(API_URL, {
      headers: { 'User-Agent': 'clawz-website' },
    });
    if (!res.ok) return undefined;

    const data = await res.json();
    if (!data?.assets) return undefined;

    const arm64Url = findAssetUrl(data.assets, /(arm64|aarch64)/i);
    const x64Url = findAssetUrl(data.assets, /(x64|x86_64)/i);

    if (arm64Url && x64Url) {
      cached = {
        version: data.tag_name?.replace(/^v/, '') || '',
        arm64Url,
        x64Url,
      };
      return cached;
    }
  } catch {}

  return undefined;
}
