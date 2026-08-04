export interface AppData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
  status: 'live' | 'new' | 'coming-soon';
  playStoreUrl?: string;
  appStoreUrl?: string;
  features: string[];
  screenshots: string[];
}

export const APPS: AppData[] = [
  {
    id: 'universal-scanner',
    name: 'Universal Scanner',
    category: 'Productivity & Utilities',
    tagline: 'Scan Any Barcode Instantly. Fast, Private & Free.',
    description: 'A privacy-first, lightning fast barcode and QR code scanner. Built with embedded machine learning so all scan processing happens 100% locally on your device without sending data to external servers.',
    icon: '/assets/universal-scanner/icon.png',
    status: 'live',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cosphere.barcode_reader',
    features: [
      'Fast on-device computer vision scanning',
      'Generate custom QR codes for Wi-Fi, URLs & text',
      'Save and export scan history to PDF or CSV',
      'No account registration or cloud login required'
    ],
    screenshots: Array.from({ length: 6 }, (_, i) => `/assets/universal-scanner/screenshots/screenshot${i + 1}.png`),
  },
  {
    id: 'music-bridge',
    name: 'Music Bridge',
    category: 'Music & Entertainment',
    tagline: 'Move Your Playlists Between Spotify and Apple Music.',
    description: 'Bridge your music streaming ecosystem. Seamlessly transfer playlists, track metadata, and favorites across streaming platforms with sub-second matching accuracy.',
    icon: '/assets/music-bridge/icon.svg',
    status: 'new',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cranbear.music_bridge',
    features: [
      'Multi-platform streaming API synchronization',
      'Lossless track matching & playlist transfer',
      'Encrypted hardware token keychain security',
      'Real-time migration progress telemetry'
    ],
    screenshots: Array.from({ length: 16 }, (_, i) => `/assets/music-bridge/screenshots/screenshot${i + 1}.png`),
  },
  {
    id: 'cosphere',
    name: 'CoSphere',
    category: 'Real Estate & Community',
    tagline: 'Simple Housing & Gate Security for Your Community.',
    description: 'Comprehensive property administration, tenant roster synchronization, gate access security, and automated maintenance dispatch system.',
    icon: '/assets/cosphere/icon.svg',
    status: 'coming-soon',
    features: [
      'Real-time gate pass verification & RFID telemetry',
      'Tenant roster sync with offline-first database',
      'Role-based permissions & audit history logs',
      'Automated maintenance ticket dispatch engine'
    ],
    screenshots: [],
  },
];

export function getAppById(id: string): AppData | undefined {
  return APPS.find((app) => app.id === id);
}
