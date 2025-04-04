import { ThemeToggle } from '../../../../apps/expo/components/ThemeToggle'
import { View,  Pressable } from 'react-native'
import { useRouter } from 'solito/navigation'
import { Text } from '../../../../apps/expo/components/text'
import  Logo  from '../../../../apps/expo/components/Logo'

export function UserDetailScreen() {
  
  const router = useRouter();
  

  return (
    <View className="flex-1 h-screen w-full items-center bg-zinc-200 dark:bg-stone-950">
      <Pressable onPress={() => router.back()}>
        <Text className='text-2xl font-bold dark:text-white'>👈 Go Home now</Text>
      </Pressable>

      <View className="my-12 bg-red-500 p-6">
        <ThemeToggle />
      </View>

      <Logo width={400} height={100} />
    </View>
  )
}
