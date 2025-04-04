import { createContext, useContext, useState } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { SolitoImage } from 'solito/image';

type AvatarContextType = { size: number };

const AvatarContext = createContext<AvatarContextType | null>(null);

const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) throw new Error('Avatar components must be wrapped in <Avatar>');
  return context;
};

// Avatar Root Component
const Avatar = ({
  children,
  size = 46,
  className = '',
}: {
  children: ReactNode;
  size?: number;
  className?: string;
}) => (
  <AvatarContext.Provider value={{ size }}>
    <View
      className={`overflow-hidden border-[2px] border-white  bg-gray-300 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {children}
    </View>
  </AvatarContext.Provider>
);

// Avatar Image Component
const AvatarImage = ({
  src,
  alt,
  priority,
  contentFit = 'contain',
  loader,
  unoptimized = false,
  quality = 75,
  loading,
  blurDataURL,
  ...props
}: ComponentProps<typeof SolitoImage>) => {
  const [error, setError] = useState(false);
  const { size } = useAvatar();

  if (error || !src) return null;

  return (
    <SolitoImage
      {...props}
      src={src}
      alt={alt}
      priority={priority}
      width={size}
      height={size}
      contentFit={contentFit}
      loader={loader}
      unoptimized={unoptimized}
      quality={quality}
      loading={loading}
      blurDataURL={blurDataURL}
      onError={() => setError(true)}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderColor: 'white',
        borderWidth: 1,
      }}
    />
  );
};

// Avatar Fallback Component
const getInitials = (name: string) => {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
};

const AvatarFallback = ({
  name,
  children,
  className = '',
}: {
  name?: string;
  children?: ReactNode;
  className?: string;
}) => {
  const { size } = useAvatar();
  return (
    <View
      className={`flex-1 items-center justify-center bg-gray-500 ${className}`}
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderColor: 'white',
        borderWidth: 1,
        width: size,
        height: size,
        borderRadius: size / 2,
        zIndex: -10,
      }}>
      {children || (
        <Text
          className=" text-center font-extrabold tracking-wider text-white"
          style={{ fontSize: size * 0.4, marginBottom: 4, marginRight: 1 }}>
          {name ? getInitials(name) : ''}
        </Text>
      )}
    </View>
  );
};

export { Avatar, AvatarImage, AvatarFallback };
