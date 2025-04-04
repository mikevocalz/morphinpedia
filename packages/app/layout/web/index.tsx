'use client'
import { ReactElement, ReactNode} from 'react'
import SiteHeader from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import { Platform } from 'react-native'
import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { useColorScheme } from 'nativewind'
import { Main, Header, Div } from '@expo/html-elements'

const WebLayout = ({ children }: { children: ReactNode }) => {
 
  // const hasMounted = useRef(false)
  // const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false)
  // const { colorScheme } = useColorScheme()

  // useIsomorphicLayoutEffect(() => {
  //   if (hasMounted.current) {
  //     return
  //   }

  //   if (Platform.OS === 'web') {
  //     // Adds the background color to the html element to prevent white background on overscroll.
  //     document.documentElement.classList.add('bg-background')
  //   }
  //   setIsColorSchemeLoaded(true)
  //   hasMounted.current = true
  // }, [colorScheme])

  // if (!isColorSchemeLoaded) {
  //   return null
  // }


return (
  <Div className="min-h-screen w-full flex flex-col bg-zinc-200
    scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-yellow-900 h-32 overflow-y-scroll">

    <SiteHeader />
    <Main className="flex w-full max-w-screen-2xl self-center">
      {children}
    </Main>
    <SiteFooter />
  </Div>
) 
}

export default WebLayout