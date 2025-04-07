import { ThemeToggle } from '../../../../apps/expo/components/ThemeToggle'
import { View,  Pressable } from 'react-native'
import { useParams, useRouter, useSearchParams } from 'solito/navigation'
import { Text } from '../../../../apps/expo/components/text'
import  Logo  from '../../../../apps/expo/components/Logo'

const useUserParams = useParams<{ userId: string }>


export function UserDetailScreen() {
  
  const { userId } = useUserParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  

  return (
    <View className="flex-1 items-center p-4  bg-zinc-200 dark:bg-stone-950 min-h-screen w-full">
      <Pressable className="mb-6" onPress={() => router.back()}>
        <Text className="text-2xl mb-6 font-bold dark:text-white">
          👈 Go Home now {userId}, here is the search param:{' '}
          {searchParams?.get('search')}
        </Text>
      </Pressable>


      <View style={{ paddingLeft: 140, paddingRight: 40 }} className="pl-[140px] bg-yellow-400 my-8 w-full ">
        <ThemeToggle />
      </View>

   
    </View>
  )
}
