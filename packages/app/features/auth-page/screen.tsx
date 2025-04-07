'use client'
import { View } from 'react-native'
import { Button } from '../../../../apps/expo/components/Button'
import { Text } from '../../../../apps/expo/components/text'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../../apps/expo/components/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../apps/expo/components/tabs'
import { useState } from 'react'
import Register from '../../../../apps/expo/components/tabs/user-access/register'
import Login from '../../../../apps/expo/components/tabs/user-access/login'
import Logo from '../../../../apps/expo/components/Logo'
import { ThemeToggle } from '../../../../apps/expo/components/ThemeToggle'
import { useTabStore } from '../../../../apps/expo/store/tabStore'


function AuthScreen() {
  const { activeTab, setActiveTab } = useTabStore()

  return (
    <View className="flex-1 items-center p-6 bg-zinc-200 dark:bg-stone-950">
      <Logo width={340} height={160} />
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-xl mx-auto p-2 flex-col web:rounded-xl gap-4  "
      >
        <TabsList className="flex-row w-full bg-zinc-100 dark:bg-stone-800 mb-[6px] web:border-[1px] !border-black">
          <TabsTrigger
            value="login"
            className={`flex-1 shadow-none rounded-sm web:rounded-md ${activeTab === 'login' ? '!bg-zinc-300 dark:!bg-zinc-700 mx-1 h-[34px]' : 'transparent'}`}
          >
            <Text className="font-bold md:text-lg !shadow-none !text-shadow-none">
              Sign Up
            </Text>
          </TabsTrigger>
          <TabsTrigger
            value="register"
            className={`flex-1 shadow-none box-shadow-none rounded-sm web:rounded-md ${activeTab === 'register' ? '!bg-zinc-300 dark:!bg-zinc-700 mx-1 h-[34px]' : 'transparent'}`}
          >
            <Text className="font-bold md:text-lg !shadow-none !text-shadow-none">
              Sign In
            </Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="login"
          className="bg-zinc-100 dark:bg-stone-800 rounded-lg native:rounded-md "
        >
          <Login />
        </TabsContent>

        <TabsContent
          value="register"
          className="bg-zinc-100 dark:bg-stone-800 web:rounded-lg"
        >
          <Register />
        </TabsContent>
      </Tabs>

      <View className="mt-4 bg-red-400 items-center h-[100px] w-full p-2">
        <ThemeToggle />
      </View>
    </View>
  )
}


export default AuthScreen