import { Stack, Redirect } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="userAccess" options={{ title: 'Sign In' }} />
      <Stack.Screen name="reset" options={{ title: 'Reset Password' }} />
    </Stack>
  );
}
