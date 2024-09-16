import { Stack } from 'expo-router';
import { StatusBar, View } from 'react-native';

import colors from '@constants/colors.js';

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.bg1,
        },
        animation: 'none',
        statusBarStyle: 'light',
        statusBarColor: colors.bg1,
      }}
    />
  );
}
