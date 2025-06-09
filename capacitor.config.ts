import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ashish.app',
  appName: 'Appflow Demo',
  webDir: 'dist',
  server:{
    androidScheme: 'https',
  },
  plugins: {
    LiveUpdates: {
      appId: 'd4daf7dd',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
