import { debounce } from 'lodash';

import { supabase } from './supabaseClient';

export const checkIsUsernameUnique = async (username: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('username')
    .eq('username', username)
    .single();

  if (error && error.code !== 'PGRST116') {
    // Ignore "no rows found" error
    throw error;
  }

  return !data;
};
