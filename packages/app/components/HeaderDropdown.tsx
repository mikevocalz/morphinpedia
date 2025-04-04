import { Avatar, AvatarImage, AvatarFallback } from '../../../apps/expo/components/avatar';
import { Pressable, View } from 'react-native';
import * as React from 'react'
import Animated, { FadeIn } from 'react-native-reanimated'
import { Button } from '../../../apps/expo/components/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuPortal
} from '../../../apps/expo/components/dropdown-menu';
import { Text } from '../../../apps/expo/components/text'

const GITHUB_AVATAR_URI = 'https://avatars.githubusercontent.com/u/17434202?v=4';


export const HeaderDropDown = () => {

  return (
    <View className="md:block self-center ">
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Pressable>
          <Avatar size={46} className="mr-1">
            <AvatarImage
              unoptimized={true}
              src={GITHUB_AVATAR_URI}
              alt="User profile picture"
              contentFit="contain"
            />
            <AvatarFallback name="Zach Nugent" />
          </Avatar>
        </Pressable>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          portal={DropdownMenuPortal}
          className=" mr-3 p-2 mt-3 bg-red-800 flex w-[200px] shadow-xl drop-shadow-xl"
        >
          <DropdownMenuLabel className='text-black font-bold !text-[20px] mb-4'>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Text>Team</Text>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Text>Invite users</Text>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className=" mr-1 p-2  mt-2 bg-yellow-300 flex">
                <Animated.View entering={FadeIn.duration(200)}>
                  <DropdownMenuItem>
                    <Text>Email</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Text>Message</Text>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Text>More...</Text>
                  </DropdownMenuItem>
                </Animated.View>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Text>New Team</Text>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Text>GitHub</Text>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Text>Support</Text>
          </DropdownMenuItem>
   
          <DropdownMenuItem>
            <Text>Log out</Text>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </View>
  )
};