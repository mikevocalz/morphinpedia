'use client'

import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti/app'
import { Button } from '../../../../apps/expo/components/Button'
import { Text } from '../../../../apps/expo/components/text'
import { H1 } from '@expo/html-elements'

export function ResetScreen() {
  return (
    <View className="flex-1 items-center gap-8 bg-red-500 min-h-screen w-full">
      <H1>Reset Password</H1>
      <View style={{ maxWidth: 600, gap: 16 }}>
        <Text style={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <TextLink
            href="https://twitter.com/fernandotherojo"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'blue' }}
          >
              <Text> Fernando Rojo</Text>
          </TextLink>
          .
        </Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <TextLink
          href="/users/fernando"
          style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}
        >
          Regular Link
        </TextLink>
        <MotiLink
          href="/users/fernando"
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </View>
    </View>
  )
}
