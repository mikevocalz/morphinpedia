'use client'
import Logo from '../../../apps/expo/components/Logo'
import ButtonLink from './ButtonLink';
import { usePathname } from 'solito/navigation'
import { Avatar, AvatarImage, AvatarFallback } from '../../../apps/expo/components/avatar';
import { Text,View, Pressable, } from 'react-native';
import { Header , Nav} from '@expo/html-elements'
import { useState } from 'react';
import { Link } from 'solito/link';
import { Clock, Globe, Compass, Users, Heart } from 'lucide-react-native';
import { MotiView } from 'moti';
import { Image } from 'expo-image';
import { SolitoImage } from 'solito/image';


const GITHUB_AVATAR_URI = 'https://www.github.com/mrzachnugent.png'

const iconComponents = {
  Timeline: Clock,
  Explore: Globe,
  Friends: Users,
  Moments: Heart,
}


const headerLinks: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
  {
    pathname: '/',
    isActive: (pathname) => pathname === '/',
    name: 'Timeline',
  },
  {
    pathname: '/explore',
    isActive: (pathname) => pathname.startsWith('/explore') || pathname.startsWith('/users/'),
    name: 'Explore',
    protected: false,
  },
  {
    pathname: '/friends',
    isActive: (pathname) => pathname.startsWith('/friends'),
    name: 'Friends',
  },
  {
    pathname: '/moments',
    isActive: (pathname) => pathname.startsWith('/moments'),
    name: 'Moments',
  },
]
export default function SiteHeader() {

    const pathname = usePathname()
    const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <Header className="sticky justify-center top-0 z-50 bg-red-800 backdrop-blur-sm  flex-row">
      <View className="flex-1 max-w-screen-2xl px-2 sm:px-3 lg:px-4 items-center w-full">
        <View className="flex items-center justify-between h-16 flex-row w-full">
          {/* Logo - Left aligned */}
          <Link href="/">
            <View className="flex-shrink-0 w-[80px]">
              <Logo height={56} width={216} />
            </View>
          </Link>
          {/* Desktop Nav - Right aligned */}
          <Nav className="hidden lg:flex space-x-8 flex-row justify-end">
            {headerLinks.map((item: any, index: number) => {
              // Check if this link is active
              const isActive = item.isActive(pathname)

              return (
                <ButtonLink
                  key={index}
                  href={item.pathname}
                  as={item.pathname}
                  isActive={isActive}
                >
                  {item.name}
                </ButtonLink>
              )
            })}
          </Nav>

          {/* Tablet Icons (md) with animated underline */}
          <Nav className="hidden md:flex lg:hidden flex-row space-x-8 mr-4">
            {headerLinks.map((item: any, index: number) => {
              const isActive = item.isActive(pathname || '')
              const IconComponent = iconComponents[item.name]
              return (
                <Link href={item.pathname} key={item.name}>
                  <Pressable className="p-4 items-center  items-center">
                    <MotiView
                      animate={{
                        color: isActive ? '#000' : '#fff',
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ type: 'spring', damping: 10 }}
                      style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <IconComponent
                        size={24}
                        color={isActive ? '#000' : '#fff'}
                        fill={isActive ? '#4c4c4c' : 'transparent'}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      {/* Animated Underline */}
                      <MotiView
                        animate={{
                          scaleX: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          type: 'spring',
                          damping: 15,
                          stiffness: 200,
                        }}
                        style={{
                          position: 'absolute',
                          paddingHorizontal: 40,
                          bottom: -17,
                          scaleX: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                          width: isActive ? '100%' : '0%',
                          height: isActive ? 3 : 0,
                          backgroundColor: isActive ? '#000' : '#fff',
                          borderRadius: 20,
                        }}
                      />
                    </MotiView>
                  </Pressable>
                </Link>
              )
            })}
          </Nav>

          <View className="md:block self-center">
            {!isSignedIn ? (
              <Avatar size={46} className='mr-1'>
                <AvatarImage
                  priority
                  src={GITHUB_AVATAR_URI}
                  alt="User profile picture"
                  contentFit="contain"
                />
                <AvatarFallback name="Zach Nugent" />
              </Avatar>
            ) : (
              <Pressable className="ml-8 mr-4  px-4 py-2  bg-indigo-600 rounded-md hover:bg-indigo-700">
                <Text className="text-[16px] font-extrabold tracking-wider  text-white">
                  Sign In
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Header>
  )
}
