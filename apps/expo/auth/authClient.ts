import { expoClient } from '@better-auth/expo/client';
import { inferAdditionalFields, usernameClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import * as SecureStore from 'expo-secure-store';

export const authClient = createAuthClient({
  baseURL: process.env.EXPO_PUBLIC_BETTER_AUTH_URL,
  scheme: 'morphinpedia',
  disableCache: true,
  user: {
    additionalFields: {
      username: {
        type: 'string',
        required: true,
        defaultValue: null,
        input: true, // allow user to set role - false with hide this field,
      },
    },
  } /* base url of your Better Auth backend. */,
  plugins: [
    expoClient({
      scheme: 'morphinpedia',
      storagePrefix: 'morphinpedia',
      storage: SecureStore,
    }),
    usernameClient(),
    inferAdditionalFields({
      user: {
        username: {
          type: 'string',
          required: true,
          defaultValue: null,
          input: true, // allow user to set role - false with hide this field,
        },
      },
    }),
  ],
});
