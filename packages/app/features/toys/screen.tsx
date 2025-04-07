'use client'

import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti/app'
import { Button } from '../../../../apps/expo/components/Button'
import { Text } from '../../../../apps/expo/components/text'
import { View } from 'react-native'
import { H1 } from '@expo/html-elements'

export function ToysScreen() {
  return (
    <View className="flex-1 items-center gap-8 bg-red-500 min-h-screen w-full">
      <H1>Toys</H1>
      
      <View className="max-w-600 gap-16 my-12">
        <Text style={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
       
      </View>
    </View>
  )
}
