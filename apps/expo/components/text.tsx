import * as Slot from '@rn-primitives/slot';
import type { SlottableTextProps, TextRef } from '@rn-primitives/types';
import * as React from 'react';
import { createContext, forwardRef, useContext } from 'react';
import { Text as RNText } from 'react-native';

import { cn } from '../utils/utils';

const TextClassContext = createContext<string | undefined>(undefined);

const Text = forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;

    return (
      <Component
        className={cn('text-black web:select-text dark:text-white', textClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text, TextClassContext };
