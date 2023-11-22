import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.waaps.guardwatch',
  appName: 'guard-watch',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
