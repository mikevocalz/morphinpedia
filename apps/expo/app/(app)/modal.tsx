import { StatusBar } from 'expo-status-bar';
import { Platform, View, Text } from 'react-native';

export default function Modal() {
  return (
    <View className="min-h-screen w-full flex-1 items-center gap-8 bg-red-500">
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text>Modal</Text>
    </View>
  );
}
