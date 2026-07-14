import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export function createSupabaseBrowserClient(): SupabaseClient<Database> | null {
  if (!url || !anonKey) return null;
  return createBrowserClient<Database>(url, anonKey);
}
