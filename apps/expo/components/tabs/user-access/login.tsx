import { View } from 'react-native';

import { useTabStore } from '../../../store/tabStore';
import { Button } from '../../Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../card';
import { Input } from '../../input';
import { Label } from '../../label';
import { Text } from '../../text';

export default function Login() {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-4">
          <Text>Register</Text>
        </CardTitle>
        <CardDescription>
          <Text>Make changes to your account here. Click save when you're done.</Text>
        </CardDescription>
      </CardHeader>
      <CardContent className="native:gap-2 gap-4">
        <View className="gap-1">
          <Label nativeID="name" className="!mb-1 font-bold text-black dark:text-white">
            Name
          </Label>
          <Input
            aria-aria-labelledby="name"
            defaultValue="Pedro Duarte"
            placeholder="Pedro Duarte"
            placeholderClassName="!text-black dark:!text-white"
            className="!text-black dark:!text-white"
          />
        </View>
        <View className="gap-1">
          <Label nativeID="username" className="!mb-1 font-bold text-black dark:text-white">
            Username
          </Label>
          <Input id="username" defaultValue="@peduarte" />
        </View>

        <View className="flex flex-row items-center justify-center">
          <Text className="text-sm text-zinc-800 dark:!text-stone-200">
            Already have an account?{' '}
          </Text>

          <Button
            style={{ marginLeft: -10 }}
            variant="link"
            className="native:-mt-1 items-center justify-center  font-bold"
            onPress={() => setActiveTab('register')}>
            <Text className="font-bold !text-red-600">Click Here</Text>
          </Button>
        </View>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full max-w-2xl !bg-yellow-500 web:!bg-yellow-500">
          <Text className="font-bold">Sign Up</Text>
        </Button>
      </CardFooter>
    </Card>
  );
}
