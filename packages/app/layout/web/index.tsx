'use client'
import { ReactElement, ReactNode} from 'react'
import SiteHeader from '../../components/SiteHeader'
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
  <Div className="h-screen w-full flex flex-col bg-zinc-200 ">
    <SiteHeader />
    <Main className="w-full max-w-screen-2xl flex-1 overflow-y-auto h-[calc(100vh-8rem)] self-center ">
      {children}
    </Main>
  </Div>
 ) 
}

export default WebLayout