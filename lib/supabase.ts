import { createClient } from '@supabase/supabase-js';

// Accessing environment variables
// Use placeholder values during build to prevent createClient from throwing.
// The API route guards against missing env vars at runtime before any DB call.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
