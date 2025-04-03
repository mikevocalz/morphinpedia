import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'solito/navigation'

export function UserDetailScreen() {
  const router = useRouter()
  return (
    <View className="flex-1 items-center justify-center bg-orange-500">
      <Pressable onPress={() => router.back()}>
        <Text>👈 Go Home</Text>
      </Pressable>
    </View>
  )
}
