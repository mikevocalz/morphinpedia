import type { ViewRef } from '@rn-primitives/types';
import { forwardRef } from 'react';
import { View, type ViewProps } from 'react-native';

import { cn } from '../utils/utils';

const Box = forwardRef<ViewRef, ViewProps>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn('flex min-h-screen w-full flex-1 bg-zinc-200 dark:!bg-zinc-900', className)}
    {...props}
  />
));

export default Box;
