import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export function useOrientation() {
  const [orientation, setOrientation] = useState<'PORTRAIT' | 'LANDSCAPE'>(() => {
    const { width, height } = Dimensions.get('screen');
    return width < height ? 'PORTRAIT' : 'LANDSCAPE';
  });

  useEffect(() => {
    const handler = ({ window }: { window: ScaledSize }) => {
      setOrientation(window.width < window.height ? 'PORTRAIT' : 'LANDSCAPE');
    };

    const subscription = Dimensions.addEventListener('change', handler);
    
    return () => subscription.remove();
  }, []);

  return orientation;
}