import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

/**
 * Server-only Supabase client for privileged writes/reads.
 * Keep SUPABASE_SERVICE_ROLE_KEY out of browser-exposed env vars.
 */
export const supabaseServer: SupabaseClient | null =
  supabaseUrl && serviceRoleKey ? createClient(supabaseUrl, serviceRoleKey) : null;
