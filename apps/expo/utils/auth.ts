import { expo } from '@better-auth/expo';
import { betterAuth } from 'better-auth';
import { Pool } from 'pg';

export const auth = betterAuth({
  trustedOrigins: ['morphinpedia://', 'exp://', 'http://localhost:8081', 'http://localhost:3000'],
  emailAndPassword: {
    enabled: true,
  },
  plugins: [expo()],
  database: new Pool({
    connectionString: process.env.EXPO_PUBLIC_SUPABASE_URL,
  }),
  secret: process.env.EXPO_PUBLIC_SUPABASE_KEY,
});
