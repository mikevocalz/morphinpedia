import '../global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Provider } from 'app/provider';
import * as Font from 'expo-font';
import { Stack, Slot, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { setAndroidNavigationBar } from '../lib/android-navigation-bar';
import { NAV_THEME } from '../lib/constants';
import { useColorScheme } from '../lib/useColorScheme';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const hasMounted = useRef(false);
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === 'web') {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add('bg-background');
    }

    async function init() {
      await Font.loadAsync({
        ...FontAwesome.font,
        'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
      });
    }
    setAndroidNavigationBar(colorScheme);
    setIsColorSchemeLoaded(true);
    init();
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) {
    return (
      <Provider>
        <ActivityIndicator color="red" size="large" style={{ flex: 1, justifyContent: 'center' }} />
      </Provider>
    );
  }



  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider>
          <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
          <Slot />
          <PortalHost />
        </Provider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined' ? useEffect : useLayoutEffect;
