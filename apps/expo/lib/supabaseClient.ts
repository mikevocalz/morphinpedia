import { createClient } from '@supabase/supabase-js';
import { EXPO_PUBLIC_SUPABASE_KEY, EXPO_PUBLIC_SUPABASE_URL } from "@env";


const SUPABASE_URL = EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY =  EXPO_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
