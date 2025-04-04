'use client'
import { A } from '@expo/html-elements'
import { MotiLink } from 'solito/moti/app' 
import { usePathname } from 'solito/navigation'

const ButtonLink = ({ children, href, as, isActive: propIsActive }) => {
  // Get current pathname using Solito's hook
  const pathname = usePathname()
  
  // Normalize paths for comparison
  const currentPath = pathname?.substring(1) || ''
  const normalizedHref = (href || '').toLowerCase()
  const normalizedPath = currentPath.toLowerCase()
  
  // Allow override via prop or calculate based on pathname
  const isActive = propIsActive !== undefined 
    ? propIsActive 
    : normalizedPath === normalizedHref || 
      (normalizedHref === 'home' && (normalizedPath === '' || normalizedPath === 'home'))
  
  return (
    <MotiLink
      href={href}
      as={as}
      animate={({ hovered, pressed }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : hovered ? 1.05 : 1,
        }
      }}
    >
      <A
        className={`px-3 py-2 text-lg font-bold ${
          isActive ? 'text-black' : 'text-white'
        } hover:text-gray-400`}
      >
        {children}
      </A>
    </MotiLink>
  )
}

export default ButtonLink
