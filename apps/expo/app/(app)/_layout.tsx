import { Stack, Redirect } from 'expo-router';

export default function AppLayout() {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Redirect href="/(auth)/userAccess" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
