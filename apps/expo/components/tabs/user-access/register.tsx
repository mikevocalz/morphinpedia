import { Link } from 'expo-router';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useAuthStore } from '../../../store/authStore';
import { useTabStore } from '../../../store/tabStore';
import { Button } from '../../Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../card';
import { Input } from '../../input';
import { Label } from '../../label';
import { Text } from '../../text';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUp = useAuthStore((state) => state.signUp);

  const { activeTab, setActiveTab } = useTabStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-4">Sign In</CardTitle>
        <CardDescription>
          Sign In to have a Morhinominal time. May the Power Always Protect You.
        </CardDescription>
      </CardHeader>
      <CardContent className="native:gap-2 gap-4">
        <View className="gap-1">
          <Label nativeID="current">Current password</Label>
          <Input placeholder="********" aria-labelledby="current" secureTextEntry />
        </View>
        <View className="gap-1">
          <Label nativeID="new">New password</Label>
          <Input placeholder="********" aria-labelledby="new" secureTextEntry />
        </View>
        <View className="gap-1">
          <Label nativeID="new">New password</Label>
          <Input placeholder="********" aria-labelledby="new" secureTextEntry />
        </View>

        <View className="flex flex-row items-center justify-center">
          <Text className="text-sm text-zinc-800 dark:!text-stone-200">Forgot your password? </Text>
          <Button
            variant="link"
            style={{ marginLeft: -10 }}
            className="native:-mt-1 items-center justify-center !text-red-600"
            onPress={() => null}>
            <Text className="font-bold !text-red-600">Reset Here</Text>
          </Button>
        </View>
      </CardContent>
      <CardFooter>
        <Button
          variant="link"
          className="h-[40px] w-full max-w-2xl !bg-yellow-500 web:!bg-yellow-700">
          <Text>Sign In</Text>
        </Button>
      </CardFooter>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: '#007AFF',
    textAlign: 'center',
  },
});
// ... styles remain the same
